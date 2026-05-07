import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Software Engineer",
    company: "TechCorp",
    companyUrl: "#",
    description:
      "Build and maintain critical components used to construct the company's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    period: "2020 — 2022",
    title: "Software Engineer",
    company: "StartupXYZ",
    companyUrl: "#",
    description:
      "Developed and shipped highly interactive web applications for customer portals using React and TypeScript. Worked with a team of designers and engineers to build a design system from scratch.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2018 — 2020",
    title: "Junior Developer",
    company: "Digital Agency Co",
    companyUrl: "#",
    description:
      "Collaborated with other designers and developers to build responsive websites for clients across various industries. Helped maintain legacy codebases and learned best practices for writing clean, maintainable code.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
  },
  {
    period: "2017 — 2018",
    title: "Web Development Intern",
    company: "Creative Studio",
    companyUrl: "#",
    description:
      "Assisted in developing client websites and internal tools. Gained hands-on experience with modern web technologies and agile development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
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