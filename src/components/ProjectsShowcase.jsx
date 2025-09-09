"use client";

import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with React, Next.js, and Stripe integration. Features include product catalog, shopping cart, and secure payment processing.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Next.js", "Stripe", "TailwindCSS"],
    category: "Web Development",
    featured: true
  },
  {
    title: "Task Management App", 
    description: "Collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
    image: "/api/placeholder/600/400",
    tags: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
    category: "Full Stack",
    featured: true
  },
  {
    title: "Design System",
    description: "Comprehensive design system with reusable components, design tokens, and documentation for consistent brand experience.",
    image: "/api/placeholder/600/400",
    tags: ["Figma", "React", "Storybook", "TypeScript"],
    category: "UI/UX Design",
    featured: false
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction history, and financial analytics dashboard.",
    image: "/api/placeholder/600/400",
    tags: ["React Native", "Firebase", "Node.js", "Express"],
    category: "Mobile Development",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing creative projects with smooth animations and responsive design.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
    category: "Web Development",
    featured: false
  },
  {
    title: "AI Chat Interface",
    description: "Intelligent chat interface with natural language processing, context awareness, and real-time responses.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "OpenAI", "React", "WebSocket"],
    category: "AI/ML",
    featured: false
  }
]

const handleViewProject = (title) => {
  toast(`Viewing ${title} project`)
}

const handleViewCode = (title) => {
  toast(`Opening ${title} code repository`)
}

export default function ProjectsShowcase() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="space-y-16">
      {/* Featured Projects */}
      <div className="space-y-8">
        <div className="text-center animate-slide-up">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            Featured Work
          </Badge>
          <h3 className="text-2xl font-display font-bold mb-4">
            Highlighted Projects
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="group glass-effect rounded-2xl overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      onClick={() => handleViewProject(project.title)}
                      className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleViewCode(project.title)}
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="space-y-8">
        <div className="text-center animate-slide-up">
          <h3 className="text-2xl font-display font-bold mb-4">
            More Projects
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Additional projects showcasing diverse skills and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="group glass-effect rounded-xl p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleViewProject(project.title)}
                      className="p-2 h-8 w-8 hover:bg-primary/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleViewCode(project.title)}
                      className="p-2 h-8 w-8 hover:bg-primary/20"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-secondary/30 text-secondary-foreground text-xs px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge 
                      variant="secondary" 
                      className="bg-secondary/30 text-secondary-foreground text-xs px-2 py-0.5"
                    >
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Projects CTA */}
      <div className="text-center animate-slide-up">
        <Button 
          variant="outline" 
          size="lg"
          className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 hover-lift"
          onClick={() => toast("Redirecting to full portfolio")}
        >
          View All Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}