'use client';
import ArrowIcon from '@/assets/img/icon/arr-rt.svg';
import CursorImage from '@/assets/img/img1.svg';
import MessageImage from '@/assets/img/img2.svg';
import { motion } from 'framer-motion';

export default function () {
    return (
        <section className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative z-[1] overflow-clip">
            <div className="container relativ z-[2] text-center">
                <div className="flex items-center justify-center">
                    <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
                        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93DD,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text ">Version 2.0 is here</span>
                        <span className='inline-flex items-center gap-1'>
                            <span>
                                Read more
                            </span>
                            <ArrowIcon />
                        </span>
                    </a>
                </div>
               <div className="inline-flex relative mt-8">
               <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter'>One Task <br />
               at a Time</h1>
               <motion.div className='absolute right-[476px] top-[108px] hidden sm:inline' drag dragSnapToOrigin>
                <MessageImage className='max-w-none' draggable="false"/>
               </motion.div>
               <motion.div className='absolute top-[56px] left-[498px] hidden sm:inline' drag dragSnapToOrigin>
                <CursorImage className='max-w-none' draggable="false"/>
               </motion.div>

               </div>
                <p className='text-xl my-8 max-w-md mx-auto'>
                    Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
                </p>
               
                <button className='bg-white text-black py-3 px-10 rounded-lg font-medium text-xl'>Get for free</button>
                

                <div className="absolute z-[-1] h-[375px] w-[750px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] sm:h-[768px] left-1/2 top-[calc(100%-96px)] sm:top-[calc(100%-120px)] -translate-x-1/2 border border-[#B48CDE] rounded-[50%] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)]"></div>

            </div>
        </section>
    )
}