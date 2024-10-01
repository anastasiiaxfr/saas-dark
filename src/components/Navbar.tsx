import Image from "next/image";
import logoImage from '@/assets/img/logo.png';
import MenuIcon from '@/assets/img/icon/menu.svg';

const Navbar = () => {
    return (
        <section className="bg-black text-white">
        <div className="px-4">
           <div className="py-4 flex item-center justify-between">
                <div className="relative">
                <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
                <Image src={logoImage} alt="Logo" className="h-12 w-12 relative" />
                </div>
               <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
                    <MenuIcon className=""/>
               </div>
               <nav className="items-center gap-6 hidden sm:flex">
                <a href="#" className="opacity-60 hover:opacity-100 transition ">About</a>
                <a href="#" className="opacity-60 hover:opacity-100 transition ">Features</a>
                <a href="#" className="opacity-60 hover:opacity-100 transition ">Updates</a>
                <a href="#" className="opacity-60 hover:opacity-100 transition ">Help</a>
                <a href="#" className="opacity-60 hover:opacity-100 transition ">Customers</a>
                <button className="bg-white text-black py-2 px-4 rounded-lg">Get For Free</button>
               </nav>
           </div>
        </div>
        </section>
    )
}

export default Navbar;