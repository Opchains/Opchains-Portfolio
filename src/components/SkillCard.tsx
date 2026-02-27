import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
}

export const SkillCard = ({ icon: Icon, title, description, technologies }: SkillCardProps) => {
  return (
    <div className="group p-6 rounded-xl glass hover-lift cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
        <Icon className="text-primary-foreground" size={24} />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
