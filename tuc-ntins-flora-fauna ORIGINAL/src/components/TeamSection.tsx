import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. João Silva",
      role: "Coordenador do Projeto",
      institution: "IFTO - Instituto Federal do Tocantins",
      bio: "Pesquisador em ecologia e conservação da fauna",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
      social: [
        { icon: Linkedin, url: "#", label: "LinkedIn" },
        { icon: Mail, url: "mailto:joao@ifto.edu.br", label: "Email" },
      ],
    },
    {
      name: "Dra. Maria Santos",
      role: "Pesquisadora Principal",
      institution: "IFRR - Instituto Federal de Roraima",
      bio: "Especialista em biodiversidade amazônica",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      social: [
        { icon: Linkedin, url: "#", label: "LinkedIn" },
        { icon: Mail, url: "mailto:maria@ifrr.edu.br", label: "Email" },
      ],
    },
    {
      name: "Prof. Carlos Oliveira",
      role: "Metodologia Científica",
      institution: "IFTO - Instituto Federal do Tocantins",
      bio: "Especialista em métodos de amostragem da fauna",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
      social: [
        { icon: Linkedin, url: "#", label: "LinkedIn" },
        { icon: Mail, url: "mailto:carlos@ifto.edu.br", label: "Email" },
      ],
    },
    {
      name: "Fernanda Costa",
      role: "Educação Ambiental",
      institution: "IFTO - Instituto Federal do Tocantins",
      bio: "Gestora de conteúdo e engajamento comunitário",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fernanda",
      social: [
        { icon: Linkedin, url: "#", label: "LinkedIn" },
        { icon: Mail, url: "mailto:fernanda@ifto.edu.br", label: "Email" },
      ],
    },
  ];

  const partners = [
    {
      name: "IFTO",
      logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoodle.ifto.edu.br%2F&psig=AOvVaw3r_xAPhpdBcAQFZH7QnyKD&ust=1764869327202000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiz-tz4oZEDFQAAAAAdAAAAABAE",
      description: "Instituto Federal do Tocantins",
    },
    {
      name: "IFRR",
      logo: "https://via.placeholder.com/120x60?text=IFRR",
      description: "Instituto Federal de Roraima",
    },
  ];

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
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-24 w-24 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all"
                    />
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
