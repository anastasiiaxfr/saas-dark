'use client';
import Image from 'next/image';
import i1 from '@/assets/img/brands/b1.png';
import i2 from '@/assets/img/brands/b2.png';
import i3 from '@/assets/img/brands/b3.png';
import i4 from '@/assets/img/brands/b4.png';
import i5 from '@/assets/img/brands/b5.png';
import { motion } from 'framer-motion';

const logos = [i1, i2, i3, i4, i5];

export default function Brands(){
    return (
        <section className="bg-black text-white py-[72px] sm:py-24">
            <div className="container text-center">
                <h2 className='text-xl opacity-70'>Trusted by the world’s most innovative teams</h2>

                <div className="flex relative overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5  before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:right-0 before:left-0 after:top-0 before:top-0 before:z-10">
                   <motion.div transition={{ duration: 10, ease: "linear", repeat: Infinity }} initial={{ translateX: 0 }} animate={{ translateX: "-50%" }} className="flex gap-16 flex-none pr-16">
                   {logos.map((img, ind) => (
                        <Image src={img} key={ind} alt="ALT" className='flex-none h-8 w-auto'/>
                    ))}
                     {logos.map((img, ind) => (
                        <Image src={img} key={ind} alt="ALT" className='flex-none h-8 w-auto'/>
                    ))}
                   </motion.div>
                </div>
            </div>
        </section>
    );
}