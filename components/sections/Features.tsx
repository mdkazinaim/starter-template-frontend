import { Layers, Zap, Shield, Code2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

const features = [
  {
    title: "Architectural Purity",
    description: "Strict adherence to the Container-Component pattern, ensuring a clean separation between complex business logic and presentational UI.",
    icon: Layers,
    color: "text-text-brand-primary",
    glow: "neon-glow-indigo",
    span: "md:col-span-2",
    bgGlow: "bg-text-brand-primary/5 group-hover:bg-text-brand-primary/10",
  },
  {
    title: "Generator Core",
    description: "Define your routes once. Our generator handles menus, breadcrumbs, and layout mapping automatically.",
    icon: Code2,
    color: "text-text-brand-secondary",
    glow: "neon-glow-cyan",
    span: "md:col-span-1",
  },
  {
    title: "Intelligence First",
    description: "Integrated RTK Query with automated tag-based cache invalidation for a fluid, data-driven experience.",
    icon: Zap,
    color: "text-tertiary",
    glow: "",
    span: "md:col-span-1",
  },
  {
    title: "Midnight Protocol",
    description: "Built-in support for high-fidelity glassmorphism, neon accents, and deep-space typography right out of the box.",
    icon: Shield,
    color: "text-text-brand-secondary",
    glow: "neon-glow-cyan",
    span: "md:col-span-2",
  },
];

export const Features = ({ id }: { id?: string }) => {
  return (
    <Section id={id}>
      <div className="mb-20 text-center">
        <h2 className="h1 text-text-primary-text mb-4">Engineered Excellence</h2>
        <p className="p text-text-secondary-text md:w-1/2 mx-auto">
          A suite of meticulously crafted features designed to accelerate your development without compromising on structural integrity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <GlassCard key={index} className={`${feature.span} group relative overflow-hidden`}>
            <div className="relative z-10">
              <feature.icon className={`w-12 h-12 ${feature.color} ${feature.glow} mb-8 transition-transform duration-500 group-hover:scale-110`} />
              <h3 className="h3 text-text-primary-text mb-4">{feature.title}</h3>
              <p className="p text-text-secondary-text">{feature.description}</p>
            </div>
            {feature.bgGlow && (
              <div className={`absolute bottom-[-10%] right-[-10%] w-80 h-80 rounded-full blur-3xl transition-all duration-700 ${feature.bgGlow}`}></div>
            )}

            {/* Corner Accent */}
            <div className={`absolute top-0 right-0 w-1 h-0 group-hover:h-full transition-all duration-700 ${feature.color.replace('text-', 'bg-')}/30`} />
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
