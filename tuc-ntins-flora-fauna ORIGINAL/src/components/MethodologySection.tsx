import { Card, CardContent } from "./ui/card";

const MethodologySection = () => {
  const details = [
    "Data e horário da captura",
    "Localização geográfica (GPS)",
    "Condições ambientais (temperatura)",
    "Fase lunar",
    "Identificação da câmera e área experimental",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-cerrado-blur.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-border/60 bg-card shadow-md">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 tracking-tight">
                METODOLOGIA
              </h2>

              <div className="space-y-6 text-foreground/80">
                <p className="leading-relaxed">
                  O monitoramento é realizado através de armadilhas fotográficas
                  (câmeras trap) instaladas em áreas experimentais nos
                  Institutos Federais de Roraima (IFRR) e Tocantins (IFTO), além
                  de outras áreas estratégicas.
                </p>

                <div>
                  <p className="font-semibold mb-3 text-foreground">
                    Cada registro capturado inclui informações detalhadas como:
                  </p>
                  <ul className="space-y-2">
                    {details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Os dados coletados são analisados e disponibilizados para a
                  comunidade científica, contribuindo para pesquisas sobre
                  comportamento animal, padrões de atividade, distribuição
                  geográfica e status de conservação das espécies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
