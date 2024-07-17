
function MobileMenu ({ isOpen ,navbarLinks}) {
    
    
    return (
        <>
        {
            isOpen&&(
                <div className="flex bg-[#1a1a1a] flex-col mt-14 md:hidden absolute top-0 pt-4 left-0 z-50 w-full backdrop-blur-sm items-center gap-8 pb-10 shadow-md">
                    {navbarLinks.map(({ label, href, ariaLabel }) => (                         
                        <a
                        key={href}
                        className="text-white text-lg  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                        href=""
                        onClick={() => setIsOpen(false)}
                        aria-label={ariaLabel}
                      >
                        {label}
                      </a>
                    ))}
                </div>
            )
        }
        </>
    )
}

export default MobileMenu;