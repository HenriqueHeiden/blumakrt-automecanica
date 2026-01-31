import { Wrench } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display text-2xl tracking-wide">AUTO MECÂNICA</span>
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Auto Mecânica Premium. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Blumenau - SC | (47) 99671-8719
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
