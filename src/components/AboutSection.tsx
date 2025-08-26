import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      title: 'Precision',
      description: 'Every data point matters. We deliver accurate, verified intelligence.',
      icon: '🎯'
    },
    {
      title: 'Security',
      description: 'Your operations remain confidential with military-grade encryption.',
      icon: '🔐'
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology meets expert human analysis.',
      icon: '⚡'
    }
  ];

  const timeline = [
    { year: '2022', event: 'Founded with focus on OSINT services' },
    { year: '2023', event: 'Expanded to full spectrum intelligence' },
    { year: '2024', event: 'Launched Cybersecurity division' },
    { year: '2025', event: 'AI-powered analysis integration' }
  ];

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-cyber">
            ABOUT_NEXVEIL
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A specialized intelligence firm dedicated to providing cutting-edge OSINT, IMINT, GEOINT, 
            HUMINT, SOCMINT, and cybersecurity services for organizations navigating the complex digital landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-primary">
                  MISSION_STATEMENT
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations with actionable intelligence and robust cybersecurity solutions, 
                  enabling informed decision-making in an increasingly complex digital world. We bridge the 
                  gap between raw data and strategic insights through advanced technology and expert analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-secondary">
                  VISION_2030
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the global leader in intelligence services, setting new standards for accuracy, 
                  security, and innovation. We envision a future where our AI-enhanced human intelligence 
                  capabilities provide unparalleled insights for critical decision-making.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground">
                CORE_VALUES
              </h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 cyber-border bg-card/30 backdrop-blur-sm rounded-sm">
                    <div className="text-2xl">{value.icon}</div>
                    <div>
                      <h4 className="font-mono text-primary font-semibold">{value.title.toUpperCase()}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Timeline & Stats */}
          <div className="space-y-8">
            {/* Timeline */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  COMPANY_TIMELINE
                </h3>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-primary text-sm font-semibold">{item.year}</div>
                        <div className="text-sm text-muted-foreground">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


            {/* Team Stats */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  TEAM_EXPERTISE
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-muted-foreground">Security Analysts</span>
                    <span className="font-mono text-primary">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-muted-foreground">Intelligence Specialists</span>
                    <span className="font-mono text-primary">12+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-muted-foreground">Data Scientists</span>
                    <span className="font-mono text-primary">8+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-muted-foreground">Years Combined Experience</span>
                    <span className="font-mono text-primary">150+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;