"use client";

import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Award, Code, Palette, Database, Globe, Users, Heart, Star, Download } from 'lucide-react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const frontendSkills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vue.js'];
  const backendSkills = ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Python', 'Django', 'REST APIs', 'GraphQL'];
  const toolsSkills = ['Git', 'Docker', 'AWS', 'Jenkins', 'Kubernetes', 'Terraform', 'CI/CD', 'Automation Tools'];
  const softSkills = ['Problem Solving', 'Team Leadership', 'Project Management', 'Communication', 'Innovation', 'Process Optimization'];

  const achievements = [
    { icon: Award, title: 'Excellence Award', description: 'Best Developer & Architect 2024' },
    { icon: Users, title: 'Team Leader', description: 'Led 10+ automation projects' },
    { icon: Star, title: 'Client Satisfaction', description: '98% positive feedback rate' },
    { icon: Code, title: 'Open Source', description: '30+ contributions on GitHub' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-[#fdf7f2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-[#dda15e] font-medium text-lg mb-4">Get To Know Me</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#8b4513] mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b4513] to-[#dda15e] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Profile Card */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl dharani-card border border-[#fdf7f2]">
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-[#8b4513] to-[#dda15e] p-1 profile-container">
                  <div className="w-full h-full rounded-2xl bg-[#fdf7f2] flex items-center justify-center overflow-hidden">
                    <div className="text-center text-[#8b4513]">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#8b4513] to-[#cd853f] rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">SN</span>
                      </div>
                      <p className="text-sm opacity-60">Your Photo Here</p>
                    </div>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full inline-block mr-2 animate-pulse"></span>
                    Available for work
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#8b4513] mb-2">Sai Narendar S</h3>
                <p className="text-[#cd853f] font-medium text-lg mb-4">Developer & Automation Architect</p>
                
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#dda15e]" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#dda15e]" />
                    <span>5+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mb-8">
                {[
                  { icon: Github, href: 'https://github.com/sainarendar', color: 'bg-[#8b4513]' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/sai-narendar-s', color: 'bg-[#cd853f]' },
                  { icon: Twitter, href: 'https://twitter.com/sainarendar', color: 'bg-[#dda15e]' },
                  { icon: Mail, href: 'mailto:smsainarendar@gmail.com', color: 'bg-[#8b4513]' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg social-button`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="dharani-button w-full flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* About Content */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-8">
              {/* Personal Story */}
              <div className="bg-white rounded-2xl p-8 shadow-lg dharani-card">
                <h3 className="text-2xl font-bold text-[#8b4513] mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-[#dda15e]" />
                  My Story
                </h3>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Hello! I'm Sai Narendar S, a passionate developer and automation architect with over 5 years of experience 
                    creating intelligent solutions that transform business processes. My journey started with a fascination for 
                    automation and has evolved into expertise in building scalable fullstack applications and AI-powered systems.
                  </p>
                  <p className="mb-4">
                    I believe in the power of automation to solve complex problems and streamline operations. Every project I work on 
                    is an opportunity to implement cutting-edge technology and create meaningful impact through intelligent automation. 
                    Whether it's developing AI agents or architecting fullstack solutions, I approach each challenge 
                    with innovation and precision.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring emerging technologies, contributing to automation frameworks, 
                    and sharing knowledge about AI agents and process optimization. I'm always excited to take on new automation 
                    challenges and collaborate with teams to build the future of intelligent systems.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg dharani-card text-center">
                      <Icon className="w-8 h-8 text-[#dda15e] mx-auto mb-3" />
                      <h4 className="font-bold text-[#8b4513] mb-2">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#8b4513] mb-4">My Skills & Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and skills I use to build intelligent automation solutions and create exceptional fullstack applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg dharani-card">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-[#8b4513] mr-2" />
                <h4 className="font-bold text-[#8b4513] text-lg">Frontend</h4>
              </div>
              <div className="space-y-2">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-[#dda15e] rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg dharani-card">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-[#cd853f] mr-2" />
                <h4 className="font-bold text-[#8b4513] text-lg">Backend</h4>
              </div>
              <div className="space-y-2">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-[#cd853f] rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg dharani-card">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-[#dda15e] mr-2" />
                <h4 className="font-bold text-[#8b4513] text-lg">Automation Tools</h4>
              </div>
              <div className="space-y-2">
                {toolsSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-[#8b4513] rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg dharani-card">
              <div className="flex items-center mb-4">
                <Palette className="w-6 h-6 text-[#cd853f] mr-2" />
                <h4 className="font-bold text-[#8b4513] text-lg">Soft Skills</h4>
              </div>
              <div className="space-y-2">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-[#dda15e] rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-[#8b4513] to-[#cd853f] rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Let's Work Together</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new automation challenges and collaborate with amazing teams. 
              Let's build intelligent solutions together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-white text-[#8b4513] px-8 py-4 rounded-xl font-medium hover:bg-[#fdf7f2] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start a Project
              </a>
              <a
                href="mailto:smsainarendar@gmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-[#8b4513] transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};