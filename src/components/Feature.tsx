'use client';
import { useEffect, useRef } from 'react';
import Icon from '@/assets/img/icon/i1.svg'; 
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';


export default function Feature ({title, desc}: any){
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null); 
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current?.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, [])
    return (
    <div className='relative border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1'>
        <motion.div className="absolute inset-0 border-2 border-purple-400 rounded-xl" style={{ maskImage: maskImage, WebkitMaskImage: maskImage }} ref={border}></motion.div>
        <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
            <Icon />
        </div>
        <h3 className='mt-6 font-bold'>{title}</h3>
        <p className='mt-2 opacity-70'>{desc}</p>
    </div>
    )
}