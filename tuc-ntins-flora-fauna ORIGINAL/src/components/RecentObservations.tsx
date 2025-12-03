import { Calendar, MapPin, Thermometer } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import recordsData from "@/data/records.json";
import { useNavigate } from "react-router-dom";

const RecentObservations = () => {
  const navigate = useNavigate();
  const recentRecords = recordsData.slice(0, 8);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
            REGISTROS RECENTES
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentRecords.map((record) => (
            <Card
              key={record.id}
              className="group overflow-hidden cursor-pointer border border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-500"
              onClick={() => navigate(`/species/${record.speciesId}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={record.image || "/placeholder.svg"}
                  alt={record.commonName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <CardContent className="p-5">
                <h3 className="font-black text-foreground mb-1 group-hover:text-primary transition-colors tracking-tight">
                  {record.commonName}
                </h3>
                <p className="text-xs text-muted-foreground italic mb-3 font-light">
                  {record.scientificName}
                </p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-primary/70" />
                    <span>
                      {new Date(record.date).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary/70" />
                    <span className="line-clamp-1">
                      {record.municipality}, {record.state}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Thermometer className="h-3.5 w-3.5 text-primary/70" />
                    <span>{record.temperature}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentObservations;
