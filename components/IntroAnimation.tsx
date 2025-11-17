
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
        this.size = 2;
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
        const logoScale = 2.5;
        const logoWidth = 200 * logoScale;
        const logoHeight = 44 * logoScale;
        const textFontSize = 24 * logoScale;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        const initializeParticles = () => {
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            if (!tempCtx) return;

            tempCanvas.width = logoWidth;
            tempCanvas.height = logoHeight;
            
            const textColor = theme === 'dark' ? '#9CA3AF' : '#6B7280';
            tempCtx.fillStyle = textColor;
            tempCtx.font = `bold ${textFontSize}px Poppins, sans-serif`;
            tempCtx.textAlign = 'left';
            tempCtx.textBaseline = 'middle';
            tempCtx.fillText('Huntifyy', 52 * logoScale, 22 * logoScale);
            
            const circleColor = '#F59E0B';
            tempCtx.fillStyle = circleColor;
            tempCtx.beginPath();
            tempCtx.arc(22 * logoScale, 22 * logoScale, 15 * logoScale, 0, Math.PI * 2);
            tempCtx.fill();

            const imageData = tempCtx.getImageData(0, 0, logoWidth, logoHeight);
            const samplingRate = 4;
            for (let y = 0; y < imageData.height; y += samplingRate) {
                for (let x = 0; x < imageData.width; x += samplingRate) {
                    const alphaIndex = (y * imageData.width + x) * 4 + 3;
                    if (imageData.data[alphaIndex] > 128) {
                        const r = imageData.data[alphaIndex - 3];
                        const g = imageData.data[alphaIndex - 2];
                        const b = imageData.data[alphaIndex - 1];
                        const color = `rgb(${r},${g},${b})`;
                        
                        const originX = (canvas.width / 2 - logoWidth / 2) + x;
                        const originY = (canvas.height / 2 - logoHeight / 2) + y;
                        
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
        
        document.fonts.ready.then(() => {
            particles = [];
            initializeParticles();
            if (particles.length > 0) {
                 animate();
            }
        });


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