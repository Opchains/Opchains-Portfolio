import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
}: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-xl glass hover-lift">
      <Quote className="text-primary/50 mb-4" size={32} />
      <p className="text-foreground mb-6 italic">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};
