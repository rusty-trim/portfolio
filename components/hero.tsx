import { Mail, FileText } from "lucide-react"
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const socialLinks = [
    { icon: BsGithub, href: "https://github.com/rusty-trim", label: "GitHub" },
    { icon: BsLinkedin, href: "https://linkedin.com/in/rusty-trim", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rustytrim11@gmail.com", label: "Email" },
    { icon: FileText, href: "/resume.pdf", label: "Resume" },
]

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Column */}
                <div className="lg:sticky lg:top-24 flex flex-col gap-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">Rusty Trim</h1>
                        <p className="text-lg md:text-xl text-primary mt-2 max-w-sm leading-relaxed">Software Engineer</p>
                        <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
                            Aspiring software engineer focused on building clean, responsive, and reliable applications. Passionate about web development, backend systems, and continuously improving as a developer.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden lg:flex flex-col gap-3">
                        {["About", "Experience", "Projects"].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase()}`} className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                                <span className="text-xs font-semibold uppercase tracking-widest">{item}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-5 mt-4">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div id="about" className="scroll-mt-24">

                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        I recently graduated from Lake Superior State University with an Associate’s degree in Computer Science, earning Magna Cum Laude honors while maintaining a 3.7+ GPA. My interest in software engineering comes from enjoying both problem-solving and the process of building ideas into real, functional applications.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6">
                        I am particularly interested in web development and backend systems, with experience working with technologies such as JavaScript, TypeScript, React, Node.js, Git, and Linux-based development environments. I enjoy learning how systems work behind the scenes and continuously improving my skills through personal projects and hands-on development.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6">
                        I plan to continue pursuing my Bachelor’s degree while growing as a software developer through real-world experience, collaboration, and challenging projects. My goal is to build software that is clean, reliable, and meaningful to the people using it.
                    </p>
                </div>
            </div>
        </section>
    );
}