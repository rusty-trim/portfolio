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
                            TODO: Add a brief introduction or tagline about yourself here. This is a great place to highlight your key skills, passions, or what you're currently working on.
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
                        {socialLinks.map(({icon: Icon, href, label}) => (
                            <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div id="about" className="scroll-mt-24">
                    {/* <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        TODO: Add a more detailed introduction about yourself here. This is where you can talk about your background, your journey into software engineering, and what motivates you in your work. You can also mention any specific technologies or areas of interest that you're passionate about.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6">
                        TODO: You can also use this section to highlight any recent projects or accomplishments, or to share a bit about your personal interests and hobbies outside of work. This helps to give a more well-rounded picture of who you are as a person and a professional.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6">
                        TODO: Finally, you can end this section with a call to action, such as inviting visitors to check out your projects, connect with you on social media, or get in touch via email. This encourages engagement and helps to foster connections with others in the industry.
                    </p> */}
                </div>
            </div>
        </section>
    );
}