import { Card, CardContent } from "./ui/card";
import { Camera, MapPin, Clock, Microscope, BookOpen } from "lucide-react";

const ResearchMethodologySection = () => {
  const methods = [
    {
      icon: Camera,
      title: "Câmeras Trap",
      description:
        "Armadilhas fotográficas instaladas a 60cm do solo em trilhas e próximas a cursos d'água",
      details: [
        "Operação 24 horas/dia",
        "Duração: 3 semanas",
        "Coleta contínua de dados",
      ],
    },
    {
      icon: MapPin,
      title: "Observação Direta",
      description:
        "Transectos sistemáticos para registro de ocorrência e abundância relativa",
      details: [
        "Observações visuais",
        "Análise de detectabilidade",
        "Registros comportamentais",
      ],
    },
  ];

  const studyAreas = [
    {
      location: "Córrego Sussuapara",
      municipality: "Palmas",
      state: "TO",
      description:
        "Mata ciliar representativa do Cerrado com biodiversidade aquática e terrestre",
    },
    {
      location: "Formoso do Araguaia",
      municipality: "Formoso do Araguaia",
      state: "TO",
      description:
        "Área estratégica para monitoramento de espécies de grande porte e primatas",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
            METODOLOGIA E PESQUISA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Abordagem científica rigorosa para o monitoramento da fauna
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </div>

        {/* Objective */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border border-border/60 bg-card shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/8 border border-primary/20 flex-shrink-0">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground tracking-tight">
                  Objetivo Principal
                </h3>
              </div>
              <p className="text-lg text-foreground/85 leading-relaxed">
                Promover a educação ambiental e a conservação da
                sociobiodiversidade no Tocantins por meio da coleta e divulgação
                de registros audiovisuais da fauna e flora, valorizando a vida
                silvestre e estimulando reflexões éticas sobre a relação entre
                humanos e natureza.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Methods */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-foreground mb-8 text-center tracking-tight">
            Metodologia de Coleta
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/8 border border-primary/20 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-black text-foreground tracking-tight">
                        {method.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                    <ul className="space-y-2">
                      {method.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground/75"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Study Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-foreground mb-8 text-center tracking-tight">
            Áreas de Estudo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {studyAreas.map((area, index) => (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/8 border border-secondary/20 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-foreground tracking-tight">
                        {area.location}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {area.municipality} - {area.state}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed pt-2 border-t border-border/30">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Processing */}
        <div className="max-w-4xl mx-auto">
          <Card className="border border-border/60 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/8 border border-primary/20 flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground tracking-tight">
                  Processamento e Divulgação
                </h3>
              </div>
              <p className="text-foreground/85 leading-relaxed">
                Os registros são cuidadosamente editados e divulgados no perfil
                do projeto no Instagram, acompanhados de informações detalhadas
                sobre características dos animais, importância ecológica,
                ameaças específicas e reflexões ambientais que promovem
                engajamento e conscientização.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* References */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <div className="text-xs text-muted-foreground space-y-1">
            <p>
              <span className="font-semibold">Referências:</span> Tomás &
              Miranda (2004)
            </p>
            <p className="italic">
              Metodologia baseada em protocolos internacionais de pesquisa com
              câmeras trap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchMethodologySection;
