import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import speciesData from "@/data/species.json";

const SpeciesGrid = () => {
  const navigate = useNavigate();
  const topSpecies = speciesData.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-forest-blur.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
            ESPÉCIES REGISTRADAS
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSpecies.map((species) => (
            <Card
              key={species.id}
              className="group overflow-hidden cursor-pointer border border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-lg transition-all duration-500"
              onClick={() => navigate(`/species/${species.id}`)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={species.images[0] || "/placeholder.svg"}
                  alt={species.commonName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="absolute top-3 right-3">
                  <Badge
                    className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                      species.conservation === "LC"
                        ? "bg-secondary/90"
                        : species.conservation === "VU"
                        ? "bg-accent/90"
                        : species.conservation === "EN"
                        ? "bg-orange-500/90"
                        : "bg-destructive/90"
                    } text-foreground backdrop-blur-sm`}
                  >
                    {species.conservation}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-black text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {species.commonName}
                </h3>
                <p className="text-sm text-muted-foreground italic mb-3 font-light">
                  {species.scientificName}
                </p>
                <p className="text-sm text-foreground/80 line-clamp-2">
                  {species.description}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <span className="text-sm font-bold text-primary group-hover:underline tracking-wide uppercase">
                  Ver detalhes →
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeciesGrid;
