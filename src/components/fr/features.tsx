import { Bot, Zap, BarChart3, Lock, RefreshCw, Workflow } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Bot,
    title: "Chatbots IA",
    description: "Automatisez votre support client grâce à des chatbots intelligents disponibles 24h/24.",
  },
  {
    icon: Workflow,
    title: "Automatisation de processus",
    description: "Supprimez les tâches répétitives et laissez l’IA gérer vos workflows.",
  },
  {
    icon: BarChart3,
    title: "Analyse prédictive",
    description: "Prenez de meilleures décisions grâce à l’analyse de données pilotée par l’IA.",
  },
  {
    icon: Zap,
    title: "Intégrations rapides",
    description: "Connectez vos outils existants en quelques clics, sans développement.",
  },
  {
    icon: Lock,
    title: "Sécurité & conformité",
    description: "Vos données sont protégées selon les standards de sécurité les plus exigeants.",
  },
  {
    icon: RefreshCw,
    title: "Amélioration continue",
    description: "Votre système évolue et s’optimise automatiquement grâce au machine learning.",
  },
];

export function Features() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Nos solutions d’automatisation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des technologies d’IA avancées pour transformer votre entreprise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}