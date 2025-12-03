import { NavLink } from "@/components/NavLink";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md border-b border-border/30 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/logo.png"
            alt="Tucãtins Silvestre"
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary tracking-wider">
              TUCÃTINS
            </span>
            <span className="text-xs text-foreground/60 tracking-widest">
              SILVESTRE
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            end
            className="px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-primary/5 rounded tracking-wider uppercase"
            activeClassName="text-primary bg-primary/10"
          >
            Início
          </NavLink>
          <NavLink
            to="/search"
            className="px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-primary/5 rounded tracking-wider uppercase"
            activeClassName="text-primary bg-primary/10"
          >
            Busca
          </NavLink>
          <NavLink
            to="/about"
            className="px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-primary/5 rounded tracking-wider uppercase"
            activeClassName="text-primary bg-primary/10"
          >
            Sobre
          </NavLink>
          <button className="px-3 py-2 text-foreground/90 hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto flex flex-col space-y-2 px-4 py-4">
            <NavLink
              to="/"
              end
              className="px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-primary/5 rounded tracking-wider uppercase"
              activeClassName="text-primary bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </NavLink>
            <NavLink
              to="/search"
              className="px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-primary/5 rounded tracking-wider uppercase"
              activeClassName="text-primary bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Busca
            </NavLink>
            <NavLink
              to="/about"
              className="px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-primary/5 rounded tracking-wider uppercase"
              activeClassName="text-primary bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
