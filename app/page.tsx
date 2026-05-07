import Experience from "@/components/experience"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
    </div>
  )
}
