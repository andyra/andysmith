import { useTheme } from "next-themes";
import cn from "classnames";
import { Menu as MenuPrimitive } from "@headlessui/react";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import ClientOnly from "components/ClientOnly";

const ThemeSwitcher = ({ className }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const buttonClasses = cn(
    "flex items-center justify-center h-48 w-48 rounded-full hover:bg-primary-10 transition",
    "lg:h-32 lg:w-32",
    className
  );

  const THEMES = [
    {
      name: "system",
      icon: <ComputerDesktopIcon className="h-24 w-24" />,
    },
    {
      name: "light",
      icon: <SunIcon className="h-24 w-24" />,
    },
    {
      name: "dark",
      icon: <MoonIcon className="h-24 w-24" />,
    },
  ];

  return (
    <ClientOnly>
      <MenuPrimitive>
        <MenuPrimitive.Button className={buttonClasses}>
          {resolvedTheme === "light" ? (
            <SunIcon className="h-24 w-24" />
          ) : (
            <MoonIcon className="h-24 w-24" />
          )}{" "}
        </MenuPrimitive.Button>
        <MenuPrimitive.Items
          as="ul"
          className="absolute z-10 top-96 right-8 p-8 rounded bg-primary text-ground border w-256"
        >
          {THEMES.map((theme) => (
            <MenuPrimitive.Item as="li" key={theme.name}>
              {({ active }) => (
                <button
                  className="flex items-center gap-12 h-48 w-full px-8 rounded hover:bg-ground-10 capitalize transition"
                  onClick={() => {
                    setTheme(theme.name);
                  }}
                >
                  {theme.icon}
                  {theme.name}
                </button>
              )}
            </MenuPrimitive.Item>
          ))}
        </MenuPrimitive.Items>
      </MenuPrimitive>
    </ClientOnly>
  );
};

export default ThemeSwitcher;
