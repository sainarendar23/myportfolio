"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Skills', href: '/skills', id: 'skills' },
  { name: 'Projects', href: '/projects', id: 'projects' },
  { name: 'Contact', href: '/contact', id: 'contact' }
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Handle scroll detection for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for active section detection on home page
  useEffect(() => {
    if (!isHomePage) return;

    const observers: IntersectionObserver[] = [];
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
        );
        
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isHomePage]);

  const handleNavClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      // On home page, use smooth scroll to sections
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // On other pages, navigate to home page with hash
      if (item.id === 'home') {
        router.push('/');
      } else {
        router.push(`/#${item.id}`);
      }
    }
  };

  const handleCTAClick = () => {
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      router.push('/#contact');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <div className="cursor-pointer" onClick={() => router.push('/')}>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#8b4513] to-[#cd853f] bg-clip-text text-transparent">
                Sai Narendar S
              </h1>
              <p className="text-xs md:text-sm text-[#cd853f] font-medium">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-[#8b4513] ${
                  (isHomePage && activeSection === item.id) || (!isHomePage && pathname === item.href)
                    ? 'text-[#8b4513]'
                    : 'text-gray-700 hover:text-[#8b4513]'
                } group`}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8b4513] to-[#dda15e] transition-all duration-200 ${
                    (isHomePage && activeSection === item.id) || (!isHomePage && pathname === item.href)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleCTAClick}
              className="px-6 py-2.5 bg-gradient-to-r from-[#8b4513] to-[#cd853f] text-white font-medium text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#cd853f] hover:to-[#dda15e]"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#8b4513] hover:text-[#cd853f] hover:bg-[#dda15e]/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-[#dda15e]/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                  (isHomePage && activeSection === item.id) || (!isHomePage && pathname === item.href)
                    ? 'text-[#8b4513] bg-[#dda15e]/10'
                    : 'text-gray-700 hover:text-[#8b4513] hover:bg-[#dda15e]/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="px-4 pt-4">
              <button
                onClick={handleCTAClick}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#8b4513] to-[#cd853f] text-white font-medium text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#cd853f] hover:to-[#dda15e]"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};