import Link from "next/link";

const Menu = () => {
    return (
        <nav className="items-center justify-between hidden w-full block md:hidden lg:flex md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li className="mx-auto">
                    <Link href="/" className="block py-2 pl-3 pr-4 text-gray-800 font-raleway font-semibold capitalize rounded md:p-0">Home</Link>
                </li>
                <li className="mx-auto">
                    <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-800 font-raleway font-semibold capitalize rounded md:p-0">About Us</Link>
                </li>
                <li className="mx-auto">
                    <Link href="/#" className="block py-2 pl-3 pr-4 text-gray-800 font-raleway font-semibold capitalize rounded md:p-0">Services</Link>
                </li>
                <li className="mx-auto">
                    <Link href="/#" className="block py-2 pl-3 pr-4 text-gray-800 font-raleway font-semibold capitalize rounded md:p-0">Products</Link>
                </li>
                <li className="mx-auto">
                    <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-800 font-raleway font-semibold capitalize rounded md:p-0">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Menu;