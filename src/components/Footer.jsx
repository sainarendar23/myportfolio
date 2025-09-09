"use client";

import { Heart, Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com",
      color: "hover:text-white"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:smsainarendar23@gmail.com", 
      color: "hover:text-red-400"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects-showcase" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Mobile Apps", 
    "UI/UX Design",
    "Product Design",
    "Branding",
    "Consulting"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-card via-background to-card border-t border-border/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6 animate-slide-up">
              <div className="space-y-4">
                <div className="font-display font-bold text-2xl gradient-text">
                  Sai Narendar
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Crafting beautiful digital experiences through thoughtful design and clean code. 
                  Passionate about creating intuitive interfaces that delight users and drive results.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:smsainarendar23@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    smsainarendar23@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <a 
                    href="tel:+917010308369"
                    className="hover:text-primary transition-colors"
                  >
                    +91 7010308369
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-effect rounded-full p-3 text-muted-foreground transition-all duration-300 hover-lift ${social.color} animate-bounce-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-lg font-display font-semibold text-foreground">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h4 className="text-lg font-display font-semibold text-foreground">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border/20 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-xl font-display font-bold text-foreground">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get notified about new projects, blog posts, and updates. No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 hover-lift">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© 2024 Sai Narendar. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Badge variant="outline" className="border-primary/30 text-primary px-2 py-0.5 text-xs">
                ☕ Coffee
              </Badge>
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/30 text-foreground hover:bg-primary/10 hover-lift group"
            >
              <ArrowUp className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Skills Banner */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="animate-marquee whitespace-nowrap py-4 text-primary/10 text-sm font-medium">
          {Array.from({ length: 20 }, (_, i) => (
            <span key={i} className="mx-8">
              branding • product design • UI/UX design • Front-end development • Web design • Graphic design • Video editing
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}