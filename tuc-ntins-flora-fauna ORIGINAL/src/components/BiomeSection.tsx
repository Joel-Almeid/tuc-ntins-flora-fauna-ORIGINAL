import { Card, CardContent } from "./ui/card";
import { Leaf, TrendingUp } from "lucide-react";

const BiomeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/70 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/bg-forest-blur.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
            O CERRADO EM NÚMEROS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compreendendo a importância do segundo maior bioma brasileiro
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Cerrado Info Card */}
          <Card className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/8 border border-primary/20 flex-shrink-0">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    23,3%
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    do território nacional ocupado pelo Cerrado
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                O Cerrado é uma das maiores savanas do mundo, conhecida por sua
                flora rica e endêmica, além de ampla diversidade de peixes,
                aves, répteis e anfíbios.
              </p>
              <div className="pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground italic">
                  Fonte: IBGE (2019)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Importance Card */}
          <Card className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/8 border border-secondary/20 flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    Pressão Antrópica
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Impactos intensos do desenvolvimento humano
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Apesar de sua relevância ecológica e biodiversidade, o Cerrado
                sofre intensas pressões de origem antrópica, exigindo ações
                urgentes de conservação e educação ambiental.
              </p>
              <div className="pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground italic">
                  Referência: Klink & Machado (2005)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Aspects */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-lg p-8">
            <h3 className="text-xl font-black text-foreground mb-6 tracking-tight">
              Características Principais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Flora rica e endêmica",
                "Ampla diversidade de peixes",
                "Fauna de aves variada",
                "Répteis e anfíbios diversos",
                "Importante sumidouro de carbono",
                "Recurso hídrico estratégico",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiomeSection;
