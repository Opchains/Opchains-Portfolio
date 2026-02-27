interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader = ({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={`space-y-4 mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
};
