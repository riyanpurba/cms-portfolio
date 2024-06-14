import { useEffect, useState } from "react";

import StickyHeader from "@/components/Header/StickyHeader";
import Logo from "@/components/Header/Logo";
import Menu from "@/components/Header/Menu";
import MenuToggle from "@/components/Header/MenuToggle";

import ButtonDarkMode from "@/components/ButtonDarkMode";
import DropDownLanguange from "@/components/DropDownLanguange";
import Link from "next/link";
import { LinkedIn, Facebook, Instagram, Tiktok, Youtube } from "@/components/SocialMedia";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <StickyHeader isSticky={isSticky}>
            <div className="container py-4">
                <div className="relative w-full h-auto flex items-center justify-between">
                    <Logo />
                    <Menu />
                    <div className="flex items-center gap-2">
                        {/* <DropDownLanguange /> */}
                        <ButtonDarkMode />
                        <MenuToggle isOpen={isOpen} handleToggle={handleToggle} />
                    </div>
                </div>
            </div>
            <div className={`fixed w-[90%] h-screen flex items-center right-0 top-[72px] z-[999] bg-slate-950 ease-in-out transition-all ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className="items-center justify-between w-full block md:hidden lg:flex md:w-auto">
                    <ul className="w-full h-full p-4 flex flex-col text-left">
                        <li className="">
                            <Link href="/" className="block p-4 text-xl text-white font-raleway font-semibold uppercase rounded md:p-0">Home</Link>
                        </li>
                        <li className="">
                            <Link href="/about" className="block p-4 text-xl text-white font-raleway font-semibold uppercase rounded md:p-0">About Us</Link>
                        </li>
                        <li className="">
                            <Link href="/#" className="block p-4 text-xl text-white font-raleway font-semibold uppercase rounded md:p-0">Services</Link>
                        </li>
                        <li className="">
                            <Link href="/#" className="block p-4 text-xl text-white font-raleway font-semibold uppercase rounded md:p-0">Products</Link>
                        </li>
                        <li className="">
                            <Link href="/contact" className="block p-4 text-xl text-white font-raleway font-semibold uppercase rounded md:p-0">Contact Us</Link>
                        </li>
                    </ul>
                <ul className="flex flex-row gap-4 justify-center lg:justify-end mt-20">
                    <li>
                        <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                            <Facebook iconClass="w-6 h-6 text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                            <Instagram iconClass="w-6 h-6 text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                            <LinkedIn iconClass="w-6 h-6 text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                            <Tiktok iconClass="w-6 h-6 text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                            <Youtube iconClass="w-6 h-6 text-white" />
                        </Link>
                    </li>
                </ul>
                </nav>
            </div>
        </StickyHeader>
    );
}
export default Header;