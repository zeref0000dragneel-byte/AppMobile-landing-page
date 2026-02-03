import { motion } from "framer-motion";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";

const screenshots = [
  {
    image: screenshot1,
    title: "Dashboard Principal",
    description: "Vista general de tu situación financiera",
  },
  {
    image: screenshot2,
    title: "Análisis Detallado",
    description: "Gráficos y estadísticas de tus gastos",
  },
  {
    image: screenshot3,
    title: "Perfil y Ajustes",
    description: "Personaliza tu experiencia",
  },
];

const Screenshots = () => {
  return (
    <section id="screenshots" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            Capturas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Una interfaz{" "}
            <span className="gradient-text">diseñada para ti</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diseño intuitivo que hace que gestionar tu dinero sea un placer, 
            no una tarea aburrida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative glass-card rounded-3xl p-4 hover:border-primary/50 transition-all duration-300">
                {/* Phone frame */}
                <div className="relative rounded-2xl overflow-hidden bg-background aspect-[9/19]">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold mb-1">{screenshot.title}</h3>
                <p className="text-sm text-muted-foreground">{screenshot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
