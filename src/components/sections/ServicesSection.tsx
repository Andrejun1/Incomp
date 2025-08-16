import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CogIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const ServicesSection = () => {
  const services = [
    {
      icon: ComputerDesktopIcon,
      title: "Perbaikan PC Desktop",
      description:
        "Perbaikan komputer desktop untuk berbagai masalah hardware dan software dengan teknisi berpengalaman.",
      features: [
        "Perbaikan Hardware",
        "Troubleshooting Software",
        "Upgrade Komponen",
        "Pembersihan & Maintenance",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Perbaikan Laptop",
      description:
        "Layanan perbaikan laptop berbagai merk dengan sparepart original dan teknisi bersertifikat.",
      features: [
        "Perbaikan LCD/Layar",
        "Penggantian Keyboard",
        "Perbaikan Motherboard",
        "Upgrade RAM/SSD",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Instalasi Software",
      description:
        "Instalasi dan setup software sesuai kebutuhan dengan lisensi resmi dan antivirus terbaru.",
      features: [
        "Windows OS",
        "Office & Aplikasi",
        "Antivirus",
        "Driver Update",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CpuChipIcon,
      title: "Upgrade Hardware",
      description:
        "Upgrade komponen komputer untuk meningkatkan performa sesuai kebutuhan dan budget Anda.",
      features: ["Upgrade RAM", "SSD Installation", "VGA Card", "Processor"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: ShieldCheckIcon,
      title: "Maintenance & Cleaning",
      description:
        "Pembersihan dan maintenance rutin untuk menjaga performa komputer tetap optimal.",
      features: [
        "Pembersihan Hardware",
        "Thermal Paste",
        "Cable Management",
        "System Optimization",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: CogIcon,
      title: "Konsultasi IT",
      description:
        "Konsultasi gratis untuk masalah komputer dan rekomendasi solusi terbaik.",
      features: [
        "Diagnosis Masalah",
        "Rekomendasi Hardware",
        "Budget Planning",
        "Technical Support",
      ],
      color: "from-gray-500 to-slate-500",
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Layanan <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan perbaikan komputer dan laptop
            dengan teknisi berpengalaman. Layanan panggilan ke lokasi Anda
            dengan garansi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    Selengkapnya
                  </Link>
                  <ArrowRightIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Lihat Semua Layanan</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
