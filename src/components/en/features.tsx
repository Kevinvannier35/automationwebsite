import { Bot, Zap, BarChart3, Lock, RefreshCw, Workflow } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Automate your customer support with intelligent chatbots available 24/7.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Eliminate repetitive tasks and let AI handle your workflows.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Make better decisions thanks to AI-driven data analysis.",
  },
  {
    icon: Zap,
    title: "Fast Integrations",
    description: "Connect your existing tools in just a few clicks, without coding.",
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description: "Your data is protected according to the highest industry standards.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "AI learns and improves automatically over time.",
  },
];

export function Features() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Our Automation Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge AI technologies to transform your business
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