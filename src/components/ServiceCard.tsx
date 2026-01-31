import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-8 group cursor-pointer"
    >
      {/* Icon Container */}
      <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:red-glow">
        <div className="text-primary transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Hover Indicator */}
      <div className="mt-6 flex items-center gap-2 text-primary opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <span className="text-sm font-medium">Saiba mais</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
