import { useState } from "react";
import { Search as SearchIcon, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import recordsData from "@/data/records.json";
import speciesData from "@/data/species.json";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    commonName: "",
    scientificName: "",
    state: "",
    municipality: "",
    dateStart: "",
    dateEnd: "",
    moonPhase: "",
    tempMin: "",
    tempMax: "",
    area: "",
    camera: "",
  });

  const [results, setResults] = useState(recordsData);

  const handleSearch = () => {
    let filtered = [...recordsData];

    if (filters.commonName) {
      filtered = filtered.filter((r) =>
        r.commonName.toLowerCase().includes(filters.commonName.toLowerCase())
      );
    }

    if (filters.scientificName) {
      filtered = filtered.filter((r) =>
        r.scientificName
          .toLowerCase()
          .includes(filters.scientificName.toLowerCase())
      );
    }

    if (filters.state) {
      filtered = filtered.filter((r) => r.state === filters.state);
    }

    if (filters.municipality) {
      filtered = filtered.filter((r) =>
        r.municipality
          .toLowerCase()
          .includes(filters.municipality.toLowerCase())
      );
    }

    if (filters.dateStart) {
      filtered = filtered.filter((r) => r.date >= filters.dateStart);
    }

    if (filters.dateEnd) {
      filtered = filtered.filter((r) => r.date <= filters.dateEnd);
    }

    if (filters.moonPhase) {
      filtered = filtered.filter((r) => r.moonPhase === filters.moonPhase);
    }

    if (filters.area) {
      filtered = filtered.filter((r) =>
        r.area.toLowerCase().includes(filters.area.toLowerCase())
      );
    }

    if (filters.camera) {
      filtered = filtered.filter((r) => r.camera === filters.camera);
    }

    setResults(filtered);
  };

  const handleReset = () => {
    setFilters({
      commonName: "",
      scientificName: "",
      state: "",
      municipality: "",
      dateStart: "",
      dateEnd: "",
      moonPhase: "",
      tempMin: "",
      tempMax: "",
      area: "",
      camera: "",
    });
    setResults(recordsData);
  };

  // Remove duplicatas, mantendo apenas a primeira ocorrência de cada espécie
  const getUniqueSpecies = (records: typeof recordsData) => {
    const seen = new Set<string>();
    return records.filter((record) => {
      if (seen.has(record.speciesId)) {
        return false;
      }
      seen.add(record.speciesId);
      return true;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Busca Avançada
            </h1>
            <p className="text-xl text-white/90">
              Encontre registros específicos usando múltiplos filtros
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">
                      Filtros
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="commonName">Nome Popular</Label>
                      <Input
                        id="commonName"
                        placeholder="Ex: Caititu"
                        value={filters.commonName}
                        onChange={(e) =>
                          setFilters({ ...filters, commonName: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="scientificName">Nome Científico</Label>
                      <Input
                        id="scientificName"
                        placeholder="Ex: Dicotyles tajacu"
                        value={filters.scientificName}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            scientificName: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="state">Estado</Label>
                      <Select
                        value={filters.state}
                        onValueChange={(value) =>
                          setFilters({ ...filters, state: value })
                        }
                      >
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="TO">Tocantins</SelectItem>
                          <SelectItem value="CE">Ceará</SelectItem>
                          <SelectItem value="RR">Roraima</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="municipality">Município</Label>
                      <Input
                        id="municipality"
                        placeholder="Ex: Cantá"
                        value={filters.municipality}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            municipality: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="dateStart">Data Inicial</Label>
                      <Input
                        id="dateStart"
                        type="date"
                        value={filters.dateStart}
                        onChange={(e) =>
                          setFilters({ ...filters, dateStart: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="dateEnd">Data Final</Label>
                      <Input
                        id="dateEnd"
                        type="date"
                        value={filters.dateEnd}
                        onChange={(e) =>
                          setFilters({ ...filters, dateEnd: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="moonPhase">Fase da Lua</Label>
                      <Select
                        value={filters.moonPhase}
                        onValueChange={(value) =>
                          setFilters({ ...filters, moonPhase: value })
                        }
                      >
                        <SelectTrigger id="moonPhase">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nova">Nova</SelectItem>
                          <SelectItem value="Crescente">Crescente</SelectItem>
                          <SelectItem value="Cheia">Cheia</SelectItem>
                          <SelectItem value="Minguante">Minguante</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="area">Área Experimental</Label>
                      <Input
                        id="area"
                        placeholder="Ex: IFRR-CNP"
                        value={filters.area}
                        onChange={(e) =>
                          setFilters({ ...filters, area: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="camera">Câmera</Label>
                      <Input
                        id="camera"
                        placeholder="Ex: 1"
                        value={filters.camera}
                        onChange={(e) =>
                          setFilters({ ...filters, camera: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button onClick={handleSearch} className="w-full">
                      <SearchIcon className="mr-2 h-4 w-4" />
                      Buscar
                    </Button>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="w-full"
                    >
                      Limpar Filtros
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                  Resultados ({getUniqueSpecies(results).length})
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getUniqueSpecies(results).map((record) => (
                  <Card
                    key={record.id}
                    className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                    onClick={() => navigate(`/species/${record.speciesId}`)}
                  >
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={record.image || "/placeholder.svg"}
                        alt={record.commonName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/placeholder.svg";
                        }}
                      />
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {record.commonName}
                        </h3>
                        <p className="text-xs italic text-muted-foreground">
                          {record.scientificName}
                        </p>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>
                          <strong>Data:</strong>{" "}
                          {new Date(record.date).toLocaleDateString("pt-BR")}
                        </p>
                        <p>
                          <strong>Local:</strong> {record.municipality},{" "}
                          {record.state}
                        </p>
                        <p>
                          <strong>Temperatura:</strong> {record.temperature}
                        </p>
                        <p>
                          <strong>Fase da lua:</strong> {record.moonPhase}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {results.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-lg text-muted-foreground">
                      Nenhum resultado encontrado com os filtros selecionados
                    </p>
                  </CardContent>
                </Card>
              )}

              {results.length > 0 && getUniqueSpecies(results).length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-lg text-muted-foreground">
                      Nenhum resultado encontrado com os filtros selecionados
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
