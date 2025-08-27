
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
      features: ['Social Media Analysis', 'Public Records Investigation', 'Digital Footprint Mapping', 'Online Threat Assessment'],
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
      features: ['Technical Vulnerability Assessment', 'Digital Forensics', 'Network Analysis', 'Cyber Threat Intelligence'],
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`cyber-border bg-card/50 backdrop-blur-sm transition-cyber hover:bg-card/80 group cursor-pointer ${
                hoveredService === service.id ? 'glow-primary' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl">{service.icon}</div>
                  <div className="font-mono text-xs text-primary opacity-60">
                    0{index + 1}_
                  </div>
                </div>
                <div>
                  <CardTitle className="font-display text-xl text-foreground group-hover:text-primary transition-cyber">
                    {service.code}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-1">
                    {service.title}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <div className="font-mono text-xs text-primary">CAPABILITIES:</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 group-hover:variant-primary transition-cyber"
                >
                  LEARN MORE
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Data Flow Animation */}
        <div className="mt-16 relative">
          <div className="flex items-center justify-center gap-4 opacity-30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-8 h-px bg-primary animate-data-flow"></div>
                {i < 4 && <div className="w-2 h-2 rounded-full bg-primary"></div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <div className="font-mono text-xs text-muted-foreground">
              DATA_FLOW_ACTIVE // INTELLIGENCE_PIPELINE_ONLINE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
