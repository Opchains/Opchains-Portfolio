import { Link } from "react-router-dom";
import { ArrowRight, Code2, Blocks, Sparkles, Globe, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeader } from "@/components/SectionHeader";
import heroBg from "@/assets/hero-bg.jpg";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building beautiful, responsive interfaces with modern frameworks and cutting-edge techniques.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description: "Creating decentralized applications and smart contracts on multiple blockchain networks.",
    technologies: ["Solidity", "Ethers.js", "Hardhat", "IPFS"],
  },
  {
    icon: Sparkles,
    title: "Vibe Coding",
    description: "Transforming ideas into elegant code with a focus on user experience and aesthetic design.",
    technologies: ["UI/UX", "Animation", "Creative Dev", "AI Tools"],
  },
];

const featuredProjects = [
  {
    title: "DeFi Dashboard",
    description: "A comprehensive dashboard for tracking DeFi positions across multiple chains with real-time analytics.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
    tags: ["Web3", "React", "DeFi"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "NFT Marketplace",
    description: "A sleek marketplace for trading digital collectibles with gas-optimized smart contracts.",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=600&h=400&fit=crop",
    tags: ["Solidity", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent coding companion powered by machine learning to boost productivity.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["AI/ML", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const testimonials = [
  {
    quote: "Absolutely incredible work! The Web3 integration was seamless and the UI is stunning. Best developer I've worked with.",
    author: "Sarah Chen",
    role: "Founder",
    company: "CryptoVentures",
  },
  {
    quote: "They turned our complex DeFi concept into a user-friendly platform. The attention to detail is remarkable.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "BlockFi Labs",
  },
  {
    quote: "A true vibe coder! They understood our vision and delivered beyond expectations. Highly recommended.",
    author: "Elena Rodriguez",
    role: "Product Lead",
    company: "MetaDAO",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container relative z-10 px-6 py-20 text-center">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap size={16} /> Available for new projects
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Hi, I'm a </span>
            <span className="text-gradient">Web3 Developer</span>
            <br />
            <span className="text-foreground">& </span>
            <span className="text-gradient-secondary">Vibe Coder</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            I craft innovative digital experiences that blend cutting-edge web technologies 
            with decentralized solutions. Let's build the future of the web together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="shadow-glow" asChild>
              <Link to="/projects">
                View My Work <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Let's Connect</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "5+", label: "Years Experience" },
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "25+", label: "Web3 dApps" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card/30">
        <div className="container px-6">
          <SectionHeader
            label="What I Do"
            title="Skills & Expertise"
            description="Combining technical excellence with creative vision to deliver exceptional digital products."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
            description="A selection of my recent work in web development and blockchain technology."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 bg-card/30">
        <div className="container px-6">
          <SectionHeader
            label="Why Choose Me"
            title="What Sets Me Apart"
            description="I bring a unique combination of technical skills and creative thinking to every project."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Full-Stack Expertise",
                description: "From frontend interfaces to smart contracts, I handle the entire development stack.",
              },
              {
                icon: Rocket,
                title: "Rapid Delivery",
                description: "Efficient workflows and AI-assisted development mean faster time to market.",
              },
              {
                icon: Sparkles,
                title: "Creative Solutions",
                description: "I don't just write code—I craft experiences that users love to interact with.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader
            label="Testimonials"
            title="What Clients Say"
            description="Don't just take my word for it—hear from the people I've worked with."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build Something <span className="text-gradient">Amazing</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Let's collaborate on your next project and create something truly extraordinary together.
          </p>
          <Button size="lg" className="shadow-glow" asChild>
            <Link to="/contact">
              Start a Conversation <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
