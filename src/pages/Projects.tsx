import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web3", "Frontend", "Full Stack", "AI/ML"];

const projects = [
  {
    title: "DeFi Dashboard Pro",
    description: "A comprehensive analytics dashboard for tracking DeFi positions, yield farming, and liquidity pools across 10+ blockchain networks with real-time price feeds.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
    tags: ["Web3", "React", "DeFi", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web3",
    featured: true,
  },
  {
    title: "NFT Marketplace",
    description: "A gas-optimized marketplace for trading NFTs with lazy minting, auctions, and collection management features.",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=600&h=400&fit=crop",
    tags: ["Solidity", "Next.js", "IPFS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web3",
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent coding companion that provides real-time suggestions, code reviews, and documentation generation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["AI/ML", "Python", "React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI/ML",
  },
  {
    title: "DAO Governance Portal",
    description: "A complete governance solution for DAOs including proposal creation, voting, and treasury management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Web3", "Governance", "React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web3",
  },
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with headless CMS, payment integration, and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    title: "Real-Time Chat App",
    description: "A feature-rich chat application with end-to-end encryption, file sharing, and video calls.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    tags: ["React", "WebSocket", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    title: "Portfolio Generator",
    description: "A dynamic portfolio builder that creates stunning personal websites from simple templates.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["React", "Tailwind", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
  },
  {
    title: "Token Launchpad",
    description: "A secure platform for launching new tokens with vesting schedules and investor dashboards.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?w=600&h=400&fit=crop",
    tags: ["Solidity", "Web3", "React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web3",
  },
  {
    title: "Design System",
    description: "A comprehensive component library with accessibility features and Figma integration.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["React", "Storybook", "Design"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader
            label="Portfolio"
            title="My Projects"
            description="A collection of projects I've built, from Web3 applications to AI-powered tools. Each project represents my commitment to quality and innovation."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "shadow-glow-sm" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="py-24 bg-card/30">
        <div className="container px-6">
          <SectionHeader
            label="Open Source"
            title="GitHub Contributions"
            description="I actively contribute to open-source projects and maintain several repositories."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Repositories", value: "50+" },
              { label: "Contributions", value: "2,500+" },
              { label: "Stars Earned", value: "1,000+" },
              { label: "Pull Requests", value: "500+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl glass text-center hover-lift"
              >
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-24">
        <div className="container px-6">
          <SectionHeader
            label="Technologies"
            title="Built With Modern Tools"
            description="I use the latest technologies to ensure my projects are fast, secure, and scalable."
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React", "Next.js", "TypeScript", "Solidity", "Hardhat",
              "Ethers.js", "Node.js", "PostgreSQL", "Tailwind CSS",
              "GraphQL", "Docker", "AWS", "Vercel", "IPFS", "The Graph"
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
