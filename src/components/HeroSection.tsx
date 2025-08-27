
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/nexveil-hero-bg.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = 'NEXVEIL ADVANCED INTELLIGENCE SERVICES';
  
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
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyber-green text-xs font-mono opacity-30 animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="font-display text-5xl md:text-7xl font-black text-foreground">
            NEX<span className="text-gradient-cyber">VEIL</span>
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="font-mono text-lg md:text-xl text-primary tracking-wider">
              {displayText}
              {isTyping && <span className="animate-cursor">|</span>}
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Cutting-edge <span className="text-primary">OSINT</span>, <span className="text-primary">IMINT</span>, <span className="text-primary">GEOINT</span>, <span className="text-primary">HUMINT</span>, <span className="text-primary">TECHINT</span> and cybersecurity services for the digital age.
          </p>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Professional intelligence services powered by advanced technology and expert analysis.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button 
            variant="cyber" 
            size="hero"
            onClick={scrollToServices}
            className="group"
          >
            EXPLORE SERVICES
            <span className="ml-2 group-hover:animate-glitch">→</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="hero"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            CONTACT US
          </Button>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-center gap-8 pt-12 opacity-60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse-glow"></div>
            <span className="font-mono text-xs text-muted-foreground">SYSTEMS_ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
            <span className="font-mono text-xs text-muted-foreground">SECURITY_ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse-glow"></div>
            <span className="font-mono text-xs text-muted-foreground">INTEL_READY</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
