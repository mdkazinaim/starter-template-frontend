import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => {
  return (
    <section id={id} className={`py-16 px-12 w-full ${className}`}>
      <div className="w-full max-w-[1400px] mx-auto">
        {children}
      </div>
    </section>
  );
};
