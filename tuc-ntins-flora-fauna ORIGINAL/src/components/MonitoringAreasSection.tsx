import { MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const MonitoringAreasSection = () => {
  const areas = [
    {
      state: "Tocantins",
      code: "TO",
      description:
        "Monitoramento contínuo em áreas de cerrado e transição amazônica",
    },
    {
      state: "Ceará",
      code: "CE",
      description: "Registro de fauna em áreas de caatinga e transição",
    },
    {
      state: "Roraima",
      code: "RR",
      description:
        "Estudos em floresta amazônica e áreas experimentais do IFRR",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-canopy-blur.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            ÁREAS DE MONITORAMENTO
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="border border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/8 border border-primary/20">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground tracking-tight mb-1">
                    {area.state}
                  </h3>
                  <p className="text-sm text-primary font-bold tracking-widest">
                    {area.code}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonitoringAreasSection;
