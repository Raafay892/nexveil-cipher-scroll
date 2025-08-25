import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'hero', label: '01_HOME' },
    { id: 'services', label: '02_INTEL' },
    { id: 'cybersecurity', label: '03_CYBER' },
    { id: 'about', label: '04_ABOUT' },
    { id: 'contact', label: '05_CONTACT' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset: document.getElementById(section.id)?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + 100;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionElements[i].offset) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-cyber ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-primary/20' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display text-2xl font-bold text-gradient-cyber">
            NEXVEIL
            <span className="animate-cursor text-primary">_</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'cyber' : 'ghost'}
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className="font-mono text-xs"
              >
                {section.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
          >
            <div className="w-4 h-4 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-primary"></div>
              <div className="w-full h-0.5 bg-primary"></div>
              <div className="w-full h-0.5 bg-primary"></div>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;