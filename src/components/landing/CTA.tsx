import { motion } from "framer-motion";
import { Apple, PlayCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8"
          >
            <ArrowRight className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para tomar el{" "}
            <span className="gradient-text">control de tu dinero</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Únete a más de 100,000 usuarios que ya están ahorrando más y 
            gastando mejor. Descarga Flowly gratis hoy mismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-2xl font-semibold text-base hover:opacity-90 transition-opacity"
            >
              <Apple size={24} />
              <div className="text-left">
                <span className="block text-xs opacity-70">Descargar en</span>
                <span className="block text-sm font-bold">App Store</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border bg-transparent rounded-2xl font-semibold text-base hover:bg-secondary/50 transition-colors"
            >
              <PlayCircle size={24} className="text-primary" />
              <div className="text-left">
                <span className="block text-xs text-muted-foreground">Descargar en</span>
                <span className="block text-sm font-bold">Google Play</span>
              </div>
            </motion.button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Sin tarjeta de crédito · Gratis para siempre · Cancela cuando quieras
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
