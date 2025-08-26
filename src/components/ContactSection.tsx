import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    urgency: 'standard'
  });

  const services = [
    'OSINT Services',
    'IMINT Analysis', 
    'GEOINT Solutions',
    'HUMINT Operations',
    'SOCMINT Monitoring',
    'Cybersecurity Assessment',
    'Penetration Testing',
    'Dark Web Monitoring',
    'Custom Intelligence Package'
  ];

  const contactMethods = [
    {
      type: 'Secure Email',
      value: 'contactnexveil@proton.me',
      icon: '📧',
      availability: '24/7'
    },
    {
      type: 'Encrypted Channel',
      value: 'Signal: +1-XXX-XXX-XXXX',
      icon: '🔐',
      availability: 'Emergency Only'
    },
    {
      type: 'Operations Center',
      value: 'Available 24/7/365',
      icon: '🏢',
      availability: 'Always Online'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data to send
    const emailParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      urgency: formData.urgency
    };

    try {
      // Send the email using EmailJS
      const response = await emailjs.send(
        'service_id',  // Your EmailJS service ID
        'template_id',  // Your EmailJS template ID
        emailParams,    // The data from the form
        'user_id'       // Your EmailJS user ID
      );
      
      console.log('Email sent successfully', response);

      toast({
        title: "Message Transmitted",
        description: "Your secure message has been received. Expect contact within 24 hours.",
      });

      // Reset the form data
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        urgency: 'standard'
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Message Failed",
        description: "There was an issue transmitting your message. Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="font-mono text-xs border-primary text-primary">
            SECURE_COMMUNICATION_CHANNEL
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-cyber">
            CONTACT_NEXVEIL
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to enhance your intelligence capabilities? Reach out through our secure channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display text-xl text-foreground">
                  SECURE_MESSAGE_FORM
                </CardTitle>
                <CardDescription>
                  All communications are encrypted and processed through secure channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-mono text-sm text-primary">NAME*</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="cyber-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-sm text-primary">EMAIL*</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="secure@yourcompany.com"
                        required
                        className="cyber-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-mono text-sm text-primary">ORGANIZATION</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your organization"
                        className="cyber-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-sm text-primary">SERVICE_INTEREST</label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="w-full h-10 px-3 py-2 bg-background border border-border rounded-sm font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-sm text-primary">URGENCY_LEVEL</label>
                    <div className="flex gap-2">
                      {['standard', 'urgent', 'critical'].map((level) => (
                        <Badge
                          key={level}
                          variant={formData.urgency === level ? 'default' : 'outline'}
                          className="cursor-pointer font-mono"
                          onClick={() => handleInputChange('urgency', level)}
                        >
                          {level.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-sm text-primary">MESSAGE*</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Describe your intelligence or cybersecurity requirements..."
                      rows={6}
                      required
                      className="cyber-border"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="cyber"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                          TRANSMITTING...
                        </>
                      ) : (
                        'SEND_SECURE_MESSAGE'
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display text-lg text-foreground">
                  CONTACT_METHODS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="p-3 border border-primary/20 rounded-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{method.icon}</span>
                      <span className="font-mono text-sm text-primary">{method.type}</span>
                    </div>
                    <div className="text-sm text-foreground">{method.value}</div>
                    <div className="text-xs text-muted-foreground">{method.availability}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display text-lg text-foreground">
                  RESPONSE_TIMES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-muted-foreground">Standard Inquiry</span>
                  <span className="font-mono text-primary">24-48h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-muted-foreground">Urgent Request</span>
                  <span className="font-mono text-primary">4-12h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-muted-foreground">Critical Emergency</span>
                  <span className="font-mono text-primary">&lt;2h</span>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="cyber-border bg-card/30 backdrop-blur-sm">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse-glow"></div>
                  <span className="font-mono text-xs text-cyber-green">SECURE_CONNECTION</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  All communications are encrypted using military-grade protocols. 
                  Your data is protected and handled according to strict confidentiality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;