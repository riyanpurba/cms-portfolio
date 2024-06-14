import { useTheme } from "next-themes";

import IconMoon from "./IconMoon";
import IconSun from "./IconSun";

const ButtonDarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    console.log(currentTheme);
    return (
        <button
            className="p-2 rounded-full shadow-md"
            onClick={() => {
                setTheme(currentTheme === "dark" ? "light" : "dark")
            }}
        >
            {currentTheme === "dark" ? (
                <IconSun className="w-6 h-6 stroke-amber-400 fill-amber-400" />
            ) : (
                <IconMoon className="w-6 h-6 stroke-slate-900 fill-slate-900" />
            )}
        </button>
    );
};

export default ButtonDarkMode;