import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  children: ReactNode;
}

export const Button = ({ variant = "primary", children, className = "", ...props }: ButtonProps) => {
  const variants = {
    primary: "bg-bg-brand-primary text-text-primary-text hover:bg-opacity-90 pulse-glow",
    secondary: "bg-text-primary-text text-bg-primary-bg hover:scale-105 pulse-glow",
    glass: "glass text-text-primary-text hover:bg-white/10",
    outline: "border border-white/10 text-text-muted-text hover:text-text-primary-text",
  };

  return (
    <button
      className={`px-6 py-3 rounded-md h6 tracking-widest transition-all active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
