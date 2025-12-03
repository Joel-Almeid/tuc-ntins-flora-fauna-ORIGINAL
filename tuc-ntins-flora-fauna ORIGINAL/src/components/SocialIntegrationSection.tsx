import { Card, CardContent } from "./ui/card";
import { Instagram, Facebook, Youtube, Share2 } from "lucide-react";
import { Button } from "./ui/button";

const SocialIntegrationSection = () => {
  const socialLinks = [
    {
      platform: "Instagram",
      icon: Instagram,
      handle: "@selvagemnatureza",
      url: "https://instagram.com/selvagemnatureza",
      description: "Registros diários da fauna",
      followers: "2.5K+",
    },
    {
      platform: "Facebook",
      icon: Facebook,
      handle: "Selvagem Natureza",
      url: "https://facebook.com/selvagemnatureza",
      description: "Conteúdo e notícias",
      followers: "1.2K+",
    },
    {
      platform: "YouTube",
      icon: Youtube,
      handle: "@selvagemnatureza",
      url: "https://youtube.com/@selvagemnatureza",
      description: "Vídeos educativos",
      followers: "800+",
    },
  ];

  const recentPosts = [
    {
      title: "Jaguar Avistado!",
      description: "Primeira vez registrada na área de Palmas",
      image: "https://via.placeholder.com/200x200?text=Jaguar",
      likes: 342,
    },
    {
      title: "Tamanduá-bandeira",
      description: "Comportamento de forrageamento capturado",
      image: "https://via.placeholder.com/200x200?text=Tamanduá",
      likes: 287,
    },
    {
      title: "Primatas em Ação",
      description: "Grupo de saguis em interação social",
      image: "https://via.placeholder.com/200x200?text=Primatas",
      likes: 456,
    },
    {
      title: "Pássaro Raro",
      description: "Harpia capturada em Roraima",
      image: "https://via.placeholder.com/200x200?text=Harpia",
      likes: 523,
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
            ACOMPANHE NAS REDES SOCIAIS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo exclusivo, dicas de conservação e os melhores registros da
            fauna silvestre
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/8 border border-primary/20 group-hover:bg-primary/12 transition-all">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground text-lg">
                        {social.platform}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {social.followers}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {social.description}
                  </p>

                  <div className="bg-primary/5 border border-primary/10 rounded p-3">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      {social.handle}
                    </p>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Seguir <Share2 className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Posts */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-black text-foreground mb-8 text-center tracking-tight">
            Últimas Postagens
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentPosts.map((post, index) => (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-3 w-full">
                      <p className="text-sm font-semibold text-white flex items-center gap-2">
                        <Instagram className="h-4 w-4" />
                        {post.likes} curtidas
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h4 className="font-bold text-foreground">{post.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 text-center space-y-4">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              Compartilhe Seus Registros
            </h3>
            <p className="text-foreground/80">
              Você viu algum animal interessante? Marque-nos nas suas postagens
              com
              <span className="font-bold text-primary">
                {" "}
                #SelvagembNatureza
              </span>{" "}
              e nós compartilharemos!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Saiba como Contribuir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialIntegrationSection;
