import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CybersecuritySection from '@/components/CybersecuritySection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground custom-scrollbar">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Cybersecurity Section */}
        <CybersecuritySection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="font-display text-xl font-bold text-gradient-cyber">
                NEXVEIL
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                © 2024 NEXVEIL Intelligence Services. All rights reserved.
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse-glow"></div>
                <span className="font-mono text-xs text-muted-foreground">SECURE_SITE</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                SSL_ENCRYPTED | ISO_27001_CERTIFIED
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-muted-foreground">
              <span>OSINT</span>
              <span>•</span>
              <span>IMINT</span>
              <span>•</span>
              <span>GEOINT</span>
              <span>•</span>
              <span>HUMINT</span>
              <span>•</span>
              <span>SOCMINT</span>
              <span>•</span>
              <span>CYBERSECURITY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;