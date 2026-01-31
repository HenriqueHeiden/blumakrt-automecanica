import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phoneNumber = "5547996718719";
  const message = encodeURIComponent("Olá! Gostaria de agendar um serviço.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[200px] pointer-events-none animate-pulse" />

      <div className="container px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Atendimento Rápido
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl text-metallic mb-6"
          >
            PRONTO PARA
            <br />
            <span className="text-primary">CUIDAR DO SEU CARRO?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            Entre em contato agora mesmo pelo WhatsApp e agende seu serviço. 
            Atendimento personalizado e orçamento sem compromisso!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-red-gradient rounded-xl text-primary-foreground font-bold text-xl transition-all duration-300 red-glow-hover hover:translate-y-[-3px]"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-sm mt-6"
          >
            (47) 99671-8719 • Resposta rápida
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
