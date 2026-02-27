import { useState } from "react";
import { Mail, MapPin, Clock, Github, Twitter, Linkedin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "adekunleademole094@gmail.com",
    link: "mailto:adekunleademole094@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria",
    link: null,
  },
  {
    icon: Clock,
    title: "Timezone",
    value: "PST (UTC-8)",
    link: null,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formspree endpoint; override via environment variable for security
  // Add `VITE_FORMSPREE_ENDPOINT` to your .env file during development or deployment
  const FORMSPREE_ENDPOINT =
    import.meta.env.VITE_FORMSPREE_ENDPOINT ||
    "https://formspree.io/f/xojnbjle"; // fallback to real form ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader
            label="Contact"
            title="Let's Work Together"
            description="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="p-8 rounded-2xl glass">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <MessageSquare className="text-primary" size={24} />
                  Send a Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {/* Contact Details */}
              <div className="p-8 rounded-2xl glass">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                        <info.icon className="text-primary-foreground" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 rounded-2xl glass">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Connect on Social
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-muted hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-all duration-300 hover-lift"
                      aria-label={social.label}
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  Follow me for updates on Web3, development tips, and more.
                </p>
              </div>

              {/* Availability */}
              <div className="p-8 rounded-2xl bg-gradient-primary text-primary-foreground">
                <h3 className="text-xl font-semibold mb-4">
                  Currently Available
                </h3>
                <p className="opacity-90 mb-4">
                  I'm open to new projects and collaborations. Let's create something amazing together!
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm">Accepting new clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card/30">
        <div className="container px-6">
          <SectionHeader
            label="FAQ"
            title="Before You Reach Out"
            description="Here are some quick answers to common questions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What's your typical response time?",
                a: "I aim to respond to all inquiries within 24 hours during business days.",
              },
              {
                q: "Do you take on small projects?",
                a: "Yes! I'm happy to work on projects of all sizes, from quick fixes to large applications.",
              },
              {
                q: "Are you available for calls?",
                a: "Absolutely. I offer free 30-minute discovery calls to discuss your project.",
              },
              {
                q: "Do you work with startups?",
                a: "Yes, I love working with startups! I offer flexible engagement models to fit different budgets.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl glass animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
