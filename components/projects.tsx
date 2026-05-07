import Image from "next/image";

const projects = [
  {
    title: "DevFlow",
    description:
      "A full-stack developer collaboration platform built with Next.js and PostgreSQL. Features real-time code sharing, video calls, and project management tools.",
    image: "/projects/devflow.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AIWriter",
    description:
      "An AI-powered writing assistant that helps users create better content. Built with React and integrated with OpenAI's GPT API for intelligent suggestions.",
    image: "/projects/aiwriter.jpg",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CloudSync",
    description:
      "A cloud storage solution with end-to-end encryption. Users can securely store, share, and sync files across devices with a beautiful, intuitive interface.",
    image: "/projects/cloudsync.jpg",
    technologies: ["React", "AWS S3", "Node.js", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TaskMaster",
    description:
      "A minimalist task management app with smart scheduling and productivity analytics. Features keyboard shortcuts and offline support.",
    image: "/projects/taskmaster.jpg",
    technologies: ["Vue.js", "Firebase", "PWA", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
    return (
        <section id="projects" className="px-6 md:px-12 lg:px-24 py-20 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-12 lg:hidden">Projects</h2>
            </div>
            <div className="space-y-16">
                {projects.map(({ title, description, image, technologies, liveUrl, githubUrl }, index) => (
                    <div key={index} className="group grid grid-cols-[200px_1fr] gap-6 p-6 -mx-6 rounded-lg hover:bg-card/50 transition-colors">
                        <div className="relative aspect-video md:aspect-4/3 rounded-md overflow-hidden bg-muted">
                            {/* <Image src={image} alt={`${title} project screenshot`} /> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}