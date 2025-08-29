import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CybersecuritySection = () => {
  const [activeTab, setActiveTab] = useState('assessment');

  const cybersecurityServices = {
    assessment: {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security posture evaluation and risk analysis',
      features: [
        'Network Security Audit',
        'Application Security Testing', 
        'Infrastructure Assessment',
        'Compliance Verification'
      ],
      tools: ['Nmap', 'Metasploit', 'Burp Suite', 'OpenVAS'],
      riskLevel: 'high'
    },
    penetration: {
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to identify and exploit vulnerabilities',
      features: [
        'External Penetration Testing',
        'Internal Network Testing',
        'Web Application Testing',
        'Social Engineering Simulation'
      ],
      tools: ['Kali Linux', 'Cobalt Strike', 'OWASP ZAP', 'Wireshark'],
      riskLevel: 'critical'
    },
    monitoring: {
      title: 'Dark Web Monitoring',
      description: 'Continuous surveillance of hidden networks for threat intelligence',
      features: [
        'Credential Monitoring',
        'Data Breach Detection',
        'Threat Actor Tracking',
        'Market Intelligence'
      ],
      tools: ['Tor Network', 'I2P', 'Custom Scrapers', 'AI Analysis'],
      riskLevel: 'medium'
    }
  };

  const stats = [
    { label: 'THREATS_DETECTED', value: '99.7%', color: 'cyber-green' },
    { label: 'RESPONSE_TIME', value: '<15min', color: 'primary' },
    { label: 'SYSTEMS_PROTECTED', value: '500+', color: 'cyber-blue' },
    { label: 'UPTIME_GUARANTEE', value: '99.9%', color: 'cyber-green' }
  ];

  return (
    <section id="cybersecurity" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-10"></div>
        {/* Floating security icons */}
        <div className="absolute top-20 left-10 text-primary/20 animate-pulse">🔒</div>
        <div className="absolute top-40 right-20 text-primary/20 animate-pulse delay-1000">🛡️</div>
        <div className="absolute bottom-40 left-1/4 text-primary/20 animate-pulse delay-2000">⚡</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="font-mono text-xs border-accent text-accent">
            CYBERSECURITY_DIVISION
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            CYBER<span className="text-gradient-danger">SECURITY</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Advanced cybersecurity services including vulnerability assessments, penetration testing, 
            and deep web monitoring to protect your digital assets.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="responsive-grid max-w-5xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="cyber-border bg-card/30 backdrop-blur-sm text-center hover-lift animate-zoom-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6 space-y-3">
                <div className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold text-${stat.color} group-hover:animate-glitch animate-neon-flicker`}>
                  {stat.value}
                </div>
                <div className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors mobile-text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Tabs */}
        <div className="space-y-8">
          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-slide-up">
            {Object.entries(cybersecurityServices).map(([key, service], index) => (
              <Button
                key={key}
                variant="outline"
                size="sm"
                onClick={() => setActiveTab(key)}
                className={`font-mono cyber-red-hover hover-lift animate-slide-down mobile-full ${activeTab === key ? 'cyber-red-active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.title.toUpperCase()}
              </Button>
            ))}
          </div>

          {/* Enhanced Active Service Content */}
          <Card className="cyber-border bg-card/50 backdrop-blur-sm max-w-5xl mx-auto hover-lift animate-zoom-in">
            <CardHeader className="space-y-4 sm:space-y-6 mobile-p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mobile-stack">
                <CardTitle className="font-display text-xl sm:text-2xl md:text-3xl text-foreground animate-slide-right mobile-center">
                  {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].title}
                </CardTitle>
                <Badge 
                  variant={
                    cybersecurityServices[activeTab as keyof typeof cybersecurityServices].riskLevel === 'critical' 
                      ? 'destructive' 
                      : cybersecurityServices[activeTab as keyof typeof cybersecurityServices].riskLevel === 'high'
                      ? 'default'
                      : 'secondary'
                  }
                  className="font-mono text-xs sm:text-sm animate-neon-flicker hover-glow"
                >
                  {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].riskLevel.toUpperCase()}_SECURITY
                </Badge>
              </div>
              <CardDescription className="text-sm sm:text-base md:text-lg animate-slide-left">
                {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 mobile-p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Enhanced Features */}
                <div className="space-y-4 animate-slide-up">
                  <h4 className="font-mono text-sm sm:text-base text-primary font-semibold animate-neon-flicker">
                    SERVICE_FEATURES:
                  </h4>
                  <ul className="space-y-3">
                    {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].features.map((feature, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-muted-foreground flex items-center hover:text-foreground transition-colors animate-slide-right" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <span className="text-primary mr-3 font-mono text-lg hover:text-cyber-green transition-colors">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Tools */}
                <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <h4 className="font-mono text-sm sm:text-base text-primary font-semibold animate-neon-flicker">
                    TOOLS_&_PLATFORMS:
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].tools.map((tool, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="font-mono text-xs sm:text-sm hover-glow hover:scale-105 transition-all duration-300 animate-slide-left"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border animate-slide-up">
                <Button variant="cyber" size="lg" className="w-full sm:w-auto hover-lift hover:scale-105 transition-all duration-300 mobile-full">
                  REQUEST_ASSESSMENT
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Alert Simulation */}
        <div className="mt-16 text-center">
          <Card className="cyber-border bg-card/20 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse-glow"></div>
                <span className="font-mono text-sm text-cyber-green">SECURITY_STATUS: ACTIVE</span>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                All systems monitored • Threat detection: ONLINE • 
                <br />
                Last scan: {new Date().toLocaleTimeString()} • Next: {new Date(Date.now() + 300000).toLocaleTimeString()}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CybersecuritySection;