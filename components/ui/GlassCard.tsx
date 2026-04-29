import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div className={`glass p-12 rounded-lg relative overflow-hidden group transition-all ${className}`}>
      {children}
    </div>
  );
};
