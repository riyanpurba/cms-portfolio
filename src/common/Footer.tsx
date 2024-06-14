import Link from "next/link";
import Image from "next/image";

import { LinkedIn, Facebook, Instagram, Tiktok, Youtube } from "@/components/SocialMedia";

const Footer = () => {
    return (
        <footer className="relative w-full h-auto bg-white dark:bg-[#16181c] py-20">
            {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/footer.svg')] bg-center bg-cover bg-no-repeat z-40"></div> */}
            <Image src="/images/footer.svg" fetchPriority="high" alt="footer" layout="fill" objectFit="cover" className="z-10 blur fill-white" />
            <div className="relative container z-50">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-y-4 lg:gap-y-0 z-10">
                    <div className="flex flex-col text-center lg:text-left">
                        <span className="text-black dark:text-white text-4xl font-merriweather font-bold">PTC</span>
                        <span className="pt-4 text-black dark:text-white w-full lg:w-7/12 font-raleway font-medium text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus reiciendis magni iusto ipsam necessitatibus ex laboriosam.</span>
                    </div>
                    <div className="flex flex-col w-full lg:w-5/12 justify-end gap-y-4">
                        <span className="text-black dark:text-white text-lg font-raleway font-bold text-center lg:text-right">Follow Us :</span>
                        <ul className="flex flex-row gap-4 justify-center lg:justify-end ">
                            <li>
                                <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                                    <Facebook iconClass="w-6 h-6 text-black dark:text-white" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                                    <Instagram iconClass="w-6 h-6 text-black dark:text-white" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                                    <LinkedIn iconClass="w-6 h-6 text-black dark:text-white" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                                    <Tiktok iconClass="w-6 h-6 text-black dark:text-white" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="cursor-pointer" rel="noreferrer" title="instagram">
                                    <Youtube iconClass="w-6 h-6 text-black dark:text-white" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4 border-gray-700 dark:border-white" />
                <p className="text-sm text-black dark:text-white text-center">© 2022 <Link href="/"><strong className="text-yellow font-semibold uppercase">PTC</strong></Link> | All Right Reserved </p>
            </div>
        </footer>
    );
}

export default Footer;