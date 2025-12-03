import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  ArrowLeft,
  Download,
  Play,
  Pause,
  MapPin,
  Calendar,
  Thermometer,
  Camera,
  Moon,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import speciesData from "@/data/species.json";
import recordsData from "@/data/records.json";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Species = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [species, setSpecies] = useState<any>(null);
  const [records, setRecords] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const foundSpecies = speciesData.find((s) => s.id === id);
    if (foundSpecies) {
      setSpecies(foundSpecies);
      const speciesRecords = recordsData.filter((r) => r.speciesId === id);
      setRecords(speciesRecords);
    }
  }, [id]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current || records.length === 0)
      return;

    const validRecords = records.filter((r) => r.coordinates);
    if (validRecords.length === 0) return;

    const bounds = L.latLngBounds(
      validRecords.map((r) => [r.coordinates.lat, r.coordinates.lng])
    );
    const map = L.map(mapRef.current).fitBounds(bounds, { padding: [50, 50] });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 18,
    }).addTo(map);

    const wildlifeIcon = L.icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    validRecords.forEach((record) => {
      const marker = L.marker(
        [record.coordinates.lat, record.coordinates.lng],
        {
          icon: wildlifeIcon,
        }
      ).addTo(map);

      marker.bindPopup(`
        <div class="p-2">
          <img src="${record.image}" alt="${record.commonName}" 
            class="w-full h-24 object-cover rounded mb-2"
            onerror="this.src='/placeholder.svg'"
          />
          <p class="text-xs"><strong>Data:</strong> ${new Date(
            record.date
          ).toLocaleDateString("pt-BR")}</p>
          <p class="text-xs"><strong>Local:</strong> ${record.municipality}, ${
        record.state
      }</p>
        </div>
      `);
    });

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [records]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!species) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg text-muted-foreground">
            Espécie não encontrada
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-12">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white">
                  {species.conservation}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {species.commonName}
                </h1>
                <p className="text-2xl italic text-white/90">
                  {species.scientificName}
                </p>
                <p className="text-lg text-white/80">
                  {species.classification}
                </p>
              </div>

              <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={species.images[0] || "/placeholder.svg"}
                  alt={species.commonName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 space-y-12">
          {/* Description */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Sobre a Espécie
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {species.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Habitat
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {species.habitat}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Status de Conservação
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {species.conservation}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gallery */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Galeria de Fotos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {species.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${species.commonName} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Video Gallery */}
          {species.videos && species.videos.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Vídeos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {species.videos.map((video: string, index: number) => (
                  <Card
                    key={index}
                    className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative h-48 bg-black flex items-center justify-center group">
                      <video
                        src={video}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLVideoElement).poster =
                            "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <Video className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Vídeo {index + 1}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Audio Player */}
          {species.audio && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Áudio da Espécie
                </h2>
                <div className="flex items-center gap-4">
                  <Button
                    size="lg"
                    onClick={toggleAudio}
                    className="w-16 h-16 rounded-full"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                  <div className="flex-1">
                    <audio
                      ref={audioRef}
                      src={species.audio}
                      onEnded={() => setIsPlaying(false)}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Clique para reproduzir o som característico da espécie
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Distribution Map */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Mapa de Distribuição
            </h2>
            <div className="rounded-xl overflow-hidden shadow-xl border">
              <div ref={mapRef} className="h-[400px] w-full" />
            </div>
          </div>

          {/* Recent Records */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Registros Recentes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {records.map((record) => (
                <Card
                  key={record.id}
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedRecord(record)}
                >
                  <div className="relative h-48">
                    <img
                      src={record.image || "/placeholder.svg"}
                      alt={record.commonName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(record.date).toLocaleDateString("pt-BR")}{" "}
                        {record.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {record.municipality}, {record.state}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Thermometer className="h-4 w-4" />
                      <span>{record.temperature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogTitle className="sr-only">Visualização de imagem</DialogTitle>
          <div className="relative">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt={species.commonName}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <Button
              className="absolute top-4 right-4"
              size="icon"
              variant="secondary"
              onClick={() => {
                if (selectedImage) {
                  const link = document.createElement("a");
                  link.href = selectedImage;
                  link.download = `${species.commonName}.jpg`;
                  link.click();
                }
              }}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Record Metadata Modal */}
      <Dialog
        open={!!selectedRecord}
        onOpenChange={() => setSelectedRecord(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogTitle className="text-2xl font-bold">
            {selectedRecord?.commonName}
          </DialogTitle>
          <div className="space-y-6">
            <img
              src={selectedRecord?.image || "/placeholder.svg"}
              alt={selectedRecord?.commonName}
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>
                    <strong>Data:</strong>{" "}
                    {selectedRecord &&
                      new Date(selectedRecord.date).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>
                    <strong>Local:</strong> {selectedRecord?.municipality},{" "}
                    {selectedRecord?.state}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Camera className="h-4 w-4 text-muted-foreground" />
                  <span>
                    <strong>Câmera:</strong> {selectedRecord?.camera}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Thermometer className="h-4 w-4 text-muted-foreground" />
                  <span>
                    <strong>Temperatura:</strong> {selectedRecord?.temperature}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Moon className="h-4 w-4 text-muted-foreground" />
                  <span>
                    <strong>Fase da lua:</strong> {selectedRecord?.moonPhase}
                  </span>
                </div>
                <p className="text-sm">
                  <strong>Área:</strong> {selectedRecord?.area}
                </p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm italic text-muted-foreground">
                {selectedRecord?.scientificName}
              </p>
              {selectedRecord?.coordinates && (
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Coordenadas:</strong>{" "}
                  {selectedRecord.coordinates.lat.toFixed(4)},{" "}
                  {selectedRecord.coordinates.lng.toFixed(4)}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogTitle className="sr-only">Visualização de vídeo</DialogTitle>
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video
              src={selectedVideo || ""}
              controls
              autoPlay
              className="w-full h-auto"
              onError={(e) => {
                console.error("Erro ao carregar vídeo:", e);
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Species;
