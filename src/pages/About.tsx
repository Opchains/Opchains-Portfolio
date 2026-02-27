import { Download, MapPin, Calendar, Coffee, Code2, Blocks, Palette, Brain, Server, Database, Globe, Smartphone } from "lucide-react";
import adeImage from "@/assets/ade.jpg";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Progress } from "@/components/ui/progress";
const timeline = [{
  year: "2023 - Present",
  title: "Senior Web3 Developer",
  company: "Freelance & DAOs",
  description: "Leading development of decentralized applications and smart contracts for various Web3 projects."
}, {
  year: "2021 - 2023",
  title: "Full Stack Developer",
  company: "TechStartup Inc.",
  description: "Built scalable web applications and led the transition to Web3 technologies."
}, {
  year: "2019 - 2021",
  title: "Frontend Developer",
  company: "Digital Agency Co.",
  description: "Created responsive and interactive user interfaces for enterprise clients."
}, {
  year: "2018 - 2019",
  title: "Junior Developer",
  company: "StartupHub",
  description: "Started my journey building web applications with React and Node.js."
}];
const skills = [{
  name: "React / Next.js",
  level: 95,
  category: "frontend"
}, {
  name: "TypeScript",
  level: 90,
  category: "frontend"
}, {
  name: "Solidity",
  level: 85,
  category: "blockchain"
}, {
  name: "Node.js",
  level: 88,
  category: "backend"
}, {
  name: "Smart Contracts",
  level: 82,
  category: "blockchain"
}, {
  name: "UI/UX Design",
  level: 78,
  category: "design"
}, {
  name: "Python",
  level: 75,
  category: "backend"
}, {
  name: "AWS / Cloud",
  level: 72,
  category: "backend"
}];
const techStack = [{
  icon: Code2,
  name: "Frontend",
  items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
}, {
  icon: Server,
  name: "Backend",
  items: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL"]
}, {
  icon: Blocks,
  name: "Blockchain",
  items: ["Solidity", "Ethers.js", "Hardhat", "IPFS", "The Graph"]
}, {
  icon: Brain,
  name: "AI Tools",
  items: ["ChatGPT", "GitHub Copilot", "Cursor", "Midjourney", "v0"]
}];
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-slide-up">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-primary p-1 shadow-glow">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                        <img src={adeImage} alt="Ade" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-muted-foreground font-mono">OPCHAINS</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 p-4 rounded-xl glass animate-float">
                  <Coffee className="text-primary" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 p-4 rounded-xl glass animate-float" style={{
                animationDelay: "1s"
              }}>
                  <Code2 className="text-secondary" size={24} />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="animate-slide-up" style={{
            animationDelay: "0.2s"
          }}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Building the <span className="text-gradient">Decentralized</span> Future
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate web developer and Web3 enthusiast with over 5 years of experience 
                creating innovative digital solutions. I specialize in building decentralized applications, 
                smart contracts, and modern web experiences that push the boundaries of what's possible.
              </p>
              <p className="text-muted-foreground mb-8">
                When I'm not coding, you'll find me exploring new blockchain protocols, contributing 
                to open-source projects, or sharing knowledge with the developer community. I believe 
                in the power of technology to create a more open, transparent, and equitable world.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span>​Lagos, Nigeria   </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} className="text-primary" />
                  <span>5+ Years Experience</span>
                </div>
              </div>
              
              <Button size="lg" className="shadow-glow">
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card/30">
        <div className="container px-6">
          <SectionHeader label="Skills" title="Technical Expertise" description="A comprehensive overview of my technical skills and proficiency levels." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => <div key={skill.name} className="animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader label="Tech Stack" title="Tools & Technologies" description="The technologies and frameworks I use to bring ideas to life." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => <div key={stack.name} className="p-6 rounded-xl glass hover-lift animate-scale-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <stack.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{stack.name}</h3>
                <ul className="space-y-2">
                  {stack.items.map(item => <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-card/30">
        <div className="container px-6">
          <SectionHeader label="Experience" title="My Journey" description="A timeline of my professional experience and career growth." />
          
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            
            {timeline.map((item, index) => <div key={item.year} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="p-6 rounded-xl glass hover-lift animate-fade-in" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                    <span className="text-sm text-primary font-mono">{item.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2">{item.title}</h3>
                    <p className="text-muted-foreground font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
                
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 shadow-glow-sm" />
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader label="Fun Facts" title="Beyond the Code" description="A few things about me outside of programming." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[{
            icon: Coffee,
            label: "Cups of Coffee",
            value: "2,000+",
            suffix: "per year"
          }, {
            icon: Code2,
            label: "Lines of Code",
            value: "500K+",
            suffix: "and counting"
          }, {
            icon: Globe,
            label: "Countries Visited",
            value: "15+",
            suffix: "for conferences"
          }, {
            icon: Smartphone,
            label: "Apps Built",
            value: "100+",
            suffix: "and deployed"
          }].map((fact, index) => <div key={fact.label} className="p-6 rounded-xl glass text-center hover-lift animate-scale-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <fact.icon className="mx-auto mb-4 text-primary" size={32} />
                <p className="text-3xl font-bold text-gradient">{fact.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{fact.suffix}</p>
              </div>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;