import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <Link href="/" className="text-3xl font-bold text-blue-600 dark:text-blue-500">
            PTC
        </Link>
    );
};

export default Logo;
