"use client";

import type React from "react";

import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Gedion48/",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gedion-fetene-20a0012a5/",
      color: "hover:text-primary",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:gedionfetene77@gmail.com",
      color: "hover:text-secondary",
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-primary/10 pointer-events-none rounded-3xl" />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
            <p className="text-foreground/70 text-lg">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={20} />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-primary/10 border border-primary/50 rounded-lg text-primary text-center font-medium animate-in fade-in slide-in-from-bottom-4">
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Let's Connect
                </h3>
                <p className="text-foreground/70">
                  Whether you have a project in mind or just want to say hi,
                  feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon
                          className={`${social.color} transition-colors`}
                          size={24}
                        />
                      </div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Location / Info */}
              <div className="p-4 bg-card/50 border border-border/30 rounded-lg">
                <p className="text-sm text-foreground/70">
                  <span className="font-medium text-foreground">
                    Available for:
                  </span>{" "}
                  Freelance projects, full-time opportunities, and
                  collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border/30 text-center text-foreground/60 text-sm">
            <p>
              © 2025 Gedion Fetene — Built with Next.js, React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
