'use client';
import { useRef, useEffect } from 'react';
import Image from "next/image";
import Img from "@/assets/img/pic1.png";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Product () {
    const appImage = useRef<HTMLImageElement>(null);
    const { scrollYProgress } = useScroll({
        target: appImage,
        offset: 
            ['start end', 'end end'],
        });
        useEffect(() => {
            scrollYProgress.on('change', (latestValue) => console.log('latestValue', latestValue))
        }, []);
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    return (
        <section className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
            <div className="container text-center">
                <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
                Intuitive interface
                </h2>
               <div className="max-w-xl mx-auto">
               <p className="text-xl opacity-70 mt-5">
                Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.
                </p>
               </div>
                <motion.div
                style={{
                    opacity: opacity,
                    rotateX: rotateX,
                    transformPerspective: "800px",

                }}>
                    <Image className="mt-14  mx-auto" src={Img} alt="ALT" ref={appImage} />
                </motion.div>
            </div>
        </section>
    )
}