import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/onca-pintada-1.jpg"
          alt="Fauna silvestre brasileira"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 container mx-auto">
        <div className="text-center space-y-6 max-w-5xl">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
              SELVAGEM
            </span>
            <span className="block text-foreground text-5xl md:text-7xl lg:text-8xl mt-2 font-light tracking-wide">
              NATUREZA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto font-light tracking-wide">
            Monitoramento científico da fauna silvestre brasileira em Tocantins,
            Ceará e Roraima
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              onClick={() => navigate("/search")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wider text-base px-8 py-6"
            >
              EXPLORAR ESPÉCIES
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document
                  .getElementById("map-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-primary/50 bg-transparent hover:bg-primary/10 text-foreground font-semibold tracking-wider text-base px-8 py-6"
            >
              VER MAPA
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary/80" />
        </div>
      </div>

      {/* Vertical Text */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <p className="text-xs tracking-[0.3em] text-foreground/60 [writing-mode:vertical-lr] rotate-180 uppercase">
          Explore Mais
        </p>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
