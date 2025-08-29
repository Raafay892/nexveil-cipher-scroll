
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

  const clientStats = [
    { metric: 'Satisfied Clients', value: '50+', description: 'Global Organizations' },
    { metric: 'Success Rate', value: '98.5%', description: 'Mission Completion' },
    { metric: 'Response Time', value: '<2hrs', description: 'Critical Operations' },
    { metric: 'Data Accuracy', value: '99.2%', description: 'Intelligence Verification' }
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
            HUMINT, TECHINT, and cybersecurity services for organizations navigating the complex digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Enhanced Mission & Vision */}
          <div className="space-y-8 animate-slide-right">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm hover-lift animate-zoom-in">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-primary animate-neon-flicker">
                  MISSION_STATEMENT
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base hover:text-foreground transition-colors">
                  To empower organizations with actionable intelligence and robust cybersecurity solutions, 
                  enabling informed decision-making in an increasingly complex digital world. We bridge the 
                  gap between raw data and strategic insights through advanced technology and expert analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/50 backdrop-blur-sm hover-lift animate-zoom-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-secondary animate-neon-flicker">
                  VISION
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base hover:text-foreground transition-colors">
                  To become the global leader in intelligence services, setting new standards for accuracy, 
                  security, and innovation. We envision a future where our AI-enhanced human intelligence 
                  capabilities provide unparalleled insights for critical decision-making.
                </p>
              </CardContent>
            </Card>

            {/* Enhanced Core Values */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground animate-neon-flicker">
                CORE_VALUES
              </h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 sm:p-6 cyber-border bg-card/30 backdrop-blur-sm rounded-sm hover-lift group animate-slide-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl sm:text-3xl animate-floating hover-glow" style={{ animationDelay: `${index * 0.5}s` }}>
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-mono text-primary font-semibold text-sm sm:text-base group-hover:text-cyber-green transition-colors">
                        {value.title.toUpperCase()}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Timeline & Stats */}
          <div className="space-y-8">
            {/* Satisfied Clients Stats */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  CLIENT_SUCCESS_METRICS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {clientStats.map((stat, index) => (
                    <div key={index} className="text-center p-3 cyber-border bg-card/20 rounded-sm">
                      <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="font-mono text-xs text-foreground font-semibold">{stat.metric}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                    <span className="font-mono text-primary">50+</span>
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
