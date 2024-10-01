'use client';
import { useRef, useEffect } from "react";
import Img1 from "@/assets/img/img3.svg";
import Img2 from "@/assets/img/img4.svg";
import { useScroll, useTransform, motion } from "framer-motion";


export default function CTA(){
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    });

    useEffect(() => {
        //scrollYProgress.on('change', value => console.log('value', value))
    }, []);

    const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section className="bg-black text-white py-[72px] sm:py-24 overflow-x-clip" ref={containerRef}>
            <div className="relative container text-center max-w-xl mx-auto">
                <motion.div
                style={{ translateY }}>
                    <Img1 className="absolute top-6 left-[calc(100%+36px)] hidden sm:inline" />
                </motion.div>
                <motion.div style={{ translateY }}>
                    <Img2 className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline" />
                </motion.div>
                <div className="">
                    <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get instant access</h2>
                    <p className="text-xl opacity-70 mt-5">
                        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
                    </p>
                    <form action="" className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
                        <input className="h-12 bg-white/20 rounded-lg px-5 fomt-medium placeholder:text-[#9CA3AF] sm:flex-1" type="email" placeholder="your@email.com"/>
                        <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
                    </form>
                </div>

            </div>
        </section>
    )
}