'use client'
import { Home } from "@/components/sections/home"
import { Projects } from "@/components/sections/projects"
// import { Skills } from "@/components/sections/skills"
import Skills from "@/components/sections/skills"
import { Contacts } from "@/components/sections/contacts"
import { Experience } from "@/components/sections/work"

export default function App() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contacts />
    </div>
  )
}
