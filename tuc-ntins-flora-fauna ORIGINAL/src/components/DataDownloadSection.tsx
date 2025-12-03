import { Card, CardContent } from "./ui/card";
import { Download, FileText, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";

const DataDownloadSection = () => {
  // Apenas um arquivo PDF público ficará disponível para download
  const datasets = [
    {
      name: "Monitoramento da Fauna Silvestre",
      description: "Relatório completo (IFTO) — conjunto único de dados disponíveis",
      format: "PDF",
      size: "—",
      records: "—",
      icon: FileText,
      color: "text-primary",
      filePath: "/Monitoramento da Fauna Silvestre_IFTO_FAR_TS.pdf.PDF",
    },
  ];

  // Relatórios removidos — apenas conjuntos de dados ficam disponíveis

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

        {/* Conjunto de Dados disponível (apenas o PDF público) */}
        <div className="mb-20">
          <h3 className="text-3xl font-black text-foreground mb-8 tracking-tight">
            Conjunto de Dados Disponível
          </h3>
          <div className="max-w-2xl mx-auto">
            {datasets.map((dataset, index) => {
              const Icon = dataset.icon;
              return (
                <Card key={index} className="border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group mb-4">
                  <CardContent className="p-6 space-y-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 ${dataset.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-foreground mb-1">
                          {dataset.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {dataset.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-40">
                      <a href={dataset.filePath} className="inline-block w-full">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                          <a href={dataset.filePath} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Baixar PDF
                          </a>
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Relatórios removidos */}

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
