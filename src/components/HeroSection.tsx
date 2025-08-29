
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/nexveil-hero-bg.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = 'ADVANCED INTELLIGENCE SERVICES';
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeWriter);
      }
    }, 100);
    
    return () => clearInterval(typeWriter);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
      </div>
      
      {/* Animated Grid Overlay with Floating Effect */}
      <div className="absolute inset-0 cyber-grid opacity-30 animate-floating"></div>
      
      {/* Enhanced Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyber-green text-xs font-mono opacity-40 animate-matrix hover-glow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              fontSize: `${0.6 + Math.random() * 0.4}rem`
            }}
          >
            {Array.from({ length: Math.floor(8 + Math.random() * 12) }).map((_, j) => (
              <div key={j} className="animate-neon-flicker" style={{ animationDelay: `${j * 0.1}s` }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Multiple Scan Line Effects */}
      <div className="absolute inset-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan opacity-60"></div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-scan opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-scan opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 text-6xl animate-floating">⚡</div>
        <div className="absolute top-40 right-20 text-cyber-blue/20 text-4xl animate-floating" style={{ animationDelay: '1s' }}>🔒</div>
        <div className="absolute bottom-40 left-1/4 text-cyber-green/20 text-5xl animate-floating" style={{ animationDelay: '2s' }}>🌐</div>
        <div className="absolute top-1/3 right-10 text-accent/20 text-3xl animate-floating" style={{ animationDelay: '3s' }}>🛡️</div>
      </div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 text-center space-y-8 px-4 sm:px-6 max-w-6xl mx-auto pt-16">
        {/* Main Title with Enhanced Effects */}
        <div className="space-y-6 animate-slide-down">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground flex items-center justify-center group hover-glow">
            <img 
              src="/lovable-uploads/d41bc7af-09af-4dc6-9d85-5457bb5e28b9.png" 
              alt="Nexveil Logo as N" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-all duration-700 group-hover:drop-shadow-2xl group-hover:drop-shadow-primary/70 group-hover:scale-125 group-hover:rotate-12 animate-glow-pulse"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.style.display = 'block';
              }}
            />
            <span className="ml-2">EX</span><span className="text-gradient-cyber animate-neon-flicker">VEIL</span>
          </h1>
          <div className="h-20 flex items-center justify-center">
            <p className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl text-primary tracking-wider animate-glow-pulse">
              {displayText}
              {isTyping && <span className="animate-cursor text-cyber-green">|</span>}
            </p>
          </div>
        </div>

        {/* Enhanced Tagline */}
        <div className="space-y-6 animate-slide-up">
          <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed italic pl-6 animate-slide-right">
            "Open source intelligence transforms scattered data into strategic advantage."
          </p>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto animate-slide-left">
            Professional intelligence services powered by advanced technology and expert analysis.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 animate-zoom-in mobile-stack">
          <Button 
            variant="cyber" 
            size="hero"
            onClick={scrollToServices}
            className="group hover-lift mobile-full transition-all duration-500 hover:scale-110"
          >
            EXPLORE SERVICES
            <span className="ml-2 group-hover:animate-glitch transition-all duration-300">→</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="hero"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover-lift mobile-full transition-all duration-500 hover:scale-110"
          >
            CONTACT US
          </Button>
        </div>

        {/* Enhanced Status Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-12 opacity-70 mobile-stack mobile-center animate-slide-up">
          <div className="flex items-center gap-2 hover-glow cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse-glow"></div>
            <span className="font-mono text-xs sm:text-sm text-muted-foreground hover:text-cyber-green transition-colors mobile-text-sm">SYSTEMS_ONLINE</span>
          </div>
          <div className="flex items-center gap-2 hover-glow cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow"></div>
            <span className="font-mono text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors mobile-text-sm">SECURITY_ACTIVE</span>
          </div>
          <div className="flex items-center gap-2 hover-glow cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-cyber-blue animate-pulse-glow"></div>
            <span className="font-mono text-xs sm:text-sm text-muted-foreground hover:text-cyber-blue transition-colors mobile-text-sm">INTEL_READY</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover-glow cursor-pointer">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center hover:border-cyber-green transition-colors duration-300">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse hover:bg-cyber-green transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
