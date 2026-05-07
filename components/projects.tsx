import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "Check Back Later",
    description: "Currently working on a new project that I'm excited to share soon! Stay tuned for updates and details about this upcoming project.",
    image: "/placeholder.png",
    technologies: [],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-12 lg:hidden">Projects</h2>
        <div className="space-y-16">
          {projects.map(({ title, description, image, technologies, liveUrl, githubUrl }, index) => (
            <div key={index} className="group grid grid-cols-[200px_1fr] gap-6 p-6 -mx-6 rounded-lg hover:bg-card/50 transition-colors">
              <div className="relative aspect-video md:aspect-4/3 rounded-md overflow-hidden bg-muted">
                {/* <Image src={image} alt={`${title} project screenshot`} className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" /> */}
              </div>

              <div className="flex flex-col">
                <h3 className="text-foreground font-medium text-lg group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">{description}</p>
                <div className="flex gap-4 mt-4">
                  <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`View ${title} on GitHub`}>
                    <BsGithub className="w-5 h-5" />
                  </Link>
                  <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`View ${title} live`}>
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {technologies.map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-12">
            <Link href={"#"} className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
              View All Projects
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}