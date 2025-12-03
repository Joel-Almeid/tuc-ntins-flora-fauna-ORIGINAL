import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Polyanni Dallara Dantas Oliveira",
      role: "Coordenadora",
      institution: "Tucantins Silvestre",
      bio: "Coordenadora do projeto",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=polyanni",
      social: [],
    },
    { name: "Aline Torquato Tavares", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aline.torquato", social: [] },
    { name: "Elenir Campelo Gomes", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elenir.campelo", social: [] },
    { name: "Darcy Alves Bomfim", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=darcy.bomfim", social: [] },
    { name: "Idomeneu Gomes de Souza Filho", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=idomeneu.souza", social: [] },
    { name: "Vitor Mendes Vilas Boas", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vitor.mendes", social: [] },
    { name: "Hortencia Soardi Maricato", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hortencia.maricato", social: [] },
    { name: "Agnes Assunção", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=agnes.assuncao", social: [] },
    { name: "Adão Pereira da Silva", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=adao.silva", social: [] },
    { name: "Neusirene Pereira de Oliveira Ribeiro", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neusirene.ribeiro", social: [] },
    { name: "Rafael Teixeira de Sousa", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rafael.sousa", social: [] },
    { name: "Yunã Lurie Araújo Passos", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yuna.passos", social: [] },
    { name: "Geovana dos Santos Sousa", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=geovana.sousa", social: [] },
    { name: "Douglas Silvino", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=douglas.silvino", social: [] },
    { name: "Priscila Áquila da Costa Moura", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priscila.moura", social: [] },
    { name: "Maria Clara da Costa Moura", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mariaclara.moura", social: [] },
    { name: "José Eduardo Garcia Campos", role: "Pesquisador(a)", institution: "Tucantins Silvestre", bio: "", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joseeduardo.campos", social: [] },
  ];

  const partners = [
    {
      name: "IFTO",
      logo: "/images/logo_ifto.png",
      description: "Instituto Federal do Tocantins",
    },
    {
      name: "IFRR",
      logo: "/images/logo_ifrr.jpg",
      description: "Instituto Federal de Roraima",
    },
  ];

  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
              NOSSA EQUIPE
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pesquisadores e profissionais dedicados à conservação da
              biodiversidade
            </p>
            <div className="h-1 w-24 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-primary/8 border-2 border-primary/20 flex items-center justify-center text-xl font-black text-foreground">
                      {getInitials(member.name)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-foreground tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {member.institution}
                    </p>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  <div className="flex justify-center gap-3 pt-2">
                    {member.social.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.url}
                          title={social.label}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/8 border border-primary/20 text-primary hover:bg-primary/15 transition-all"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
              NOSSOS PARCEIROS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instituições que colaboram para o sucesso do projeto
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {partner.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
