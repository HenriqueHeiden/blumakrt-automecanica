import { MapPin, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-secondary/80 backdrop-blur-md border-b border-border/50 py-2 px-4"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Blumenau - SC</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <span>(47) 99930-8960</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span>Seg - Sex: 8h às 18h | Sáb: 8h às 12h</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
