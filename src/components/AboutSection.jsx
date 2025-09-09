"use client";

import React from 'react';
import { Github, Linkedin, Code2, Smartphone, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref: imageRef } = useScrollAnimation({ animationType: 'fade-left' });
  const { ref: contentRef } = useScrollAnimation({ animationType: 'fade-right', delay: 200 });
  const { ref: skillsRef } = useScrollAnimation({ animationType: 'scale', delay: 400 });

  const skills = [
    {
      category: "Development", 
      icon: <Code2 className="w-5 h-5" />,
      items: ["React/Next.js", "JavaScript/TypeScript", "Node.js"]
    },
    {
      category: "Automation",
      icon: <Smartphone className="w-5 h-5" />,
      items: ["Process Automation", "Workflow Optimization", "API Integration", "Testing", "Cross-platform"]
    },
    {
      category: "Web",
      icon: <Globe className="w-5 h-5" />,
      items: ["Frontend Development", "Backend APIs", "Full-stack", "UI/UX"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fdf7f2] to-[#f5e6d3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#e8c5a0] to-[#dda15e] p-8 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#8b4513] to-[#dda15e] rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">SN</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#6d3410] mb-2">Sai Narendar</h3>
                    <p className="text-[#8b4513]">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Social Icons */}
              <div className="absolute -top-4 -right-4 flex flex-col gap-3">
                <a
                  href="https://github.com/sainarendar23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-effect rounded-full p-3 hover-lift animate-bounce-in w-12 h-12 flex items-center justify-center"
                >
                  <Github className="w-5 h-5 text-[#6d3410] group-hover:text-[#8b4513] transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/s-sainarendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-effect rounded-full p-3 hover-lift animate-bounce-in w-12 h-12 flex items-center justify-center"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Linkedin className="w-5 h-5 text-[#6d3410] group-hover:text-[#8b4513] transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#f5e6d3] text-[#6d3410] rounded-full text-sm font-medium">
                  About Me
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-[#6d3410] leading-tight">
                Passionate Developer &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cd853f] to-[#dda15e]">
                  Creative Problem Solver
                </span>
              </h2>
              
              <p className="text-lg text-[#8b4513]/80 leading-relaxed">
                I'm a full-stack developer with a passion for creating digital experiences that make a difference. 
                With expertise in modern web technologies and a keen eye for design, I bring ideas to life through 
                clean, efficient code and intuitive user interfaces.
              </p>
              
              <p className="text-lg text-[#8b4513]/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying 
                ahead of the curve in this ever-evolving field.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/sainarendar23"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-base font-medium group bg-[#8b4513] text-white hover:bg-[#6d3410] hover-lift rounded-full inline-flex items-center gap-3 transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/s-sainarendar/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-base font-medium group border-[#dda15e]/30 text-[#6d3410] hover:bg-[#f5e6d3] hover-lift rounded-full inline-flex items-center gap-3 border-2 transition-all duration-300"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#6d3410] mb-4">Core Skills & Expertise</h3>
            <p className="text-lg text-[#8b4513]/80 max-w-2xl mx-auto">
              A diverse set of skills that enable me to build comprehensive digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.category}
                className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#e8c5a0]/30 hover:shadow-xl hover:shadow-[#dda15e]/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8b4513] to-[#cd853f] rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-[#6d3410] mb-3">{skill.category}</h4>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="inline-block px-3 py-1 bg-[#f5e6d3] text-[#6d3410] rounded-full text-sm mr-2 mb-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}