# Tucãtins Silvestre - Guia do Projeto

## 📋 Visão Geral

O **Tucãtins Silvestre** é uma plataforma moderna de monitoramento científico da fauna silvestre brasileira, desenvolvida com React, TypeScript e Tailwind CSS. O projeto apresenta dados reais de monitoramento de espécies em Tocantins, Ceará e Roraima.

## 🎨 Design

- **Cores principais**: Verde floresta (primary), azul natural (secondary), laranja terra (accent)
- **Tipografia**: Sistema de fontes padrão otimizado
- **Estilo**: Moderno, limpo, com sombras suaves e animações fluidas
- **Responsividade**: 100% responsivo para todos os dispositivos

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Footer.tsx          # Rodapé institucional
│   ├── Hero.tsx            # Seção hero da home
│   ├── StatsSection.tsx    # Estatísticas do projeto
│   ├── SpeciesGrid.tsx     # Grid de espécies
│   ├── RecentObservations.tsx  # Últimas observações
│   ├── MapSection.tsx      # Mapa interativo (Leaflet)
│   └── ui/                 # Componentes UI (shadcn)
├── pages/
│   ├── Index.tsx           # Página inicial
│   ├── Species.tsx         # Página de detalhes da espécie
│   ├── Search.tsx          # Busca avançada
│   ├── About.tsx           # Sobre o projeto
│   └── NotFound.tsx        # Página 404
├── data/
│   ├── species.json        # Dados das espécies
│   └── records.json        # Registros de avistamentos
└── index.css              # Design system

public/
└── images/
    ├── [especie]-1.jpg    # Imagens das espécies
    └── records/           # Fotos dos registros
        └── [especie]-001.jpg
```

## 🔧 Funcionalidades Implementadas

### ✅ Página Inicial
- Hero section com gradiente
- Estatísticas do projeto (espécies, registros, estados)
- Grid das espécies mais registradas
- Últimas observações
- Mapa interativo com pins de localização

### ✅ Página da Espécie
- Galeria de fotos com modal de zoom
- Player de áudio (estrutura pronta)
- Informações detalhadas (classificação, habitat, conservação)
- Mapa de distribuição da espécie
- Registros recentes com metadados
- Modal de metadados completo (data, local, temperatura, fase da lua, câmera, coordenadas)

### ✅ Busca Avançada
- Filtros implementados:
  - Nome popular
  - Nome científico
  - Estado (TO, CE, RR)
  - Município
  - Data inicial/final
  - Fase da lua
  - Área experimental
  - Câmera
- Resultados em tempo real
- Layout moderno com sidebar de filtros

### ✅ Sobre o Projeto
- Missão e valores
- Metodologia científica
- Áreas de monitoramento

### ✅ Mapa Interativo
- Integração com Leaflet.js
- Pins personalizados em verde
- Popups com miniatura, data e local
- Clique no popup leva para página da espécie

## 🚀 Como Executar

O projeto já está rodando no Lovable. Para desenvolvimento local:

```bash
npm install
npm run dev
```

## 📊 Estrutura de Dados

### Species.json
```json
{
  "id": "caititu",
  "commonName": "Caititu",
  "scientificName": "Dicotyles tajacu",
  "classification": "Mammalia, Artiodactyla, Tayassuidae",
  "description": "...",
  "conservation": "Pouco Preocupante",
  "habitat": "...",
  "images": ["/images/caititu-1.jpg"],
  "audio": "/audio/caititu.mp3"
}
```

### Records.json
```json
{
  "id": "rec001",
  "speciesId": "caititu",
  "commonName": "Caititu",
  "scientificName": "Dicotyles tajacu",
  "area": "IFRR-CNP (01)",
  "state": "RR",
  "municipality": "Cantá",
  "coordinates": { "lat": 2.7809, "lng": -60.6370 },
  "camera": "3",
  "date": "2023-01-14",
  "time": "08:16:40",
  "temperature": "26°C",
  "moonPhase": "Minguante",
  "image": "/images/records/caititu-001.jpg"
}
```

## 🔄 Como Adicionar Novos Registros

1. **Adicione a imagem** em `public/images/records/`
2. **Atualize records.json** com o novo registro
3. Se for uma nova espécie, adicione também em `species.json`
4. As imagens devem estar em `public/` para serem acessíveis

## 🔌 Conectar com API Futura

Os arquivos JSON estão preparados para serem substituídos por chamadas de API:

```typescript
// Substituir:
import recordsData from "@/data/records.json";

// Por:
const { data: recordsData } = await fetch('/api/records');
```

## 🎯 SEO Implementado

- Títulos e meta descriptions otimizados
- Heading hierarchy correta (H1 único por página)
- Alt text em todas as imagens
- URLs semânticas (/species/caititu)
- Open Graph tags

## 🎨 Design System

Todas as cores são definidas no `src/index.css`:
- `--primary`: Verde floresta
- `--secondary`: Azul natural
- `--accent`: Laranja terra
- `--muted`: Tons neutros
- Customizáveis via CSS variables

## 📱 Responsividade

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu hamburger em mobile
- Grid adaptativo

## 🔍 Próximos Passos Sugeridos

1. Adicionar arquivos de áudio reais das espécies
2. Implementar backend com API REST
3. Adicionar autenticação para submissão de registros
4. Implementar sistema de comentários
5. Adicionar gráficos de análise temporal
6. Exportação de dados (CSV, PDF)

## 📞 Suporte

Para dúvidas sobre o código ou estrutura do projeto, consulte a documentação do React, Tailwind CSS ou Leaflet.js.

---

**Desenvolvido com 💚 para preservação da fauna brasileira**
