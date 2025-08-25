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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="cyber-border bg-card/30 backdrop-blur-sm text-center">
              <CardContent className="p-4 space-y-2">
                <div className={`font-display text-2xl font-bold text-${stat.color}`}>
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Tabs */}
        <div className="space-y-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(cybersecurityServices).map(([key, service]) => (
              <Button
                key={key}
                variant={activeTab === key ? 'cyber' : 'outline'}
                size="sm"
                onClick={() => setActiveTab(key)}
                className="font-mono"
              >
                {service.title.toUpperCase()}
              </Button>
            ))}
          </div>

          {/* Active Service Content */}
          <Card className="cyber-border bg-card/50 backdrop-blur-sm max-w-4xl mx-auto">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-2xl text-foreground">
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
                  className="font-mono text-xs"
                >
                  {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].riskLevel.toUpperCase()}_SECURITY
                </Badge>
              </div>
              <CardDescription className="text-base">
                {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-mono text-sm text-primary font-semibold">
                    SERVICE_FEATURES:
                  </h4>
                  <ul className="space-y-2">
                    {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="text-primary mr-2 font-mono">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="space-y-3">
                  <h4 className="font-mono text-sm text-primary font-semibold">
                    TOOLS_&_PLATFORMS:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cybersecurityServices[activeTab as keyof typeof cybersecurityServices].tools.map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="font-mono text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button variant="cyber" size="lg" className="w-full md:w-auto">
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