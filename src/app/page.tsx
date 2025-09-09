"use client";

import { useState, useEffect } from 'react';
import { ArrowDown, Code, Palette, Database, Smartphone, Globe, Mail, Download, ExternalLink, Star, Users, Coffee, Heart, Github, Linkedin, Phone, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useScrollSlideLeft, useScrollSlideRight, useScrollFadeIn, useScrollSlideUp } from '@/hooks/useScrollAnimation';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  // Typewriter effect for role text
  const roles = [
    "Developer & Automation Architect",
    "Full Stack Developer", 
    "AI Automation Expert",
    "Backend Developer",
    "React Developer"
  ];
  const typewriterText = useTypewriter(roles, 100, 75, 2000);

  // Scroll animation refs
  const heroLeftRef = useScrollSlideLeft({ delay: 0 });
  const heroRightRef = useScrollSlideRight({ delay: 300 });
  const aboutLeftRef = useScrollSlideLeft({ delay: 100 });
  const aboutRightRef = useScrollSlideRight({ delay: 200 });
  const skillsLeftRef = useScrollSlideLeft({ delay: 100 });
  const skillsRightRef = useScrollSlideRight({ delay: 200 });
  const projectsHeaderRef = useScrollFadeIn({ delay: 0 });
  const project1Ref = useScrollSlideLeft({ delay: 100 });
  const project2Ref = useScrollSlideRight({ delay: 200 });
  const contactLeftRef = useScrollSlideLeft({ delay: 100 });
  const contactRightRef = useScrollSlideRight({ delay: 200 });
  const resumeRef = useScrollSlideUp({ delay: 100 });

  useEffect(() => {
    setIsLoaded(true);

    // Handle scroll-based opacity effects
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
      setScrollOpacity(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated stats - removed client satisfaction, changed project count to 10+
  const stats = [
  { number: '5+', label: 'Years Of Experience' },
  { number: '10+', label: 'Projects Completed' }];

  // Updated skills - removed Cloud Computing, Python, added Frontend Developer, Backend Developer
  const skills = ['Fullstack Development', 'Automation', 'AI Agents', 'React', 'Node.js', 'Spring Boot', 'Frontend Developer', 'Backend Developer', 'DevOps'];

  // Featured projects preview for single page
  const featuredProjects = [
  {
    id: 1,
    title: "AI Agents Platform",
    description: "Comprehensive AI agents platform with intelligent automation workflows and multi-agent collaboration systems for enhanced productivity.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/117085fb-7449-4ca9-a153-c14cd80d54db/generated_images/modern-ai-agents-platform-interface-show-80dc8fd1-20250902064706.jpg",
    technologies: ["React", "Node.js", "AI/ML", "Automation"],
    category: "AI/Automation",
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

  return (
    <div 
      className="min-h-screen transition-all duration-1000 ease-out"
      style={{
        background: `linear-gradient(135deg, 
          rgba(253, 247, 242, ${1 - scrollOpacity * 0.7}) 0%, 
          rgba(255, 255, 255, ${1 - scrollOpacity * 0.8}) 100%),
          linear-gradient(135deg, 
          rgba(139, 69, 19, ${scrollOpacity * 0.1}) 0%, 
          rgba(205, 133, 63, ${scrollOpacity * 0.15}) 100%)`
      }}
    >
      {/* Dark overlay that increases with scroll */}
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-1000 ease-out z-0"
        style={{
          background: `linear-gradient(135deg, 
            rgba(139, 69, 19, ${scrollOpacity * 0.05}) 0%, 
            rgba(221, 161, 94, ${scrollOpacity * 0.08}) 50%,
            rgba(139, 69, 19, ${scrollOpacity * 0.12}) 100%)`,
          opacity: scrollOpacity
        }}
      />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section - Dharani Style */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div ref={heroLeftRef.ref} className="space-y-8">
                {/* Get Appointment Button */}
                <div className="inline-flex items-center px-6 py-3 bg-[#8b4513] text-white rounded-full text-sm font-medium mb-6 hover:bg-[#6d3410] transition-colors">
                  Get Appointment
                </div>
                
                {/* Main Heading */}
                <div className="space-y-4">
                  <p className="text-[#8b4513] text-lg font-medium">Hello, i'm</p>
                  <h1 className="text-6xl lg:text-7xl font-bold text-[#8b4513] leading-tight">
                    <span className="block">Sai Narendar S</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-[#cd853f] font-medium min-h-[2.5rem] flex items-center">
                    {typewriterText}
                    <span className="inline-block w-0.5 h-8 bg-[#cd853f] ml-1 animate-pulse"></span>
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Building intelligent automation solutions and full-stack applications that transform business processes. Let's automate the future and create scalable digital solutions together!
                </p>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8b4513] to-[#cd853f] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">

                    Hire Me
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1sFzB33VXOzZI-NblKsEl9gVPJ4uYFcO2/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 border-2 border-[#dda15e] text-[#8b4513] rounded-xl font-medium hover:bg-[#fdf7f2] hover:shadow-md transition-all duration-300 transform hover:scale-105">

                    <Download className="mr-2 w-5 h-5" />
                    Download Resume
                  </a>
                </div>

                {/* Updated Stats - removed client satisfaction */}
                <div className="grid grid-cols-2 gap-8 pt-8">
                  {stats.map((stat, index) =>
                  <div key={stat.label} className="text-center">
                      <div className="text-4xl font-bold text-[#8b4513] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Content - Profile Image */}
              <div ref={heroRightRef.ref} className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Main Profile Container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    {/* Background Shape */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#dda15e]/20 to-[#cd853f]/30"></div>
                    
                    {/* Profile Photo */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#8b4513] to-[#cd853f] p-3 shadow-2xl">
                      <div className="w-full h-full rounded-full bg-[#fdf7f2] flex items-center justify-center overflow-hidden">
                        <img
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756700181720-7bjjamkdr6t.jpg"
                          alt="Sai Narendar S - Developer & Automation Architect"
                          className="w-full h-full object-cover rounded-full" />

                      </div>
                    </div>

                    {/* Floating Progress Shape */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#dda15e] rounded-full flex items-center justify-center shadow-lg floating">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Code className="w-8 h-8 text-[#8b4513]" />
                      </div>
                    </div>

                    {/* Decorative Dots */}
                    <div className="absolute -top-8 -left-8 w-4 h-4 bg-[#cd853f] rounded-full opacity-60"></div>
                    <div className="absolute top-16 -right-6 w-3 h-3 bg-[#dda15e] rounded-full opacity-60"></div>
                    <div className="absolute -bottom-8 left-16 w-5 h-5 bg-[#8b4513] rounded-full opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - sai Style */}
        <section id="about" className="py-20 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div ref={aboutLeftRef.ref} className="space-y-8">
                <div className="space-y-4">
                  <p className="text-[#dda15e] font-medium text-lg">About Me</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#8b4513] leading-tight">
                    Professional Fullstack Development and Automation Solutions for Your Digital Challenges
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Enter the digital realm with confidence, guided by your trusted Developer and Automation Architect. Drawing on expertise in fullstack development and intelligent automation, 
                    I specialize in crafting solutions that transform your business processes and distinguish your digital presence. 
                    Let's build scalable systems and embark on an innovative digital journey together!
                  </p>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-2 gap-4">
                  {['Fullstack Development', 'Automation Solutions', 'AI Agents', "Backend developer"].map((service, index) =>
                  <div key={service} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#dda15e] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  )}
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#8b4513] rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Us</p>
                      <a href="mailto:smsainarendar@gmail.com" className="text-[#8b4513] font-medium hover:text-[#dda15e] transition-colors">
                        smsainarendar@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#cd853f] rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Personal</p>
                      <a href="tel:+917010308369" className="text-[#8b4513] font-medium hover:text-[#dda15e] transition-colors">
                        +91 7010308369
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#dda15e] rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Company</p>
                      <a href="tel:+919688113670" className="text-[#8b4513] font-medium hover:text-[#dda15e] transition-colors">
                        +91 9688113670
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - About Image */}
              <div ref={aboutRightRef.ref} className="relative">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#fdf7f2] to-[#f5e6d3] shadow-2xl">
                  <div className="absolute inset-4 bg-gradient-to-br from-[#8b4513]/10 to-[#dda15e]/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-[#8b4513]">
                      <Code className="w-24 h-24 mx-auto mb-4 opacity-60" />
                      <p className="text-lg font-medium">About Image Placeholder</p>
                    </div>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="absolute -bottom-6 left-6 flex space-x-4">
                  <a
                    href="https://github.com/sainarendar23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-[#8b4513] text-white rounded-full hover:bg-[#6d3410] transition-colors shadow-lg">

                    <Github className="w-5 h-5" />
                    <span className="text-sm">View projects on Github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/s-sainarendar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-[#dda15e] text-white rounded-full hover:bg-[#cd853f] transition-colors shadow-lg">

                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">Visit on Linkedin</span>
                  </a>
                </div>

                {/* Decorative Dots */}
                <div className="absolute top-4 right-4 grid grid-cols-6 gap-2">
                  {Array.from({ length: 24 }).map((_, i) =>
                  <div key={i} className="w-1 h-1 bg-[#dda15e] rounded-full opacity-40"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Brown and Peach Theme - Updated */}
        <section id="skills" className="py-20 px-4 bg-gradient-to-br from-[#8b4513] to-[#cd853f]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div ref={skillsLeftRef.ref} className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Let's Explore my <span className="text-[#dda15e]">Skills</span>
                  <br />
                  <span className="text-[#dda15e]">&</span> <span className="text-[#dda15e]">Experience</span>
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Welcome to my skills showcase! I specialize in crafting intelligent automation solutions and full-stack applications. With expertise in modern development frameworks, automation platforms, and cloud technologies, I bring your digital visions to life with seamless functionality and engaging user experiences.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-[#dda15e] text-[#8b4513] rounded-lg font-medium hover:bg-[#f5e6d3] transition-colors">
                  Learn More
                </button>
              </div>

              {/* Right Content - Skills Grid - Updated without percentages */}
              <div ref={skillsRightRef.ref} className="grid grid-cols-3 gap-6">
                {/* Skill Cards - Removed percentages */}
                <div className="bg-[#fdf7f2] rounded-xl p-6 text-center hover:bg-white transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-[#cd853f] rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">⚛</span>
                  </div>
                  <h3 className="text-[#8b4513] font-medium">React Js</h3>
                </div>

                <div className="bg-[#fdf7f2] rounded-xl p-6 text-center hover:bg-white transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-[#8b4513] rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">☕</span>
                  </div>
                  <h3 className="text-[#8b4513] font-medium">Java</h3>
                </div>

                <div className="bg-[#fdf7f2] rounded-xl p-6 text-center hover:bg-white transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-[#dda15e] rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">5</span>
                  </div>
                  <h3 className="text-[#8b4513] font-medium">HTML</h3>
                </div>

                <div className="bg-[#fdf7f2] rounded-xl p-6 text-center hover:bg-white transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-[#8b4513] rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <span className="text-white text-xl font-bold">N</span>
                  </div>
                  <h3 className="text-[#8b4513] font-medium">Next JS</h3>
                </div>

                <div className="bg-[#fdf7f2] rounded-xl p-6 text-center hover:bg-white transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-[#cd853f] rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/117085fb-7449-4ca9-a153-c14cd80d54db/generated_images/n8n-automation-platform-official-logo-ic-96fc60ae-20250901042231.jpg"
                      alt="n8n"
                      className="w-8 h-8 object-contain" />

                  </div>
                  <h3 className="text-[#8b4513] font-medium">n8n</h3>
                </div>

                <div className="bg-[#fdf7f2] rounded-xl p-6 text-center hover:bg-white transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-[#dda15e] rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">≈</span>
                  </div>
                  <h3 className="text-[#8b4513] font-medium">Tailwind CSS</h3>
                </div>

                <div className="bg-[#fdf7f2] rounded-xl p-6 text-center hover:bg-white transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-[#8b4513] rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">JS</span>
                  </div>
                  <h3 className="text-[#8b4513] font-medium">JavaScript</h3>
                </div>

                {/* New Spring Boot skill card */}
                <div className="bg-[#fdf7f2] rounded-xl p-6 text-center hover:bg-white transition-colors shadow-lg">
                  <div className="w-12 h-12 bg-[#228B22] rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">🍃</span>
                  </div>
                  <h3 className="text-[#8b4513] font-medium">Spring Boot</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview Section - Redesigned to match projects page with brown/peach theme */}
        <section id="projects" className="py-20 px-4 bg-gradient-to-br from-[#fdf7f2] to-white">
          <div className="mx-auto !w-[91.1%] !h-full !max-w-[91.1%]">
            {/* Hero Section for Projects */}
            <div className="text-center mb-20">
              <div ref={projectsHeaderRef.ref}>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-[#8b4513]">Featured </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dda15e] to-[#cd853f]">Projects</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  A curated showcase of my most impactful work in fullstack development, automation solutions, and AI-powered applications.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#dda15e] to-[#cd853f] mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Featured Projects - Large Showcase */}
            <div className="space-y-32 mb-20">
              {featuredProjects.slice(0, 2).map((project, index) =>
              <div
                key={project.id}
                ref={index === 0 ? project1Ref.ref : project2Ref.ref}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                  {/* Content Side */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="inline-block">
                      <span className="text-[#8b4513] font-medium text-lg bg-[#dda15e]/10 px-4 py-2 rounded-full border border-[#dda15e]/20">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl lg:text-5xl font-bold text-[#8b4513] leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) =>
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-white border border-[#dda15e]/20 text-[#8b4513] rounded-full text-sm font-medium shadow-sm">

                          {tech}
                        </span>
                    )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-6 text-[#8b4513]">
                      <div className="flex items-center space-x-2">
                        <Coffee className="w-5 h-5 text-[#cd853f]" />
                        <span className="font-medium">{project.stats.year}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#8b4513] to-[#cd853f] text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-[#8b4513]/25 transition-all duration-300 transform hover:scale-105">

                        <span>View Live</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                      <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-[#dda15e] text-[#8b4513] rounded-xl font-medium hover:bg-[#dda15e]/10 hover:border-[#cd853f] transition-all duration-300 transform hover:scale-105">

                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Image Side - All projects navigate to /projects page */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Link href="/projects" className="block">
                      <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full ${index === 1 ? 'h-auto object-contain bg-white' : 'h-full object-cover'} group-hover:scale-105 transition-transform duration-700`}
                          />
                          {/* Overlay with project details - consistent for all projects */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#8b4513]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center">
                            <div className="text-white p-6 text-center">
                              <p className="text-sm font-medium mb-2">Click to view all projects</p>
                              <ArrowRight className="w-5 h-5 mx-auto animate-bounce" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Projects Grid */}
            <div className="py-20 px-4 bg-white/60 backdrop-blur-sm rounded-3xl border border-[#dda15e]/10">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#8b4513] mb-6">
                  More <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dda15e] to-[#cd853f]">Projects</span>
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Additional projects showcasing expertise in automation and full-stack development.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {featuredProjects.slice(2).map((project, index) =>
                <Link href="/projects" key={project.id}>
                  <div
                    className={`group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#dda15e]/20 hover:border-[#cd853f]/50 hover:shadow-2xl hover:shadow-[#dda15e]/10 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
                    }
                    style={{ animationDelay: `${(index + 3) * 200}ms` }}>

                      {/* Project Image Display with consistent overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-[#fdf7f2] to-[#f5e6d3] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#f5e6d3] group-hover:to-[#fdf7f2] transition-all duration-500">
                          <div className="text-center text-[#8b4513] group-hover:scale-110 transition-transform duration-300">
                            <Code className="w-12 h-12 mx-auto mb-2 opacity-60 group-hover:opacity-80 group-hover:rotate-12 transition-all duration-500" />
                            <p className="text-sm font-medium">Project Preview</p>
                          </div>
                        </div>
                        
                        {/* Consistent overlay for all projects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#8b4513]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                          <div className="text-white p-4 text-center">
                            <p className="text-xs font-medium mb-1">Click to view all projects</p>
                            <ArrowRight className="w-4 h-4 mx-auto animate-bounce" />
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 text-[#8b4513] px-3 py-1 rounded-full text-sm font-medium border border-[#dda15e]/20 group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                            {project.category}
                          </span>
                        </div>

                        {/* Stats */}
                        <div className="absolute top-4 right-4 flex space-x-2">
                          <div className="bg-[#8b4513]/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 group-hover:bg-[#8b4513] group-hover:scale-105 transition-all duration-300">
                            <Coffee className="w-3 h-3 text-white" />
                            <span className="text-xs font-medium text-white">{project.stats.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8">
                        <h4 className="text-2xl font-bold text-[#8b4513] mb-3 group-hover:text-[#cd853f] transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) =>
                        <span
                          key={techIndex}
                          className="bg-[#fdf7f2] text-[#8b4513] px-3 py-1 rounded-full text-sm font-medium border border-[#dda15e]/20 group-hover:bg-[#dda15e]/10 group-hover:border-[#cd853f]/30 transition-all duration-300">

                              {tech}
                            </span>
                        )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                          <div className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#8b4513] to-[#cd853f] text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#8b4513]/25 transition-all duration-300 flex-1">
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 px-6 py-3 border border-[#dda15e] text-[#8b4513] rounded-xl text-sm font-medium hover:bg-[#dda15e]/10 hover:border-[#cd853f] transition-all duration-300 flex-1">
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>

              {/* Explore Projects Button */}
              <div className="text-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8b4513] to-[#cd853f] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">

                  <span>Explore All Projects</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20">
              <div className={`relative overflow-hidden bg-gradient-to-r from-[#dda15e] to-[#f5e6d3] rounded-3xl p-12 text-center shadow-2xl transition-all duration-1000 delay-800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[#8b4513]/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent !w-[110%] !h-[316px]"></div>
                
                <div className="relative z-10">
                  <h3 className="text-4xl lg:text-5xl font-bold text-[#8b4513] mb-6">
                    Ready to Build Something Amazing?
                  </h3>
                  <p className="text-[#8b4513]/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Let's collaborate and create innovative solutions that make a real impact. 
                    I'm passionate about turning ideas into exceptional digital experiences.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="#contact"
                      className="group inline-flex items-center space-x-2 bg-[#8b4513] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#6d3410] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">

                      <span>Start a Conversation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="mailto:smsainarendar@gmail.com"
                      className="inline-flex items-center space-x-2 border-2 border-[#8b4513] text-[#8b4513] px-8 py-4 rounded-xl font-medium hover:bg-[#8b4513] hover:text-white transition-all duration-300 transform hover:scale-105">

                      <span>Send Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Moving Banner - Updated colors and content */}
        <section className="py-8 bg-[#dda15e] overflow-hidden">
          <div className="whitespace-nowrap">
            <div className="inline-flex space-x-8 animate-marquee">
              {[...skills, ...skills].map((skill, index) =>
              <span key={index} className="text-[#8b4513] text-xl font-medium px-8">
                  {skill}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#dda15e] font-medium text-lg mb-4">Get in Touch</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#8b4513] mb-6">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business with intelligent automation and full-stack solutions? Let's discuss your project and bring your digital vision to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Contact Information */}
              <div ref={contactLeftRef.ref} className="space-y-8">
                <h3 className="text-2xl font-bold text-[#8b4513] mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#8b4513] rounded-full">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#8b4513]">Email</h4>
                      <a href="mailto:smsainarendar@gmail.com" className="text-gray-600 hover:text-[#dda15e] transition-colors">
                        smsainarendar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#cd853f] rounded-full">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#8b4513]">Personal</h4>
                      <a href="tel:+917010308369" className="text-gray-600 hover:text-[#dda15e] transition-colors">
                        +91 7010308369
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#dda15e] rounded-full">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#8b4513]">company</h4>
                      <a href="tel:+919688113670" className="text-gray-600 hover:text-[#dda15e] transition-colors">
                        +91 9688113670
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h4 className="text-lg font-semibold text-[#8b4513] mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/sainarendar23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#8b4513] rounded-full flex items-center justify-center hover:bg-[#6d3410] transition-colors">

                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/s-sainarendar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#dda15e] rounded-full flex items-center justify-center hover:bg-[#cd853f] transition-colors">

                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div ref={contactRightRef.ref} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#8b4513] mb-6">Send Message</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#dda15e] focus:outline-none transition-colors" />

                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#dda15e] focus:outline-none transition-colors" />

                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#dda15e] focus:outline-none transition-colors" />

                  </div>
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-[#dda15e] focus:outline-none transition-colors resize-none">
                    </textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#8b4513] to-[#cd853f] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">

                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#fdf7f2] to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div ref={resumeRef.ref} className="space-y-4 mb-12">
              <p className="text-[#dda15e] font-medium text-lg">My Resume</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#8b4513]">
                Real Problem Solutions Experience
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fdf7f2]">
                <div className="text-left">
                  <div className="text-[#dda15e] font-bold text-lg mb-2">2025</div>
                  <h3 className="text-2xl font-bold text-[#8b4513] mb-4">Automation Architect</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Led automation initiatives across multiple projects, implementing intelligent solutions using AI agents and modern automation frameworks. Specialized in fullstack development and process optimization.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fdf7f2]">
                <div className="text-left">
                  <div className="text-[#dda15e] font-bold text-lg mb-2">2022 - 2024</div>
                  <h3 className="text-2xl font-bold text-[#8b4513] mb-4">student</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Developed scalable fullstack applications and automation tools. Collaborated with cross-functional teams to deliver robust solutions using modern technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>);
}