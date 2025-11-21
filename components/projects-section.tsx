"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "  Zeyora E-Commerce ",
    description:
      "A full-featured e-commerce solution with real-time inventory management and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/zeyora-ecommerce.jpg",
    liveUrl: "https://zeyora.vercel.app",
    githubUrl: "https://github.com/Gedion48/zeyora",
  },
  {
    title: "Event Orbit ",
    description:
      "Collaborative task management tool with real-time updates and team collaboration features.",
    tech: ["Next.js", "Firebase", "Tailwind", "React Query"],
    image: "/event-orbit.jpg",
    liveUrl: "https://even-orbit-event.vercel.app",
    githubUrl: "https://github.com/Gedion48/pulse-connect-social-app",
  },
  {
    title: "Pulse Connect app",
    description:
      "Comprehensive component library and design documentation for scalable UI development.",
    tech: ["Figma", "Storybook", "TypeScript", "Tailwind"],
    image: "/pulse-connect.jpg",
    liveUrl: "https://pulse-connect-app.vercel.app",
    githubUrl: "https://github.com/Gedion48/pulse-connect-social-app",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 rounded-full" />
          <p className="text-foreground/70 text-lg">
            Showcasing my best work and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/60 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/30 group-hover:border-primary/30 transition-colors">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border/30 hover:border-primary/50 text-foreground/70 hover:text-primary rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Glow border effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 20px rgba(0, 217, 255, 0.15)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
