import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background/80 to-background border-t border-border/60 mt-auto shadow-lg">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Tucãtins Silvestre"
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary tracking-wider">
                  TUCANTINS
                </span>
                <span className="text-xs text-foreground/60 tracking-widest">
                  SILVESTRE
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Monitoramento científico da fauna silvestre brasileira através de
              armadilhas fotográficas.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-foreground tracking-widest uppercase">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                Início
              </Link>
              <Link
                to="/search"
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                Busca Avançada
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                Sobre o Projeto
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-foreground tracking-widest uppercase">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary/70" />
                <span>Tocantins, Ceará e Roraima</span>
              </p>
              <p className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary/70" />
                <span>contato@tucantinssilvestre.org.br</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Tucãtins Silvestre. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
