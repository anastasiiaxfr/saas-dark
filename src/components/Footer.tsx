import Link from 'next/link'
import S1 from '@/assets/img/icon/s0.svg'
import S2 from '@/assets/img/icon/s1.svg'
import S3 from '@/assets/img/icon/s2.svg'
import S4 from '@/assets/img/icon/s3.svg'
import S5 from '@/assets/img/icon/s4.svg'
import S6 from '@/assets/img/icon/s5.svg'




export default function (){
    return (
        <footer className="py-5 bg-black text-white/60 border-t border-white/20">
            <div className="container">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                    <div className="text-center">@ 2024 Your Company, Inc. All rights reserved</div>
                    <ul className="flex justify-center gap-2.5">
                        <li><Link href="#"> <S1/> </Link></li>
                        <li><Link href="#"> <S2/> </Link></li>
                        <li><Link href="#"> <S3/> </Link></li>
                        <li><Link href="#"> <S4/> </Link></li>
                        <li><Link href="#"> <S5/> </Link></li>
                        <li><Link href="#"> <S6/> </Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}