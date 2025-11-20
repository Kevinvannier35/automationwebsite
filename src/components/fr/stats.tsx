import { Users, Building2, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Clients actifs",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Process automatisés",
  },
  {
    icon: Globe,
    value: "100%",
    label: "Expertise française",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction client",
  },
];

export function Stats() {
  return (
    <section className="bg-gradient-to-br from-[#0A141A] via-[#0D1B24] to-[#000000] py-12 rounded-1xl overflow-hidden">
      <div className="container mx-auto px-15">
        
        {/* TITRE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Rejoignez des dizaines d’entreprises qui transforment leurs opérations grâce à l’IA
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}