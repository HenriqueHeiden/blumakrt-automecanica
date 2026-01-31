import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar, Phone } from "lucide-react";

const schedule = [
  { day: "Segunda-feira", hours: "08:00 - 18:00" },
  { day: "Terça-feira", hours: "08:00 - 18:00" },
  { day: "Quarta-feira", hours: "08:00 - 18:00" },
  { day: "Quinta-feira", hours: "08:00 - 18:00" },
  { day: "Sexta-feira", hours: "08:00 - 18:00" },
  { day: "Sábado", hours: "08:00 - 12:00" },
  { day: "Domingo", hours: "Fechado" },
];

const HoursSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 metallic-texture" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[150px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              Horário de Funcionamento
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl text-metallic mt-4 mb-6"
            >
              ESTAMOS PRONTOS
              <br />
              <span className="text-primary">PARA ATENDÊ-LO</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Funcionamos durante toda a semana para garantir que seu veículo 
              receba a atenção necessária no momento mais conveniente para você.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="glass-card px-6 py-4 flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground block">Telefone</span>
                  <span className="font-semibold">(47) 99671-8719</span>
                </div>
              </div>
              <div className="glass-card px-6 py-4 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground block">Atendimento</span>
                  <span className="font-semibold">Seg a Sáb</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Schedule Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl">HORÁRIOS</h3>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                    index === todayIndex 
                      ? "bg-primary/10 border border-primary/30" 
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <span className={`font-medium ${index === todayIndex ? "text-primary" : ""}`}>
                    {item.day}
                    {index === todayIndex && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        Hoje
                      </span>
                    )}
                  </span>
                  <span className={`${item.hours === "Fechado" ? "text-muted-foreground" : "text-chrome"}`}>
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
