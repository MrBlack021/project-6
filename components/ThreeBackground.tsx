
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useAppContext } from '../context/AppContext';

export const ThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useAppContext();

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Setup ---
        const scene = new THREE.Scene();
        
        // Camera setup
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5; 
        
        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        let animationFrameId: number;
        let cleanupFunction: () => void = () => {};

        // --- Interaction State ---
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX / window.innerWidth - 0.5;
            mouseY = event.clientY / window.innerHeight - 0.5;
        };
        const handleTouchMove = (event: TouchEvent) => {
             if (event.touches.length > 0) {
                 mouseX = event.touches[0].clientX / window.innerWidth - 0.5;
                 mouseY = event.touches[0].clientY / window.innerHeight - 0.5;
             }
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);


        // ==========================================
        // SCENE LOGIC SPLIT
        // ==========================================
        
        if (theme === 'dark') {
            // --- DARK MODE: GALAXY / PROTOPLANETARY DISK ---
            camera.position.y = 2;
            
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 4500;
            
            const posArray = new Float32Array(particlesCount * 3);
            const colorsArray = new Float32Array(particlesCount * 3);
            const sizesArray = new Float32Array(particlesCount);
            
            const colorInside = new THREE.Color('#FCE588'); // Neon Gold
            const colorMiddle = new THREE.Color('#D4AF37'); // Gold
            const colorOutside = new THREE.Color('#38bdf8'); // Cyan
            
            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                const radius = Math.pow(Math.random(), 1.5) * 6; 
                const spinAngle = radius * 2.5; 
                const branchAngle = (i % 3) / 3 * Math.PI * 2;
                
                const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * radius;
                const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * radius;
                const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * radius;

                posArray[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
                posArray[i3 + 1] = (Math.random() - 0.5) * 0.5 + randomY * 0.2; 
                posArray[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

                const mixedColor = colorInside.clone();
                if (radius < 1.5) {
                    mixedColor.lerp(colorMiddle, radius / 1.5);
                } else {
                    mixedColor.copy(colorMiddle);
                    mixedColor.lerp(colorOutside, (radius - 1.5) / 4.5);
                }

                colorsArray[i3] = mixedColor.r;
                colorsArray[i3 + 1] = mixedColor.g;
                colorsArray[i3 + 2] = mixedColor.b;
                sizesArray[i] = Math.random();
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
            particlesGeometry.setAttribute('aScale', new THREE.BufferAttribute(sizesArray, 1));

            // Texture generation for glow
            const getParticleTexture = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 32;
                canvas.height = 32;
                const ctx = canvas.getContext('2d');
                if(ctx) {
                    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
                    gradient.addColorStop(0, 'rgba(255,255,255,1)');
                    gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
                    gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
                    gradient.addColorStop(1, 'rgba(0,0,0,0)');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, 32, 32);
                }
                return new THREE.CanvasTexture(canvas);
            };

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.08,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                vertexColors: true,
                map: getParticleTexture(),
                transparent: true,
                opacity: 0.9
            });

            const galaxy = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(galaxy);

            // Core Glow
            const coreGeometry = new THREE.SphereGeometry(0.2, 16, 16);
            const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
            const core = new THREE.Mesh(coreGeometry, coreMaterial);
            scene.add(core);

            const coreGlowMaterial = new THREE.SpriteMaterial({
                map: getParticleTexture(),
                color: 0xFCE588,
                transparent: true,
                opacity: 0.5,
                blending: THREE.AdditiveBlending
            });
            const coreGlow = new THREE.Sprite(coreGlowMaterial);
            coreGlow.scale.set(3, 3, 1);
            scene.add(coreGlow);

            const clock = new THREE.Clock();
            
            // Animation Loop for Dark Mode
            const animateGalaxy = () => {
                const elapsedTime = clock.getElapsedTime();
                galaxy.rotation.y = elapsedTime * 0.05;
                
                const pulse = 1 + Math.sin(elapsedTime * 2) * 0.1;
                core.scale.set(pulse, pulse, pulse);
                coreGlow.scale.set(3 * pulse, 3 * pulse, 1);

                const targetCameraX = mouseX * 4; 
                const targetCameraY = 2 + (mouseY * 2); 
                camera.position.x += (targetCameraX - camera.position.x) * 0.05;
                camera.position.y += (targetCameraY - camera.position.y) * 0.05;
                camera.lookAt(new THREE.Vector3(0, 0, 0));

                renderer.render(scene, camera);
                animationFrameId = requestAnimationFrame(animateGalaxy);
            };
            animateGalaxy();

            cleanupFunction = () => {
                particlesGeometry.dispose();
                particlesMaterial.dispose();
                coreGeometry.dispose();
                coreMaterial.dispose();
                coreGlowMaterial.dispose();
            };

        } else {
            // --- LIGHT MODE: MOLECULAR NETWORK / PLEXUS ---
            // A clean, connected network of nodes suitable for a white background
            
            camera.position.z = 100;
            camera.position.y = 0;

            const particleCount = 120;
            const group = new THREE.Group();
            scene.add(group);

            // Create individual particles
            const particlesData: { velocity: THREE.Vector3; numConnections: number }[] = [];
            const particlePositions = new Float32Array(particleCount * 3);
            
            // Geometry for the points
            const pGeometry = new THREE.BufferGeometry();
            const pMaterial = new THREE.PointsMaterial({
                color: 0x0A2540, // Deep Blue
                size: 2, // Larger, distinct dots
                blending: THREE.NormalBlending,
                transparent: true,
                sizeAttenuation: false
            });

            // Range for particle distribution
            const r = 80; 
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * r - r / 2;
                const y = Math.random() * r - r / 2;
                const z = Math.random() * r - r / 2;

                particlePositions[i * 3] = x;
                particlePositions[i * 3 + 1] = y;
                particlePositions[i * 3 + 2] = z;

                particlesData.push({
                    velocity: new THREE.Vector3(
                        -0.5 + Math.random(),
                        -0.5 + Math.random(),
                        -0.5 + Math.random()
                    ).multiplyScalar(0.2), // Speed
                    numConnections: 0
                });
            }

            pGeometry.setDrawRange(0, particleCount);
            pGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));
            
            const pointCloud = new THREE.Points(pGeometry, pMaterial);
            group.add(pointCloud);

            // Geometry for the connecting lines
            const lineGeometry = new THREE.BufferGeometry();
            const lineMaterial = new THREE.LineBasicMaterial({
                color: 0x0A2540,
                transparent: true,
                opacity: 0.15 // Subtle connections
            });

            // Max possible connections (fully connected graph, though we limit by distance)
            const maxConnections = particleCount * particleCount; 
            const linePositions = new Float32Array(maxConnections * 3);
            lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
            
            const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
            group.add(linesMesh);

            const animateNetwork = () => {
                let vertexpos = 0;
                let colorpos = 0;
                let numConnected = 0;

                // Reset connection counts
                for (let i = 0; i < particleCount; i++) {
                    particlesData[i].numConnections = 0;
                }

                // Update particle positions
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    
                    // Update position
                    particlePositions[i3] += particlesData[i].velocity.x;
                    particlePositions[i3 + 1] += particlesData[i].velocity.y;
                    particlePositions[i3 + 2] += particlesData[i].velocity.z;

                    // Boundary Check (Bounce box)
                    if (particlePositions[i3] < -r/2 || particlePositions[i3] > r/2) particlesData[i].velocity.x = -particlesData[i].velocity.x;
                    if (particlePositions[i3+1] < -r/2 || particlePositions[i3+1] > r/2) particlesData[i].velocity.y = -particlesData[i].velocity.y;
                    if (particlePositions[i3+2] < -r/2 || particlePositions[i3+2] > r/2) particlesData[i].velocity.z = -particlesData[i].velocity.z;

                    // Interaction with Mouse (Repel/Attract or just Rotate)
                    // For a professional look, we just rotate the whole group based on mouse, 
                    // and keep the internal chaos.
                }

                // Create connections
                // O(N^2) loop, but N=120 is very fast.
                for (let i = 0; i < particleCount; i++) {
                    for (let j = i + 1; j < particleCount; j++) {
                        const dx = particlePositions[i * 3] - particlePositions[j * 3];
                        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
                        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
                        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                        if (dist < 20) {
                            // Add line vertices
                            linePositions[vertexpos++] = particlePositions[i * 3];
                            linePositions[vertexpos++] = particlePositions[i * 3 + 1];
                            linePositions[vertexpos++] = particlePositions[i * 3 + 2];

                            linePositions[vertexpos++] = particlePositions[j * 3];
                            linePositions[vertexpos++] = particlePositions[j * 3 + 1];
                            linePositions[vertexpos++] = particlePositions[j * 3 + 2];
                            
                            numConnected++;
                        }
                    }
                }

                linesMesh.geometry.setDrawRange(0, numConnected * 2);
                linesMesh.geometry.attributes.position.needsUpdate = true;
                pointCloud.geometry.attributes.position.needsUpdate = true;

                // Gentle rotation of the whole system
                group.rotation.y += 0.001;
                group.rotation.x += 0.001;
                
                // Parallax
                group.rotation.y += mouseX * 0.01;
                group.rotation.x += mouseY * 0.01;

                renderer.render(scene, camera);
                animationFrameId = requestAnimationFrame(animateNetwork);
            };
            animateNetwork();

            cleanupFunction = () => {
                pGeometry.dispose();
                pMaterial.dispose();
                lineGeometry.dispose();
                lineMaterial.dispose();
            };
        }


        // --- Resize Handler ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // --- Cleanup ---
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            cleanupFunction();
        };
    }, [theme]);

    return (
        <div 
            ref={containerRef} 
            className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
            style={{ overflow: 'hidden' }}
        />
    );
};
