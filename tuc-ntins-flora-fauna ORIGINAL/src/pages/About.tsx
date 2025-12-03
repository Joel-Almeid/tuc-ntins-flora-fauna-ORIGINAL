import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Target, Users, Microscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre o Projeto
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tucãtins Silvestre é uma iniciativa de monitoramento científico da fauna brasileira
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Mission */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Nossa Missão</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O projeto Tucãtins Silvestre tem como objetivo principal o monitoramento contínuo da fauna silvestre 
                  nos estados de Tocantins, Ceará e Roraima, utilizando tecnologia de armadilhas fotográficas para 
                  documentar a biodiversidade local e contribuir com dados científicos para a conservação das espécies.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Conservação</h3>
                  <p className="text-muted-foreground">
                    Dedicados à preservação da biodiversidade brasileira através de dados científicos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
                    <Microscope className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Ciência</h3>
                  <p className="text-muted-foreground">
                    Metodologia rigorosa e tecnologia de ponta para coleta de dados confiáveis
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Colaboração</h3>
                  <p className="text-muted-foreground">
                    Parceria entre instituições de pesquisa e comunidades locais
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Methodology */}
          <section className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Metodologia</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O monitoramento é realizado através de armadilhas fotográficas (câmeras trap) instaladas em 
                    áreas experimentais nos Institutos Federais de Roraima (IFRR) e Tocantins (IFTO), além de 
                    outras áreas estratégicas.
                  </p>
                  <p>
                    Cada registro capturado inclui informações detalhadas como:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Data e horário da captura</li>
                    <li>Localização geográfica (GPS)</li>
                    <li>Condições ambientais (temperatura)</li>
                    <li>Fase lunar</li>
                    <li>Identificação da câmera e área experimental</li>
                  </ul>
                  <p>
                    Os dados coletados são analisados e disponibilizados para a comunidade científica, 
                    contribuindo para pesquisas sobre comportamento animal, padrões de atividade, 
                    distribuição geográfica e status de conservação das espécies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Areas */}
          <section>
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Áreas de Monitoramento
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Tocantins</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    IFTO - Campus Araguaína
                  </p>
                  <p className="text-muted-foreground">
                    Áreas experimentais no cerrado tocantinense, com foco em mamíferos de médio e grande porte.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Ceará</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Áreas de caatinga
                  </p>
                  <p className="text-muted-foreground">
                    Monitoramento em regiões de caatinga, documentando espécies adaptadas ao clima semiárido.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Roraima</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    IFRR - Campus Novo Paraíso
                  </p>
                  <p className="text-muted-foreground">
                    Florestas amazônicas e áreas de transição, com rica diversidade de fauna silvestre.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
