"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ChevronRight, Home, ExternalLink, Github, Search, Filter, Code, Coffee } from "lucide-react";
import { Header } from '@/components/Header';

const featuredProjects = [
{
  id: 1,
  title: "AI Agents Platform",
  description: "Comprehensive AI agents platform with intelligent automation workflows and multi-agent collaboration systems for enhanced productivity.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/117085fb-7449-4ca9-a153-c14cd80d54db/generated_images/modern-ai-agents-platform-interface-show-80dc8fd1-20250902064706.jpg",
  technologies: ["React", "Node.js", "AI/ML", "Automation"],
  category: "full-stack",
  liveUrl: "https://mos-ai-agents.netlify.app/",
  githubUrl: "https://github.com/sainarendar23/agents-website",
  stats: { year: "2025" }
},
{
  id: 2,
  title: "Online Food Ordering Website",
  description: "Comprehensive online food ordering platform that connects customers with local restaurants and food vendors with real-time tracking.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757271819607-3o6168f4pht.png",
  technologies: ["React", "Tailwind CSS", "HTML", "JavaScript"],
  category: "Full-Stack",
  liveUrl: "https://sainarendar23.github.io/food-ordering-website-frontend/",
  githubUrl: "https://github.com/sainarendar23/food-ordering-website-frontend",
  stats: { year: "2024" }
},
{
  id: 3,
  title: "Stock Prediction Web Application",
  description: "Intelligent stock market prediction application using machine learning algorithms to analyze trends and predict price movements.",
  image: "/api/placeholder/400/300",
  technologies: ["Python", "Flask", "Matplotlib", "ML Models", "NumPy", "Pandas"],
  category: "Machine Learning",
  liveUrl: "https://stock-prediction-ml.com",
  githubUrl: "https://github.com/sainarendar23/stock-prediction-ml",
  stats: { year: "2024" }
},
{
  id: 4,
  title: "AirJio - Recharge Mobile Application",
  description: "Comprehensive mobile recharge application providing seamless prepaid and postpaid services with multi-operator support.",
  image: "/api/placeholder/400/300",
  technologies: ["React Native", "Node.js", "MongoDB", "Payment Gateway"],
  category: "Mobile App",
  liveUrl: "https://airjio-recharge.com",
  githubUrl: "https://github.com/sainarendar23/airjio-recharge",
  stats: { year: "2023" }
},
{
  id: 5,
  title: "Gmail Automation Agent",
  description: "Intelligent Gmail automation workflow with automated responses, email categorization, and smart filtering using n8n.",
  image: "/api/placeholder/400/300",
  technologies: ["n8n", "Gmail API", "Automation", "Webhooks"],
  category: "n8n Workflow",
  liveUrl: "https://gmail-agent-demo.com",
  githubUrl: "https://github.com/sainarendar23/gmail-automation-agent",
  stats: { year: "2025" }
},
{
  id: 6,
  title: "LinkedIn Post Automation Agent",
  description: "Powerful LinkedIn automation agent that creates, schedules, and manages professional content posting with engagement tracking.",
  image: "/api/placeholder/400/300",
  technologies: ["n8n", "LinkedIn API", "Content Generation", "Scheduling"],
  category: "n8n Workflow",
  liveUrl: "https://linkedin-agent-demo.com",
  githubUrl: "https://github.com/sainarendar23/linkedin-post-agent",
  stats: { year: "2025" }
}];


const categories = [
"All",
"AI/Automation",
"Full-Stack",
"Machine Learning",
"Mobile App",
"n8n Workflow"];


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return featuredProjects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf7f2] via-white to-[#f5e6d3]">
      <Header />
      
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#fdf7f2] to-[#f5e6d3] py-20 pt-32">
        {/* Simplified background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #8b4513 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative max-w-7xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link
              href="/"
              className="flex items-center text-[#8b4513] hover:text-[#cd853f] transition-colors">

              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#dda15e]" />
            <span className="text-[#8b4513] font-medium">Projects</span>
          </nav>

          {/* Hero Title */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8b4513] via-[#cd853f] to-[#dda15e] bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-xl text-[#8b4513]/80 max-w-2xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions spanning AI automation, full-stack development, 
              machine learning, and mobile applications.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#dda15e] w-5 h-5" />
            <Input
              placeholder="Search projects by name or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-[#dda15e]/20 focus:border-[#cd853f] focus:ring-[#cd853f]/20" />

          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-[#8b4513]" />
            {categories.map((category) =>
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
              selectedCategory === category ?
              "bg-[#8b4513] hover:bg-[#6d3410] text-white" :
              "border-[#dda15e]/20 text-[#8b4513] hover:bg-[#fdf7f2] hover:border-[#cd853f]/30"
              }>

                {category}
              </Button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) =>
          <div
            key={project.id}
            className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#dda15e]/20 hover:border-[#cd853f]/50 hover:scale-105">

              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                {project.image.includes('placeholder') ?
              <div className="w-full h-full bg-gradient-to-br from-[#fdf7f2] to-[#f5e6d3] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#f5e6d3] group-hover:to-[#fdf7f2] transition-all duration-500">
                    <div className="text-center text-[#8b4513] group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-12 h-12 mx-auto mb-2 opacity-60 group-hover:opacity-80 group-hover:rotate-12 transition-all duration-500" />
                      <p className="text-sm font-medium">Project Preview</p>
                    </div>
                  </div> :

              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full ${project.id === 2 ? 'object-contain bg-white' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`} />

              }
                
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#8b4513] hover:bg-[#6d3410] text-white !whitespace-pre-line">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-sm font-medium text-[#8b4513] flex items-center space-x-1">
                  <Coffee className="w-3 h-3" />
                  <span>{project.stats.year}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8b4513] mb-3 group-hover:text-[#cd853f] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) =>
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="bg-[#fdf7f2] text-[#8b4513] hover:bg-[#dda15e]/10 text-xs border border-[#dda15e]/20">

                      {tech}
                    </Badge>
                )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                  asChild
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-[#8b4513] to-[#cd853f] hover:from-[#6d3410] hover:to-[#8b4513] text-white">

                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  </Button>
                  
                  <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 border-[#dda15e]/20 text-[#8b4513] hover:bg-[#dda15e]/10 hover:border-[#cd853f]/30">

                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 &&
        <div className="text-center py-16">
            <div className="w-24 h-24 bg-[#fdf7f2] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#dda15e]/20">
              <Search className="w-12 h-12 text-[#dda15e]" />
            </div>
            <h3 className="text-xl font-semibold text-[#8b4513] mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="bg-[#8b4513] hover:bg-[#6d3410] text-white">

              Reset Filters
            </Button>
          </div>
        }

        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-r from-[#dda15e] to-[#f5e6d3] rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-[#cd853f]/20">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8b4513]">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl mb-8 text-[#8b4513]/80 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and bring creative ideas to life. 
              Let's collaborate and build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#8b4513] text-white hover:bg-[#6d3410] font-semibold px-8 py-3">

                <Link href="/#contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#8b4513] text-[#8b4513] hover:bg-[#8b4513] hover:text-white font-semibold px-8 py-3">

                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}