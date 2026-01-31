import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Wrench, 
  Gauge, 
  Car, 
  Cog, 
  Battery, 
  Thermometer,
  CircleDot,
  Shield
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "MANUTENÇÃO PREVENTIVA",
    description: "Revisões completas para manter seu veículo sempre em perfeito estado e evitar problemas futuros."
  },
  {
    icon: <Gauge className="w-7 h-7" />,
    title: "DIAGNÓSTICO ELETRÔNICO",
    description: "Equipamentos de última geração para identificar problemas com precisão e agilidade."
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: "SUSPENSÃO E FREIOS",
    description: "Serviços especializados em suspensão, freios e sistemas de direção para sua segurança."
  },
  {
    icon: <Cog className="w-7 h-7" />,
    title: "MOTOR E CÂMBIO",
    description: "Reparos complexos em motores e transmissões com peças de qualidade garantida."
  },
  {
    icon: <Battery className="w-7 h-7" />,
    title: "SISTEMA ELÉTRICO",
    description: "Manutenção e reparo completo de toda parte elétrica e eletrônica do veículo."
  },
  {
    icon: <Thermometer className="w-7 h-7" />,
    title: "AR CONDICIONADO",
    description: "Higienização, recarga de gás e manutenção completa do sistema de climatização."
  },
  {
    icon: <CircleDot className="w-7 h-7" />,
    title: "ALINHAMENTO E BALANCEAMENTO",
    description: "Serviço de alinhamento 3D e balanceamento computadorizado para maior durabilidade dos pneus."
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "INJEÇÃO ELETRÔNICA",
    description: "Limpeza e manutenção do sistema de injeção para melhor desempenho e economia."
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 relative overflow-hidden section-gradient">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[200px] pointer-events-none" />
      
      <div className="container px-6">
        {/* Section Header */}
        <div ref={ref} className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Nossos Serviços
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl text-metallic mt-4 mb-6"
          >
            SOLUÇÕES COMPLETAS
            <br />
            <span className="text-primary">PARA SEU VEÍCULO</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Oferecemos uma gama completa de serviços automotivos com profissionais 
            qualificados e equipamentos modernos.
          </motion.p>
        </div>

        {/* Services Grid - Broken Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={index % 2 === 1 ? "lg:translate-y-12" : ""}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
