import { Menu, X } from "lucide-react";
import { useState } from "react"

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full z-50 bg-primary/20 backdrop-blur-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div></div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">Rusty Trim</span>
                    </div>

                    <div className="hidden md:flex items-center gap-x-6 lg:space-x-8">
                        <a href="#about" className="text-link hover:text-link-hover lg:text-base">About</a>
                        <a href="#experience" className="text-link hover:text-link-hover lg:text-base">Experience</a>
                        <a href="#skills" className="text-link hover:text-link-hover lg:text-base">Skills</a>
                        <a href="#projects" className="text-link hover:text-link-hover lg:text-base">Projects</a>
                        <a href="#resume" className="text-link hover:text-link-hover lg:text-base">Resume</a>
                        <a href="#contact" className="text-link hover:text-link-hover lg:text-base">Contact</a>
                    </div>

                    <button className="md:hidden p-2 text-gray-300 hover:text-white text-sm lg:text-base" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileMenuIsOpen && (
                <div className="md:hidden border-t">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a href="#about" className="block text-link hover:text-link-hover lg:text-base">About</a>
                        <a href="#experience" className="block text-link hover:text-link-hover lg:text-base">Experience</a>
                        <a href="#skills" className="block text-link hover:text-link-hover lg:text-base">Skills</a>
                        <a href="#projects" className="block text-link hover:text-link-hover lg:text-base">Projects</a>
                        <a href="#resume" className="block text-link hover:text-link-hover lg:text-base">Resume</a>
                        <a href="#contact" className="block text-link hover:text-link-hover lg:text-base">Contact</a>
                    </div>
                </div>
            )}
        </div>
    )
}
