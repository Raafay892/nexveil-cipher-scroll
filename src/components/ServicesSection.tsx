
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'osint',
      code: 'OSINT',
      title: 'Open Source Intelligence',
      description: 'Advanced data collection and analysis from publicly available information sources.',
      features: ['IMINT', 'HUMINT', 'GEOINT', 'TECHINT'],
      icon: '🔍'
    },
    {
      id: 'imint',
      code: 'IMINT',
      title: 'Imagery Intelligence',
      description: 'Sophisticated image and video analysis for intelligence gathering and verification.',
      features: ['Visual Verification', 'Pattern Recognition', 'Satellite Image Analysis', 'Forensic Photography'],
      icon: '📡'
    },
    {
      id: 'geoint',
      code: 'GEOINT',
      title: 'Geospatial Intelligence',
      description: 'Location-based intelligence services using cutting-edge mapping and spatial analysis.',
      features: ['Geographic Analysis', 'Aerial Surveillance', 'Territory Mapping', 'Boundary & Border Monitoring'],
      icon: '🌍'
    },
    {
      id: 'humint',
      code: 'HUMINT',
      title: 'Human Intelligence',
      description: 'Strategic intelligence gathered through human networks and behavioral analysis.',
      features: ['Personally Identifiable Information (PII)', 'Social Media Presence Analysis', 'Behavioral Analysis', 'Background Check Investigation'],
      icon: '👥'
    },
    {
      id: 'techint',
      code: 'TECHINT',
      title: 'Technical Intelligence',
      description: 'Advanced intelligence gathered through technical means and technological analysis.',
      features: ['Organizational Profiling', 'Assets Profiling', 'Military Profiling'],
      icon: '⚙️'
    }
  ];

  return (
    <section id="services" className="py-20 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-cyber">
            INTELLIGENCE SERVICES
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive intelligence services powered by advanced technology and expert analysis
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="responsive-grid max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`cyber-border bg-card/50 backdrop-blur-sm hover-lift group cursor-pointer animate-slide-up transition-all duration-500 ${
                hoveredService === service.id ? 'glow-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardHeader className="space-y-4 mobile-p-4">
                <div className="flex items-center justify-between">
                  <div className="text-3xl sm:text-4xl animate-floating hover-glow" style={{ animationDelay: `${index * 0.5}s` }}>
                    {service.icon}
                  </div>
                  <div className="font-mono text-xs text-primary opacity-60 animate-neon-flicker">
                    0{index + 1}_
                  </div>
                </div>
                <div>
                  <CardTitle className="font-display text-lg sm:text-xl md:text-2xl text-foreground group-hover:text-primary transition-all duration-300 group-hover:animate-glitch">
                    {service.code}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-1 text-sm sm:text-base">
                    {service.title}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 mobile-p-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <div className="font-mono text-xs sm:text-sm text-primary animate-neon-flicker">CAPABILITIES:</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors animate-slide-right" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <span className="text-primary mr-2 group-hover:text-cyber-green transition-colors">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary hover:text-primary mobile-full"
                >
                  LEARN MORE
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Data Flow Animation */}
        <div className="mt-20 relative animate-slide-up">
          <div className="flex items-center justify-center gap-2 sm:gap-4 opacity-40">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-primary via-cyber-blue to-cyber-green animate-data-flow hover-glow" style={{ animationDelay: `${i * 0.2}s` }}></div>
                {i < 6 && <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse-glow" style={{ animationDelay: `${i * 0.3}s` }}></div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="font-mono text-xs sm:text-sm text-muted-foreground animate-neon-flicker mobile-text-sm">
              DATA_FLOW_ACTIVE // INTELLIGENCE_PIPELINE_ONLINE
            </div>
          </div>
          
          {/* Additional Visual Elements */}
          <div className="mt-8 flex justify-center items-center gap-8 opacity-30">
            <div className="text-primary text-2xl animate-floating">⚡</div>
            <div className="text-cyber-blue text-xl animate-floating" style={{ animationDelay: '1s' }}>🔍</div>
            <div className="text-cyber-green text-2xl animate-floating" style={{ animationDelay: '2s' }}>🛡️</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
