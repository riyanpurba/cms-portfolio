import { ReactNode } from "react";

interface StickyHeaderProps {
    isSticky: boolean;
    children: ReactNode;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ isSticky, children }) => {
    return (
        <header className={`${isSticky ? 'sticky top-0 bg-white shadow-lg' : 'relative bg-white'} w-full transform transition-transform duration-500 ease-in-out z-[9999]`}>
            <div className="absolute w-full h-auto blue bg-white"></div>
            {children}
        </header>
    );
};

export default StickyHeader;
