import React, { useState, useRef, useEffect } from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';

interface Message {
    sender: 'user' | 'agent';
    text: string;
}

const Platform: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'agent', text: "Hello! I'm your new AI Agent. How can I help you today? Try asking me to 'search the web for the latest AI news'." }
    ]);
    const [input, setInput] = useState('');
    const [agentConfig, setAgentConfig] = useState({
        model: 'gemini-2.5-pro',
        systemPrompt: 'You are a helpful and versatile AI assistant. You can search the web, perform calculations, and answer questions with accuracy.',
        tools: { webSearch: true, calculator: false }
    });
    const chatEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate agent response
        setTimeout(() => {
            let agentResponseText = "I'm sorry, I can only provide simulated responses. Try asking me to search the web!";
            if (input.toLowerCase().includes('search the web')) {
                agentResponseText = `Simulating a web search with ${agentConfig.model}... Done! According to my simulated sources, Gemini continues to push the boundaries of AI capabilities.`;
            } else if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi')) {
                 agentResponseText = "Hello there! How can I assist you with your agent-building task today?";
            }
            const agentMessage: Message = { sender: 'agent', text: agentResponseText };
            setMessages(prev => [...prev, agentMessage]);
        }, 1200);
    };
    
    return (
        <div className="bg-bg-section min-h-screen">
            <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-200 h-full" style={{minHeight: 'calc(100vh - 80px)'}}>
                    {/* Left Panel: Agent List */}
                    <div className="col-span-12 lg:col-span-2 bg-white p-4">
                         <h2 className="text-lg font-poppins font-bold mb-4">My Agents</h2>
                         <button className="w-full text-left p-3 rounded-md bg-primary text-white font-semibold">
                            📈 Sales Analyst Agent
                         </button>
                         <button className="w-full text-left p-3 rounded-md hover:bg-gray-100 text-gray-700 mt-2">
                            ✉️ Customer Support Bot
                         </button>
                    </div>

                    {/* Center Panel: Chat/Workspace */}
                    <div className="col-span-12 lg:col-span-7 bg-bg-main flex flex-col">
                        <div className="p-4 border-b bg-white">
                            <h1 className="text-xl font-poppins font-bold">Sales Analyst Agent</h1>
                            <p className="text-sm text-gray-500">Status: <span className="text-green-500">●</span> Online</p>
                        </div>
                        <div className="flex-grow p-4 overflow-y-auto">
                            <div className="space-y-4">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                        {msg.sender === 'agent' && <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">A</div>}
                                        <div className={`max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 text-text-main'}`}>
                                            <p>{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                                <div ref={chatEndRef} />
                            </div>
                        </div>
                        <div className="p-4 bg-white border-t">
                             <form onSubmit={handleSendMessage} className="flex items-center gap-4">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Test your agent..."
                                    className="flex-grow px-4 py-2 bg-white text-text-main border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <Button type="submit" className="px-6 py-2">Send</Button>
                            </form>
                        </div>
                    </div>

                    {/* Right Panel: Configuration */}
                    <div className="col-span-12 lg:col-span-3 bg-white p-4 overflow-y-auto">
                        <h2 className="text-lg font-poppins font-bold mb-4">Configuration</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Model</label>
                                <select 
                                    value={agentConfig.model}
                                    onChange={e => setAgentConfig(c => ({...c, model: e.target.value}))}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white text-text-main rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option>gemini-2.5-pro</option>
                                    <option>gemini-2.5-flash</option>
                                    <option>Llama 3</option>
                                    <option>Mistral Large</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">System Prompt</label>
                                <textarea
                                    rows={6}
                                    value={agentConfig.systemPrompt}
                                     onChange={e => setAgentConfig(c => ({...c, systemPrompt: e.target.value}))}
                                    className="mt-1 font-mono text-sm block w-full px-3 py-2 bg-white text-text-main border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                             <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Tools</h3>
                                <div className="space-y-2">
                                     <label className="flex items-center">
                                        <input type="checkbox" checked={agentConfig.tools.webSearch} onChange={e => setAgentConfig(c => ({...c, tools: {...c.tools, webSearch: e.target.checked}}))} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                                        <span className="ml-2 text-sm text-gray-600">Web Search</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" checked={agentConfig.tools.calculator} onChange={e => setAgentConfig(c => ({...c, tools: {...c.tools, calculator: e.target.checked}}))} className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                                        <span className="ml-2 text-sm text-gray-600">Calculator</span>
                                    </label>
                                </div>
                            </div>
                            <Button className="w-full" onClick={() => alert('Deployment simulated!')}>Deploy Agent</Button>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default Platform;
