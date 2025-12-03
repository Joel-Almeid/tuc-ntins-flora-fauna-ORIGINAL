import { Database, Camera, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const StatsSection = () => {
  const stats = [
    {
      icon: Database,
      value: "10+",
      label: "Espécies Registradas",
      description: "Mamíferos e aves catalogados",
    },
    {
      icon: Camera,
      value: "500+",
      label: "Registros Fotográficos",
      description: "Capturados por armadilhas",
    },
    {
      icon: MapPin,
      value: "3",
      label: "Estados Monitorados",
      description: "TO, CE e RR",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/70 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/8 border border-primary/20">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-black text-primary tracking-tight">
                      {stat.value}
                    </p>
                    <h3 className="text-lg font-bold text-foreground tracking-wide uppercase">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
