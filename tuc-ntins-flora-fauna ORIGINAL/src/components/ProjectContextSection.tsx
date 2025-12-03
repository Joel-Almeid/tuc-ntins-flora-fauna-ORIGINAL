import { Card, CardContent } from "./ui/card";
import { Lightbulb, Users, BookOpen, Zap } from "lucide-react";

const ProjectContextSection = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Educação Ambiental",
      description:
        "Divulgação de registros audiovisuais para sensibilizar e educar sobre a fauna silvestre",
      color: "text-accent",
    },
    {
      icon: Lightbulb,
      title: "Responsabilidade Ética",
      description:
        "Estimular reflexão sobre a relação entre humanos e natureza",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Conservação Comunitária",
      description:
        "Promover a conservação da sociobiodiversidade com envolvimento local",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Tecnologia e Inovação",
      description:
        "Integrar metodologias científicas com perspectiva transdisciplinar",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
            O PROJETO TUCÃTINS SILVESTRE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma iniciativa integrada de ciência, tecnologia e educação para a
            conservação
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border border-border/60 bg-gradient-to-br from-card to-card/50 shadow-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-foreground/85 leading-relaxed mb-4">
                Diante das pressões ambientais e da importância do Cerrado, o
                projeto{" "}
                <span className="font-bold text-primary">
                  Tucãtins Silvestre
                </span>
                buscou estimular a responsabilidade e ética ambiental,
                promovendo a conservação da sociobiodiversidade e educação
                ambiental por meio de registros audiovisuais.
              </p>
              <p className="text-lg text-foreground/85 leading-relaxed">
                Baseado na pesquisa-ação, o projeto articulou ciências humanas,
                naturais e tecnologias numa perspectiva transdisciplinar,
                gerando conhecimento científico com impacto social e ambiental.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Four Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/8 border border-primary/20 flex-shrink-0">
                      <Icon className={`h-7 w-7 ${pillar.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-foreground tracking-tight mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Research Reference */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-lg p-6">
            <p className="text-sm text-muted-foreground italic text-center">
              <span className="font-semibold text-foreground">
                Referência Teórica:
              </span>{" "}
              Baseado na obra "O Princípio Responsabilidade" de Jonas (2006),
              que aborda a ética ambiental e a responsabilidade com as futuras
              gerações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContextSection;
