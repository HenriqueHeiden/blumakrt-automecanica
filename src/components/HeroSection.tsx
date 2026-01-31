import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-mechanic.jpg";

const HeroSection = () => {
  const phoneNumber = "5547996718719";
  const message = encodeURIComponent("Olá! Gostaria de agendar um serviço.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="hero-gradient absolute inset-0" />
      
      {/* Red Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] pointer-events-none" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20 mt-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Wrench className="w-4 h-4" />
              Oficina Premium em Blumenau
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-metallic mb-6"
          >
            CUIDAMOS DO
            <br />
            <span className="text-primary">SEU VEÍCULO</span>
            <br />
            COM EXCELÊNCIA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Serviços automotivos de alta qualidade com profissionais especializados. 
            Tecnologia de ponta e compromisso com a satisfação do cliente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-gradient rounded-lg text-primary-foreground font-semibold text-lg transition-all duration-300 red-glow-hover hover:translate-y-[-2px]"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Serviço
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary"
            >
              Ver Serviços
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Role para baixo</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
