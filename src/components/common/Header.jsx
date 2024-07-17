import { useState } from "react"

import MobileMenu from "./MobileMenu"
import LogoIcon from "../icons/Logo"
import DiscordIcon from "../icons/Discord"
import GithutIcon from "../icons/Github"

const navbarLinks = [
    { label: "Inicio", href: "/", ariaLabel: "Inicio" },
    { label: "Prácticar", href: "/practicar", ariaLabel: "Practicar" },
    { label: "Recursos", href: "/recursos", ariaLabel: "Recursos" },
];

function Header() {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <header className={`${isOpen ? "bg-[#1a1a1a]" : "backdrop-blur-[3px]"} lg:absolute z-10 relative w-full shadow-md`}
        >
            <nav className="h-14 flex flex-col text-gray-100  justify-center items-center font-jetbrains">
                <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
                    <div className="inline-flex">
                        <a href="/">
                            <div className="flex justify-start items-center basis-0">
                                <div className="mr-2">
                                    <LogoIcon className="size-10" />
                                </div>
                                <div className="font-bold text-base hidden md:block">
                                    DevInterview
                                </div>    
                            </div>
                        </a>
                        <div
                        className="md:hidden flex flex-col  px-2 py-3   rounded-md cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="w-4 h-0.5 bg-gray-100  mb-1"></div>
                            <div className={`${isOpen ? "w-4" : "w-3"} h-0.5 bg-gray-100  mb-1`}></div>
                            <div className="w-4 h-0.5 bg-gray-100 "></div>
                        </div>
                    </div>
                    <div className="hidden md:flex h-full  lg:pr-16 ">
                        {navbarLinks.map(({label,href,ariaLabel}) => (
                            <a 
                            key={href}
                            className="text-sm leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal hover:scale-110 transition duration-300 h-full pt-2"
                            href={href}
                            aria-label={ariaLabel}>
                                {label}
                            </a>
                        )
                        )}
                    </div>
                    <div className="inline-flex items-center gap-4 px-8">
                        <a href="">
                            <DiscordIcon className="size-6"/>
                        </a>
                        <a href="">
                            <GithutIcon className="size-6"/>
                        </a>
                    </div>
                </div>
            </nav>
            <MobileMenu  isOpen={isOpen} navbarLinks={navbarLinks} />
        </header>
    );
}

export default Header;