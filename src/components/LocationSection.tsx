import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const googleMapsUrl = "https://www.google.com/maps/search/oficina+mecanica+blumenau+sc";

  return (
    <section className="py-24 relative overflow-hidden section-gradient">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[200px] pointer-events-none" />

      <div className="container px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Stylized Map Container */}
            <div className="glass-card p-2 rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                {/* Dark styled map iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113975.28231812654!2d-49.12755295!3d-26.91944165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18dfb87c8ea5%3A0xa51219332bfa2aab!2sBlumenau%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1706000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Map Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative"
                  >
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center red-glow">
                      <MapPin className="w-6 h-6 text-primary-foreground" fill="currentColor" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass-card p-6 max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Fácil acesso</span>
                  <p className="font-semibold">Estacionamento gratuito</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              Localização
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl text-metallic mt-4 mb-6"
            >
              VENHA NOS
              <br />
              <span className="text-primary">VISITAR</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Blumenau - Santa Catarina
                      <br />
                      Região Central - Fácil Acesso
                    </p>
                  </div>
                </div>
              </div>

              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-3 px-6 py-4 glass-card rounded-lg font-medium transition-all duration-300 hover:bg-secondary group"
              >
                <ExternalLink className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1" />
                <span>Abrir no Google Maps</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
