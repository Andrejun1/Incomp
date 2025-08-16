import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: HeartIcon,
      title: 'Dedikasi',
      description: 'Kami berdedikasi penuh untuk memberikan layanan perbaikan komputer dan laptop terbaik dengan hati yang tulus.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Kualitas',
      description: 'Kami tidak pernah mengorbankan kualitas dan selalu berusaha memberikan hasil terbaik dalam setiap perbaikan.'
    },
    {
      icon: UserGroupIcon,
      title: 'Pelayanan',
      description: 'Kami percaya dalam bekerja sama dengan pelanggan untuk mencapai hasil perbaikan yang memuaskan.'
    },
    {
      icon: LightBulbIcon,
      title: 'Inovasi',
      description: 'Kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi perbaikan yang efektif.'
    }
  ];

  const stats = [
    { number: "300+", label: "Klien Puas" },
    { number: "500+", label: "Proyek Selesai" },
    { number: "3+", label: "Tahun Pengalaman" },
    { number: "12/7", label: "Layanan Siaga" },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Saya ingin konsultasi tentang perbaikan komputer/laptop. Bisa bantu?");
    const phoneNumber = "+6283878028873";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
              Tentang <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Kami adalah tim teknisi profesional yang berdedikasi untuk memperbaiki komputer dan laptop Anda. 
              Layanan panggilan ke lokasi dengan teknisi berpengalaman dan garansi hasil perbaikan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Misi & Visi Kami
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Misi
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Memberikan layanan perbaikan komputer dan laptop berkualitas tinggi dengan teknisi profesional, 
                    memastikan setiap perangkat dapat berfungsi optimal dan pelanggan merasa puas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Visi
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Menjadi penyedia layanan perbaikan komputer dan laptop terpercaya di Semarang dan sekitarnya, 
                    dikenal karena kualitas, kecepatan, dan kepuasan pelanggan yang tinggi.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Mengapa Memilih Kami?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Teknisi berpengalaman',
                    'Layanan panggilan ke lokasi Anda',
                    'Sparepart berkualitas dan bergaransi',
                    'Harga transparan dan terjangkau',
                    'Garansi hasil perbaikan',
                    'Pelayanan cepat dan ramah'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nilai-Nilai <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Nilai-nilai ini menjadi pedoman dalam setiap layanan yang kami berikan kepada pelanggan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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
                <div className="text-blue-100 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Butuh Perbaikan Komputer?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Jangan biarkan masalah komputer mengganggu aktivitas Anda. Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary flex items-center justify-center space-x-2 mx-auto"
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

export default About;

