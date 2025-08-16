import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pemilik Warnet',
      content: 'Teknisi dari Innovation Computer sangat profesional dan cepat. Mereka berhasil memperbaiki 10 komputer di warnet saya dalam waktu 1 hari. Sangat puas dengan layanannya!',
      rating: 5,
      avatar: 'BS',
      company: 'Warnet Cyber'
    },
    {
      name: 'Sari Dewi',
      role: 'Mahasiswa',
      content: 'Laptop saya tiba-tiba mati total, teknisi datang ke kos dalam 2 jam dan langsung bisa memperbaiki. Harganya juga terjangkau untuk mahasiswa seperti saya.',
      rating: 5,
      avatar: 'SD',
      company: 'Universitas'
    },
    {
      name: 'Ahmad Rizki',
      role: 'Karyawan Kantor',
      content: 'Komputer kantor yang bermasalah langsung diperbaiki di tempat. Teknisi sangat ramah dan menjelaskan masalahnya dengan detail. Sekarang komputer jadi lebih cepat.',
      rating: 5,
      avatar: 'AR',
      company: 'PT Maju Bersama'
    },
    {
      name: 'Dewi Sartika',
      role: 'Guru',
      content: 'Laptop untuk mengajar online tiba-tiba bermasalah. Innovation Computer datang ke sekolah dan langsung memperbaiki. Sekarang bisa mengajar online dengan lancar lagi.',
      rating: 5,
      avatar: 'DS',
      company: 'SDN Semarang'
    },
    {
      name: 'Rudi Hermawan',
      role: 'Pengusaha',
      content: 'Perlu upgrade komputer untuk bisnis. Teknisi memberikan rekomendasi yang tepat sesuai budget. Sekarang komputer jadi lebih powerful untuk kerja.',
      rating: 5,
      avatar: 'RH',
      company: 'CV Sukses Mandiri'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
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
            Apa Kata <span className="gradient-text">Pelanggan</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Jangan percaya kata kami, lihat apa yang dikatakan pelanggan puas kami tentang layanan perbaikan komputer dan laptop.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 lg:p-12 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>

                <div className="w-12 h-12 text-blue-400 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              98%
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Tingkat Kepuasan
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              4.9/5
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Rating Rata-rata
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              500+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Pelanggan Puas
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
