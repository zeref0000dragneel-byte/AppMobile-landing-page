import { motion } from "framer-motion";
import { 
  Wallet, 
  PieChart, 
  Shield, 
  Zap, 
  Target, 
  Bell 
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Control de Gastos",
    description: "Categoriza automáticamente tus transacciones y visualiza a dónde va tu dinero.",
  },
  {
    icon: PieChart,
    title: "Análisis Inteligente",
    description: "Obtén insights personalizados sobre tus hábitos financieros con IA avanzada.",
  },
  {
    icon: Shield,
    title: "Seguridad Bancaria",
    description: "Encriptación de nivel bancario para proteger toda tu información sensible.",
  },
  {
    icon: Zap,
    title: "Sincronización Instantánea",
    description: "Conecta todas tus cuentas y tarjetas en segundos sin complicaciones.",
  },
  {
    icon: Target,
    title: "Metas de Ahorro",
    description: "Establece objetivos y alcánzalos con nuestro sistema de seguimiento inteligente.",
  },
  {
    icon: Bell,
    title: "Alertas Personalizadas",
    description: "Recibe notificaciones cuando gastas de más o alcanzas tus metas.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            Funciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Todo lo que necesitas para{" "}
            <span className="gradient-text">tus finanzas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas poderosas diseñadas para simplificar la gestión de tu dinero 
            y ayudarte a alcanzar la libertad financiera.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
