import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2025 — Present",
    title: "Help Desk Technician",
    company: "Lake Superior State University",
    companyUrl: "https://www.lssu.edu/",
    description:
      "Provided technical support to students, faculty, and staff at Lake Superior State University. Troubleshot hardware and software issues, managed user accounts.",
    technologies: ["Windows", "macOS", "Linux", "Active Directory", "Remote Desktop"],
  }
]

export default function Experience() {
    return (
        <section id="experience" className="px-6 md:px-12 lg:px-24 py-20 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xs font-semibold uppercase -tracking-widest text-foreground mb-12 lg:hidden">Experience</h2>
                <div className="space-y-12">
                    {experiences.map(({ period, title, company, companyUrl, description, technologies }, index) => (
                        <Link key={index} href={companyUrl} className="group block p-6 -mx-6 rounded-lg hover:bg-card/50 transition-colors">
                            <div className="grid md:grid-cols-[150px_1fr] gap-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    {period}
                                </p>
                                <div>
                                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                                        {title} - {company}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">{description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">{tech}</span>
                                        )) }
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-12">
                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
                        View Full Resume
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}