import { Leaf, Microscope, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ValuesSection = () => {
  const values = [
    {
      icon: Leaf,
      title: "Conservação",
      description:
        "Dedicados à preservação da biodiversidade brasileira através de dados científicos",
      color: "text-secondary",
    },
    {
      icon: Microscope,
      title: "Ciência",
      description:
        "Metodologia rigorosa e tecnologia de ponta para coleta de dados confiáveis",
      color: "text-accent",
    },
    {
      icon: Users,
      title: "Colaboração",
      description:
        "Parceria entre instituições de pesquisa e comunidades locais",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-forest-blur.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            NOSSOS VALORES
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/8 border border-primary/20">
                    <Icon className={`h-10 w-10 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-wide uppercase">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
