import { Link } from "react-router-dom";
import { 
  Code2, 
  Blocks, 
  Palette, 
  Rocket, 
  Shield, 
  Users,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for performance and scalability.",
    features: [
      "Responsive design for all devices",
      "Performance optimization",
      "SEO-friendly architecture",
      "Progressive Web Apps (PWA)",
    ],
    price: "From $5,000",
  },
  {
    icon: Blocks,
    title: "Web3 Development",
    description: "Decentralized applications and smart contracts that leverage blockchain technology.",
    features: [
      "Smart contract development",
      "DeFi protocol integration",
      "NFT marketplace creation",
      "Token & DAO development",
    ],
    price: "From $8,000",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design system creation",
      "Usability testing",
    ],
    price: "From $3,000",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your goals, requirements, and vision for the project.",
  },
  {
    step: "02",
    title: "Planning",
    description: "I create a detailed roadmap with milestones and deliverables.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your product with regular updates and feedback sessions.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Deployment, testing, and ongoing support for your application.",
  },
];

const additionalServices = [
  { icon: Rocket, title: "MVP Development", description: "Get to market fast with a minimum viable product" },
  { icon: Shield, title: "Security Audits", description: "Comprehensive security review for smart contracts" },
  { icon: Users, title: "Technical Consulting", description: "Strategic advice for your tech decisions" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader
            label="Services"
            title="What I Offer"
            description="End-to-end development services to bring your digital vision to life. From concept to deployment, I've got you covered."
          />

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card/30">
        <div className="container px-6">
          <SectionHeader
            label="Process"
            title="How I Work"
            description="A streamlined process designed to deliver exceptional results efficiently."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-6 rounded-xl glass hover-lift h-full">
                  <span className="text-5xl font-bold text-gradient opacity-50">{item.step}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 text-muted-foreground" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader
            label="More"
            title="Additional Services"
            description="Beyond core development, I offer specialized services to support your project."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                className="p-6 rounded-xl glass hover-lift text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-secondary-foreground" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-card/30">
        <div className="container px-6">
          <SectionHeader
            label="Packages"
            title="Flexible Engagement Models"
            description="Choose the collaboration style that works best for your project."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Project Based */}
            <div className="p-8 rounded-xl glass hover-lift">
              <h3 className="text-xl font-bold text-foreground mb-2">Project Based</h3>
              <p className="text-muted-foreground mb-6">Fixed price for defined scope</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Clear deliverables",
                  "Defined timeline",
                  "Milestone payments",
                  "Post-launch support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-gradient mb-4">From $5,000</p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Monthly Retainer */}
            <div className="p-8 rounded-xl glass hover-lift border-2 border-primary relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Popular
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">Monthly Retainer</h3>
              <p className="text-muted-foreground mb-6">Ongoing development support</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Dedicated hours per month",
                  "Priority support",
                  "Flexible scope",
                  "Regular check-ins",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-gradient mb-4">From $3,000/mo</p>
              <Button className="w-full shadow-glow" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Consulting */}
            <div className="p-8 rounded-xl glass hover-lift">
              <h3 className="text-xl font-bold text-foreground mb-2">Consulting</h3>
              <p className="text-muted-foreground mb-6">Expert advice when you need it</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Architecture review",
                  "Code audit",
                  "Tech strategy",
                  "Team training",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-gradient mb-4">$200/hour</p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Book Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader
            label="FAQ"
            title="Common Questions"
            description="Answers to questions I frequently receive about my services."
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Most projects take 4-12 weeks depending on complexity. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you work with international clients?",
                a: "Absolutely! I work with clients worldwide and am comfortable with different time zones and remote collaboration.",
              },
              {
                q: "What payment methods do you accept?",
                a: "I accept bank transfers, credit cards, and cryptocurrency payments including ETH, USDC, and BTC.",
              },
              {
                q: "Do you provide ongoing support after launch?",
                a: "Yes, all projects include 30 days of post-launch support. Extended support packages are also available.",
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

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your <span className="text-gradient">Project</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss your ideas and find the best solution for your needs.
          </p>
          <Button size="lg" className="shadow-glow" asChild>
            <Link to="/contact">
              Schedule a Call <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
