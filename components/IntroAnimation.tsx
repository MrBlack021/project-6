
import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext';

interface IntroAnimationProps {
    onFinish: () => void;
}

class Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    color: string;
    size: number;
    vx: number;
    vy: number;
    ease = 0.05;
    friction = 0.9;

    constructor(x: number, y: number, color: string, canvasWidth: number, canvasHeight: number) {
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = 2; // Fixed size for sharper image reproduction
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 10;
        this.vy = (Math.random() - 0.5) * 10;
    }

    update() {
        const ax = (this.originX - this.x) * this.ease;
        const ay = (this.originY - this.y) * this.ease;

        this.vx += ax;
        this.vy += ay;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }
}


const IntroAnimation: React.FC<IntroAnimationProps> = ({ onFinish }) => {
    const [isExiting, setIsExiting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useAppContext();

    useEffect(() => {
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 2800);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, 3300);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;
        
        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        const initializeParticles = (image: HTMLImageElement) => {
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            if (!tempCtx) return;

            // Determine draw size for the logo on the intro screen
            // We want it relatively large but contained
            const maxDimension = Math.min(canvas.width, 600) * 0.8;
            const scale = Math.min(maxDimension / image.width, (canvas.height * 0.4) / image.height);
            
            const w = Math.floor(image.width * scale);
            const h = Math.floor(image.height * scale);

            tempCanvas.width = w;
            tempCanvas.height = h;
            
            // Draw image to temp canvas
            tempCtx.drawImage(image, 0, 0, w, h);

            const imageData = tempCtx.getImageData(0, 0, w, h);
            const samplingRate = 3; // Lower = more particles, Higher = performance

            // Calculate offset to center the logo
            const startX = (canvas.width - w) / 2;
            const startY = (canvas.height - h) / 2;

            for (let y = 0; y < h; y += samplingRate) {
                for (let x = 0; x < w; x += samplingRate) {
                    const alphaIndex = (y * w + x) * 4 + 3;
                    if (imageData.data[alphaIndex] > 128) {
                        const r = imageData.data[alphaIndex - 3];
                        const g = imageData.data[alphaIndex - 2];
                        const b = imageData.data[alphaIndex - 1];
                        const color = `rgb(${r},${g},${b})`;
                        
                        const originX = startX + x;
                        const originY = startY + y;
                        
                        particles.push(new Particle(originX, originY, color, canvas.width, canvas.height));
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        
        // Load the logo image
        const img = new Image();
        img.src = '/logo.png';
        img.crossOrigin = "Anonymous";
        
        img.onload = () => {
            particles = [];
            initializeParticles(img);
            if (particles.length > 0) {
                 animate();
            }
        };

        // Fallback or simple timeout if image fails? 
        // For now we rely on the image. If it fails, screen is blank until timeout.

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };

    }, [theme]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-light-bg-main dark:bg-dark-bg-main transition-opacity duration-500 ${isExiting ? 'animate-intro-fade-out' : 'opacity-100'}`}
            aria-hidden="true"
        >
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default IntroAnimation;
