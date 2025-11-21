"use client"

import { Code2, Palette, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Web Development",
    icon: Code2,
    skills: ["JavaScript", "React.js", "Next.js", "Node.js", "PHP", "HTML5", "CSS3", "Tailwind", "Git"],
  },
  {
    title: "Databases & Backend",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "REST APIs", "GraphQL"],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: ["Figma", "Photoshop", "Illustrator", "UI/UX Design", "Responsive Design"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Technical</span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 rounded-full" />
          <p className="text-foreground/70 text-lg">Proficient in modern technologies and design tools</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="group relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-card/50 to-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-foreground/70 group-hover:text-foreground transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(0, 217, 255, 0.2)",
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
