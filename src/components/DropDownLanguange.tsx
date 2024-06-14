// import { useTranslations } from "next-intl";
import Image from "next/image";

const DropDownLanguange = () => {
    return (
        <div className="relative">
            <button
                className="flex items-center rounded bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
                id="dropdownMenuButton1"
                data-twe-dropdown-toggle-ref
                aria-expanded="false"
                data-twe-ripple-init
                data-twe-ripple-color="light"
            >
                <Image src="/flags/id.png" fetchPriority="high" alt="id" width={30} height={30} className="shadow-md rounded-full" />
            </button>
            <ul
                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                aria-labelledby="dropdownMenuButton1"
                data-twe-dropdown-menu-ref>
                <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref
                    >
                        Action
                    </a>
                </li>
                <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref
                        >Another action</a
                    >
                </li>
                <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref
                        >Something else here</a
                    >
                </li>
            </ul>
        </div>
    )
}

export default DropDownLanguange;