import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import LogoIcon from "../icons/Logo";
import DiscordIcon from "../icons/Discord";
import GithutIcon from "../icons/Github";

const navbarLinks = [
  { label: "Inicio", href: "/", ariaLabel: "Inicio" },
  { label: "Prácticar", href: "/practicar", ariaLabel: "Practicar" },
  { label: "Recursos", href: "/recursos", ariaLabel: "Recursos" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${
        isOpen ? "bg-[#1a1a1a]" : ""
      } lg:absolute z-10 relative w-full px-4 py-3`}>
      <nav className="text-gray-100  justify-center items-center font-onest">
        <div className="mx-auto 2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
          <div className="inline-flex">
            <Link to="/">
              <div className="flex justify-start items-center basis-0">
                <div className="mr-2">
                  <LogoIcon className="size-10" />
                </div>
                <h1 className="text-lg font-bold text-gray-100 hidden md:block md:text-2xl">Dev<span className="text-transparent bg-clip-text bg-gradient-to-r to-[#0E54BC] from-[#3D7BD8]">Interview</span></h1>
              </div>
            </Link>
            <div
              className="md:hidden flex flex-col  px-2 py-3   rounded-md cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}>
              <div className="w-4 h-0.5 bg-gray-100  mb-1"></div>
              <div
                className={`${
                  isOpen ? "w-4" : "w-3"
                } h-0.5 bg-gray-100  mb-1`}></div>
              <div className="w-4 h-0.5 bg-gray-100 "></div>
            </div>
          </div>
          <div className="hidden md:flex h-full  lg:pr-16 ">
            {navbarLinks.map(({ label, href, ariaLabel }) => (
              <Link
                key={href}
                className="text-gray-300 text-md mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-medium hover:scale-110 transition duration-300 h-full "
                to={href}
                aria-label={ariaLabel}>
                {label}
              </Link>
            ))}
          </div>
          <div className="inline-flex items-center gap-4 pl-16">
            <a href="">
              <DiscordIcon className="size-6" />
            </a>
            <a href="">
              <GithutIcon className="size-6" />
            </a>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} navbarLinks={navbarLinks} />
    </header>
  );
}

export default Header;
