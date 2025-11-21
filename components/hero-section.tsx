"use client";

import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-75 blur-3xl animate-pulse" />

            {/* Inner circle with image */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-background overflow-hidden border-2 border-primary/50">
                <Image
                  src="/gedion-portfolio.jpg"
                  alt="Gedion Fetene"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">Gedion </span>{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Fetene
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary font-semibold">
              Full Stack Developer
            </p>
          </div>

          <p className="text-foreground/70 text-lg leading-relaxed max-w-md">
            CS graduate and ALX Software Engineering program graduate
            specializing in full stack development. Proficient in front-end and
            backend technologies, crafting pixel-perfect digital experiences
            with robust engineering.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/Gedion Fetene.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Download size={20} />
              Download Resume
            </a>

            {/* Updated: Scroll to #contact section */}
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary/50 text-primary hover:bg-primary/10 font-semibold rounded-lg hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get In Touch
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
