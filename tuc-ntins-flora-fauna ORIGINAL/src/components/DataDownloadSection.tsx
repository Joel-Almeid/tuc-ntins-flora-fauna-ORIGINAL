import { Card, CardContent } from "./ui/card";
import { Download, FileText, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";

const DataDownloadSection = () => {
  const datasets = [
    {
      name: "Registros Completos 2025",
      description: "Todos os registros de fauna com metadados completos",
      format: "CSV",
      size: "2.4 MB",
      records: 1247,
      icon: FileText,
      color: "text-primary",
    },
    {
      name: "Catálogo de Espécies",
      description: "Lista completa de espécies monitoradas",
      format: "PDF",
      size: "1.2 MB",
      records: 42,
      icon: FileText,
      color: "text-secondary",
    },
  ];

  const reports = [
    {
      title: "Relatório Anual 2024",
      description: "Resumo executivo das atividades e descobertas do projeto",
      date: "Janeiro 2025",
      pages: 48,
    },
    {
      title: "Monitoramento por Espécie",
      description: "Análise detalhada de padrões de comportamento",
      date: "Dezembro 2024",
      pages: 32,
    },
    {
      title: "Impacto de Conservação",
      description: "Métricas de preservação e ações implementadas",
      date: "Novembro 2024",
      pages: 24,
    },
    {
      title: "Metodologia e Protocolos",
      description: "Guia técnico completo dos métodos utilizados",
      date: "Outubro 2024",
      pages: 56,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
            DADOS ABERTOS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesse todos os dados do projeto para pesquisa, análise e
            contribuição à ciência
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6" />
        </div>

        {/* Datasets */}
        <div className="mb-20">
          <h3 className="text-3xl font-black text-foreground mb-8 tracking-tight">
            Conjuntos de Dados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datasets.map((dataset, index) => {
              const Icon = dataset.icon;
              return (
                <Card
                  key={index}
                  className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-foreground mb-1 group-hover:text-primary transition-colors">
                          {dataset.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {dataset.description}
                        </p>
                      </div>
                      <div className={`flex-shrink-0 ${dataset.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm bg-primary/5 rounded p-3">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Formato</p>
                        <p className="font-bold text-foreground">
                          {dataset.format}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Tamanho</p>
                        <p className="font-bold text-foreground">
                          {dataset.size}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          Registros
                        </p>
                        <p className="font-bold text-foreground">
                          {dataset.records}
                        </p>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Reports */}
        <div>
          <h3 className="text-3xl font-black text-foreground mb-8 tracking-tight">
            Relatórios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reports.map((report, index) => (
              <Card
                key={index}
                className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {report.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {report.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.pages} páginas</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* License Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-lg p-8">
            <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">
              Licença de Dados
            </h3>
            <p className="text-foreground/85 mb-3">
              Todos os dados disponibilizados pelo Projeto Tucãtins
              Selvagem/Natureza estão sob a licença
              <span className="font-bold text-primary">
                {" "}
                Creative Commons Attribution 4.0 International (CC BY 4.0)
              </span>
              .
            </p>
            <p className="text-sm text-muted-foreground">
              Você é livre para compartilhar e adaptar os dados, desde que
              forneça crédito apropriado e indique se houve alterações. Para
              mais informações, visite creativecommons.org.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDownloadSection;
