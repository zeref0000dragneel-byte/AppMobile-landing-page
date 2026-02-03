import { motion } from "framer-motion";
import { Download, UserPlus, Link2, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Descarga la App",
    description: "Disponible gratis en App Store y Google Play. Instalación en segundos.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Crea tu Cuenta",
    description: "Regístrate en menos de 2 minutos con tu email o redes sociales.",
  },
  {
    icon: Link2,
    step: "03",
    title: "Conecta tus Cuentas",
    description: "Vincula de forma segura tus bancos y tarjetas favoritas.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "¡Listo para Ahorrar!",
    description: "Recibe insights y comienza a optimizar tus finanzas automáticamente.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            Cómo Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comienza en{" "}
            <span className="gradient-text">4 simples pasos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diseñamos el proceso más simple posible para que empieces a 
            controlar tu dinero hoy mismo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
