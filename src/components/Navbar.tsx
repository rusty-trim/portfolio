import { cn } from "@sglara/cn";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router";

export default function Navbar() {
    const { pathname } = useLocation();
    const [fixed, setFixed] = useState(false);
    const links = ["About Me", "Recent Work", "Skills", "Contact Me"];

    useEffect(() => {
        function handle_scroll() {
            const height = document.getElementById("navbar")!.offsetHeight
            setFixed(window.scrollY > height * 0.5);
        }

        document.addEventListener("scroll", handle_scroll);

        return () => document.removeEventListener("scroll", handle_scroll);
    }, []);

    return (
        <>
            <nav id="navbar" className={cn({ "fixed": fixed, "relative": !fixed, "bg-foreground/75": fixed }, "z-1 duration-500 w-full h-16 md:h-32 px-11 md:px-22 flex items-center gap-22 text-2xl")}>
                <div className="md:hidden relative">
                    <GiHamburgerMenu />
                </div>
                {links.map((link) => {
                    const path = link.replaceAll(" ", "-").toLowerCase();
                    const match = path == "about-me" ? (pathname == "/") : (pathname == `/${path}`);

                    return (
                        <Link className={cn("hidden md:block", {"text-blue-500": match, "underline": match })} to={path}>{link}</Link>
                    );
                })}
            </nav>
        </>
    );
}
