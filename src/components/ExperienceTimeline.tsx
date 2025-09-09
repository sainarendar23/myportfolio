"use client"

import { Calendar, MapPin, ExternalLink, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const experiences = [
  {
    year: "2023 - 2024",
    title: "Lead Product Designer",
    company: "TechCorp Solutions",
    location: "Remote",
    description: "Led design initiatives for multiple product lines, collaborating with cross-functional teams to deliver user-centered solutions. Managed design systems and mentored junior designers.",
    achievements: [
      "Increased user engagement by 40%",
      "Led redesign of flagship product",
      "Established design system framework",
      "Mentored 3 junior designers"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "Principle"],
    featured: true
  },
  {
    year: "2022 - 2023", 
    title: "Senior Frontend Developer",
    company: "Digital Innovations Inc",
    location: "San Francisco, CA",
    description: "Developed and maintained large-scale web applications using modern frontend technologies. Collaborated with design and backend teams to deliver seamless user experiences.",
    achievements: [
      "Reduced page load time by 60%",
      "Implemented responsive design system",
      "Built 15+ reusable components",
      "Improved code coverage to 85%"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    featured: true
  },
  {
    year: "2021 - 2022",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "New York, NY", 
    description: "Worked on end-to-end development of web applications, from database design to user interface implementation. Collaborated directly with founders and stakeholders.",
    achievements: [
      "Built MVP from scratch",
      "Implemented payment integration",
      "Created admin dashboard",
      "Deployed to production"
    ],
    technologies: ["Node.js", "React", "MongoDB", "Express"],
    featured: false
  },
  {
    year: "2020 - 2021",
    title: "Junior Web Developer", 
    company: "Creative Agency Co",
    location: "Austin, TX",
    description: "Developed responsive websites and web applications for various clients. Gained experience in multiple technologies and project management.",
    achievements: [
      "Delivered 20+ client projects",
      "Learned modern web technologies",
      "Improved development workflow",
      "Collaborated with design team"
    ],
    technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
    featured: false
  }
]

const handleViewMore = (company: string) => {
  toast(`Loading more details about ${company}`)
}

export default function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center animate-slide-up">
        <Badge 
          variant="secondary" 
          className="bg-primary/20 text-primary border-primary/30 font-medium px-4 py-2 text-sm w-fit mb-4"
        >
          My Resume
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
          Real Problem Solutions <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My journey through various roles and projects that have shaped my expertise in design and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={`${experience.company}-${experience.year}`}
              className={`relative flex flex-col md:flex-row gap-8 animate-fade-in ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-lg animate-pulse"></div>

              {/* Content Card */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        {experience.year}
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="font-medium">{experience.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    {experience.featured && (
                      <Badge 
                        variant="outline" 
                        className="border-primary/30 text-primary bg-primary/10 px-3 py-1 text-xs"
                      >
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {experience.achievements.map((achievement) => (
                        <div 
                          key={achievement} 
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-semibold text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-secondary/30 text-secondary-foreground text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewMore(experience.company)}
                      className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group"
                    >
                      View More Details
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Year Badge - Desktop */}
              <div className={`hidden md:block flex-shrink-0 ${index % 2 === 0 ? 'md:order-first' : ''}`}>
                <div className="glass-effect rounded-xl px-4 py-2 text-center">
                  <div className="text-primary font-bold text-lg font-display">
                    {experience.year.split(' - ')[0]}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {experience.year.split(' - ')[1] || 'Present'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: "1s" }}>
        <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-display font-bold mb-4">
            Want to know more about my experience?
          </h3>
          <p className="text-muted-foreground mb-6">
            Download my detailed resume or let's have a conversation about how I can contribute to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => toast("Resume download started")}
              className="px-8 py-3 text-base font-medium group bg-primary text-primary-foreground hover:bg-primary/90 hover-lift"
            >
              Download Resume
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="px-8 py-3 text-base font-medium group border-primary/30 text-foreground hover:bg-primary/10 hover-lift"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}