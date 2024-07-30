
import { Link } from "react-router-dom";
import LogoIcon from "../icons/Logo";

const Container = ({ children }) => {
    return (
        <div className="flex base:h-[100dvh] w-full flex-col">
            <div className="base:h-[100dvh] mx-auto 2xl:w-[1280px] xl:w-10/12 w-11/12 relative">
                <div className="flex h-full w-full flex-col pb-6">
                    <div className="relative">
                        <nav className="z-30 relative flex h-[48px] w-full shrink-0 items-center">
                            <div className="flex w-full justify-between">
                                <div className="">
                                    <Link to="/">
                                        <LogoIcon className="size-10"/>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="flex w-full flex-grow p-[10px] pt-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;