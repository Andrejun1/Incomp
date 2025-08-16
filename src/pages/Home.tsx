import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  const features = [
    {
      icon: CheckCircleIcon,
      title: "Kualitas Terjamin",
      description:
        "Kami memastikan standar kualitas tertinggi dalam semua layanan kami dengan jaminan kepuasan.",
    },
    {
      icon: ClockIcon,
      title: "Pengerjaan",
      description:
        "Waktu pengerjaan yang cepat tanpa mengorbankan kualitas atau perhatian pada detail.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Aman & Andal",
      description:
        "Data dan informasi Anda dilindungi dengan langkah-langkah keamanan terbaik di industri.",
    },
    {
      icon: UserGroupIcon,
      title: "Tim Ahli",
      description:
        "Profesional berpengalaman kami berdedikasi untuk memberikan hasil yang luar biasa.",
    },
  ];

  const stats = [
    { number: "300+", label: "Klien Puas" },
    { number: "500+", label: "Proyek Selesai" },
    { number: "3+", label: "Tahun Pengalaman" },
    { number: "12/7", label: "Layanan Siaga" },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mengapa Memilih{" "}
              <span className="gradient-text">Layanan Kami</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Kami menyediakan layanan unggulan dengan fokus pada kualitas,
              inovasi, dan kepuasan pelanggan. Kesuksesan Anda adalah prioritas
              kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
