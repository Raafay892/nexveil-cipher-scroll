import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/5' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center font-display text-2xl font-bold text-gradient-cyber group cursor-pointer transition-all duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/d41bc7af-09af-4dc6-9d85-5457bb5e28b9.png" 
                alt="Nexveil Logo" 
                className="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-primary/50"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={(e) => {
                  e.currentTarget.style.display = 'block';
                }}
              />
              <span className="ml-1">EXVEIL</span>
              <span className="animate-cursor text-primary ml-1">_</span>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex space-x-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'cyber' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className={`font-mono text-xs transition-all duration-300 hover:scale-105 ${
                    activeSection === section.id 
                      ? 'shadow-lg shadow-primary/30 border-primary/50' 
                      : 'hover:bg-primary/10 hover:border-primary/30'
                  }`}
                >
                  {section.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:border-primary/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-primary" />
              ) : (
                <Menu className="w-4 h-4 text-primary" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 bg-background/95 backdrop-blur-lg border-b border-primary/20' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="container mx-auto px-6 py-4 space-y-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'cyber' : 'ghost'}
                size="sm"
                onClick={() => {
                  scrollToSection(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full justify-start font-mono text-xs transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'shadow-lg shadow-primary/30 border-primary/50' 
                    : 'hover:bg-primary/10 hover:border-primary/30'
                }`}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;