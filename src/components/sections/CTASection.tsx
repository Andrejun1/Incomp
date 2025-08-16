import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo! Saya ingin konsultasi dan memesan layanan."
    );
    const phoneNumber = "+6283878028873";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Siap Memulai? Hubungi Kami Sekarang
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan
            Anda.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            Hubungi via WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

