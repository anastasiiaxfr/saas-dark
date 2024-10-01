'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

import PlusIcon from '@/assets/img/icon/plus.svg';
import MinusIcon from '@/assets/img/icon/minus.svg';

const items = [
    { 
        qw: 'What payment methods do you accept?',
        answ: 'Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.'
    },
    { 
        qw: 'How does the pricing work for teams',
        answ: 'Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.'
    },
    { 
        qw: 'Can I change my plan later?',
        answ: 'Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.'
    },
    { 
        qw: 'Is my data secure?',
        answ: 'Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.'
    },

];

const AccordionItem = ({item}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='py-7 border-b border-white/30 text-left select-none cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex w-full items-center'>
            <span className='flex-1 text-lg font-bold'>{item.qw}</span>
            {isOpen ? <MinusIcon width="20" height="20" /> : <PlusIcon width="20" height="20" />}
        </div>
        <AnimatePresence>
            {isOpen && (
             <motion.div className={clsx('mt-4', { 
                'hidden' : !isOpen, '' : isOpen === true
            })} initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: '16px' }} exit={{ opacity: 0, height: 0, marginTop: 0 }}>{item.answ}</motion.div>
            )}
        </AnimatePresence>
      </div>  
    )
}

export default function FAQ(){
    return (
        <section className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
            <div className="container text-center">
                <h2 className='font-bold text-5xl sm:text-6xl sm:max-w-[648px] mx-auto tracking-tighter'>Frequently asked questions</h2>
                <div className='mt-12 max-w-[648px] mx-auto '>
                    
                    {items.map((item, ind) => (
                         <AccordionItem item={item} key={ind}/>
                    ))}

                </div>
            </div>
        </section>
    )
}