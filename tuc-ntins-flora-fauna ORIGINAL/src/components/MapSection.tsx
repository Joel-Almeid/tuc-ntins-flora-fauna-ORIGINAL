import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import recordsData from "@/data/records.json";

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Brazil's north region
    const map = L.map(mapRef.current).setView([-7.0, -52.0], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    // Custom icon for wildlife sightings
    const wildlifeIcon = L.icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    // Add markers for each record
    recordsData.forEach((record) => {
      if (record.coordinates) {
        const marker = L.marker([record.coordinates.lat, record.coordinates.lng], {
          icon: wildlifeIcon,
        }).addTo(map);

        const popupContent = `
          <div class="p-2 space-y-2 min-w-[200px]">
            <img src="${record.image}" alt="${record.commonName}" 
              class="w-full h-32 object-cover rounded"
              onerror="this.src='/placeholder.svg'"
            />
            <div>
              <h3 class="font-semibold text-sm">${record.commonName}</h3>
              <p class="text-xs italic text-gray-600">${record.scientificName}</p>
            </div>
            <div class="text-xs space-y-1">
              <p><strong>Data:</strong> ${new Date(record.date).toLocaleDateString("pt-BR")}</p>
              <p><strong>Local:</strong> ${record.municipality}, ${record.state}</p>
              <p><strong>Área:</strong> ${record.area}</p>
            </div>
            <a href="/species/${record.speciesId}" 
              class="text-xs text-primary hover:underline block"
              onclick="event.preventDefault(); window.location.href='/species/${record.speciesId}'">
              Ver mais detalhes →
            </a>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 250,
        });
      }
    });

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="map-section" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mapa de Distribuição
          </h2>
          <p className="text-lg text-muted-foreground">
            Localização dos registros nos estados de Tocantins, Ceará e Roraima
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl border">
          <div ref={mapRef} className="h-[500px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
