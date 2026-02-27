import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  price,
}: ServiceCardProps) => {
  return (
    <div className="p-8 rounded-xl glass hover-lift group">
      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
        <Icon className="text-primary-foreground" size={28} />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>
      
      {price && (
        <p className="text-2xl font-bold text-gradient mb-6">{price}</p>
      )}
      
      <Button variant="outline" className="w-full" asChild>
        <Link to="/contact">Get Started</Link>
      </Button>
    </div>
  );
};
