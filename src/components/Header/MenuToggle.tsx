import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface MenuToggleProps {
    isOpen: boolean;
    handleToggle: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, handleToggle }) => {
    return (
        <button className="block md:block lg:hidden" onClick={handleToggle}>
            {isOpen ? <XMarkIcon className="w-6 h-6 text-gray-800 dark:text-gray-100" /> : <Bars3CenterLeftIcon className="w-6 h-6 text-gray-800 dark:text-gray-100 rotate-180" />}
        </button>
    );
};

export default MenuToggle;
