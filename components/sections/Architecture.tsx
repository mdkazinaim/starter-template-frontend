"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { CodeShowcase } from "./CodeShowcase";

export const Architecture = ({ id }: { id?: string }) => {
  return (
    <Section id={id} className="text-center !py-2">
      <h2 className="h1 text-text-primary-text mb-2">The Architecture of Excellence</h2>

      {/* Visual Framework Showcase (Protected) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full p-0 rounded-lg border-white/10 relative overflow-hidden"
      >
        <img
          src="/ChatGPT Image Apr 29, 2026, 01_03_11 PM.png"
          alt="Framework Showcase"
          draggable={false}
          className="w-full h-[700px] object-cover rounded-md select-none pointer-events-none unselectable "
        />
        {/* Subtle Overlay to prevent right-click/save context (optional but helps) */}
        <div className="absolute inset-0 z-10 bg-transparent" />
      </motion.div>

      {/* Technical Code Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-2 w-full"
      >
        <CodeShowcase />
      </motion.div>

    </Section>
  );
};
