import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  DeviceTabletIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CogIcon,
  CheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  const services = [
    {
      icon: ComputerDesktopIcon,
      title: "Perbaikan PC Desktop",
      description:
        "Perbaikan komputer desktop untuk berbagai masalah hardware dan software dengan teknisi berpengalaman.",
      features: [
        "Perbaikan Hardware (Motherboard, RAM, VGA)",
        "Troubleshooting Software & Virus",
        "Upgrade Komponen (RAM, SSD, VGA)",
        "Pembersihan & Maintenance",
        "Instalasi Driver & Software",
        "Perbaikan Power Supply",
        "Optimasi Performa",
        "Backup & Recovery Data",
      ],
      price: "Mulai Rp 100.000",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DeviceTabletIcon,
      title: "Perbaikan Laptop",
      description:
        "Layanan perbaikan laptop berbagai merk dengan sparepart original dan teknisi bersertifikat.",
      features: [
        "Perbaikan LCD/Layar Laptop",
        "Penggantian Keyboard & Touchpad",
        "Perbaikan Motherboard",
        "Upgrade RAM & SSD",
        "Perbaikan Charger & Battery",
        "Perbaikan Fan & Cooling System",
        "Instalasi OS & Software",
        "Data Recovery",
      ],
      price: "Mulai Rp 150.000",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Instalasi Software",
      description:
        "Instalasi dan setup software sesuai kebutuhan dengan lisensi resmi dan antivirus terbaru.",
      features: [
        "Instalasi Windows 10/11",
        "Microsoft Office & Aplikasi",
        "Antivirus & Security",
        "Driver Update",
        "Software Development Tools",
        "Game & Multimedia Apps",
        "System Optimization",
        "Software Troubleshooting",
      ],
      price: "Mulai Rp 75.000",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CpuChipIcon,
      title: "Upgrade Hardware",
      description:
        "Upgrade komponen komputer untuk meningkatkan performa sesuai kebutuhan dan budget Anda.",
      features: [
        "Upgrade RAM DDR3/DDR4",
        "Instalasi SSD SATA/NVMe",
        "Upgrade VGA Card",
        "Upgrade Processor",
        "Upgrade Power Supply",
        "Upgrade Cooling System",
        "Cable Management",
        "Performance Testing",
      ],
      price: "Mulai Rp 200.000",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: ShieldCheckIcon,
      title: "Maintenance & Cleaning",
      description:
        "Pembersihan dan maintenance rutin untuk menjaga performa komputer tetap optimal.",
      features: [
        "Pembersihan Hardware (CPU, GPU, Fan)",
        "Penggantian Thermal Paste",
        "Cable Management",
        "System Optimization",
        "Virus & Malware Removal",
        "Disk Cleanup & Defrag",
        "Registry Cleanup",
        "Performance Monitoring",
      ],
      price: "Mulai Rp 125.000",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: CogIcon,
      title: "Konsultasi IT",
      description:
        "Konsultasi gratis untuk masalah komputer dan rekomendasi solusi terbaik.",
      features: [
        "Diagnosis Masalah Hardware/Software",
        "Rekomendasi Hardware Upgrade",
        "Budget Planning & Cost Analysis",
        "Technical Support 24/7",
        "Remote Assistance",
        "Training & Tutorial",
        "Preventive Maintenance Plan",
        "IT Infrastructure Planning",
      ],
      price: "Gratis",
      color: "from-gray-500 to-slate-500",
    },
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = encodeURIComponent(
      `Halo! Saya tertarik dengan layanan ${service}. Bisa minta informasi lebih detail dan penawaran harga?`
    );
    const phoneNumber = "+6283878028873"; // Ganti dengan nomor WhatsApp Anda
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Layanan <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Kami menyediakan berbagai layanan perbaikan komputer dan laptop
              dengan teknisi berpengalaman. Layanan panggilan ke lokasi Anda
              dengan garansi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsAppClick("konsultasi")}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Konsultasi Gratis</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-8 h-full hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {service.price}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Yang Termasuk:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600 dark:text-gray-400"
                        >
                          <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(service.title)}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    <span>Pesan Layanan {service.title}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Proses <span className="gradient-text">Layanan</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Kami mengikuti proses yang terstruktur untuk memastikan layanan
              berkualitas dan pelanggan puas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Konsultasi",
                description:
                  "Kami mulai dengan memahami masalah komputer Anda dan memberikan diagnosis awal.",
              },
              {
                step: "02",
                title: "Penawaran",
                description:
                  "Memberikan penawaran harga yang transparan dan sesuai dengan masalah yang ditemukan.",
              },
              {
                step: "03",
                title: "Perbaikan",
                description:
                  "Teknisi kami melakukan perbaikan dengan peralatan lengkap dan sparepart berkualitas.",
              },
              {
                step: "04",
                title: "Testing & Garansi",
                description:
                  "Melakukan testing menyeluruh dan memberikan garansi untuk hasil perbaikan.",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Siap Memperbaiki Komputer Anda?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Jangan biarkan masalah komputer mengganggu aktivitas Anda. Hubungi
              kami sekarang untuk konsultasi gratis dan penawaran harga.
            </p>
            <button
              onClick={() => handleWhatsAppClick("layanan perbaikan")}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Hubungi Kami Sekarang</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
