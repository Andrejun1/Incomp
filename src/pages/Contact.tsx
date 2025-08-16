import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Nama harus minimal 2 karakter'),
  email: z.string().email('Masukkan alamat email yang valid'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subjek harus minimal 5 karakter'),
  message: z.string().min(10, 'Pesan harus minimal 10 karakter'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Format pesan untuk WhatsApp
    const message = `*PESAN DARI WEBSITE*
    
*Nama:* ${data.name}
*Email:* ${data.email}
${data.phone ? `*Telepon:* ${data.phone}\n` : ''}*Subjek:* ${data.subject}

*Pesan:*
${data.message}

---
Pesan ini dikirim melalui website Innovation Computer`;

    // Encode pesan untuk URL WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "6283878028873";
    
    // Buka WhatsApp dengan pesan yang sudah diformat
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo! Saya butuh jasa perbaikan komputer/laptop. Bisa bantu?");
    const phoneNumber = "+6283878028873";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+6283878028873', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:innovationcomputerr@gmail.com', '_self');
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telepon',
      value: '083878028873',
      action: handlePhoneClick,
      description: 'Hubungi kami langsung'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'innovationcomputerr @gmail.com',
      action: handleEmailClick,
      description: 'Kirimkan email ke kami'
    },
    {
      icon: MapPinIcon,
      title: 'Area Layanan',
      value: 'Semarang & Sekitarnya',
      action: () => {},
      description: 'Layanan panggilan ke lokasi'
    },
    {
      icon: ClockIcon,
      title: 'Jam Operasional',
      value: 'Senin - Sabtu: 8:00 AM - 4:00 PM',
      action: () => {},
      description: 'Kami siap membantu'
    }
  ];

  const services = [
    {
      icon: ComputerDesktopIcon,
      title: 'Perbaikan PC Desktop',
      description: 'Perbaikan komputer desktop untuk berbagai masalah hardware dan software'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Perbaikan Laptop',
      description: 'Layanan perbaikan laptop berbagai merk dengan sparepart original'
    },
    {
      icon: CheckIcon,
      title: 'Maintenance',
      description: 'Pembersihan dan maintenance rutin untuk performa optimal'
    }
  ];

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
              Hubungi <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Butuh perbaikan komputer atau laptop? Ada pertanyaan tentang layanan kami? 
              Kami siap membantu Anda. Hubungi kami sekarang untuk konsultasi gratis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Informasi <span className="gradient-text">Kontak</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Kami siap melayani kebutuhan perbaikan komputer dan laptop Anda. 
              Pilih cara yang paling nyaman untuk menghubungi kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-card p-6 h-64 w-full flex flex-col justify-start hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                     onClick={info.action}>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center px-2">
                      {info.value}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium text-center">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Layanan <span className="gradient-text">Kami</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Kirim <span className="gradient-text">Pesan</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Isi form di bawah ini untuk mengirim pesan atau permintaan layanan. 
                Kami akan segera menghubungi Anda.
              </p>
            </div>

            <div className="glass-card p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                      placeholder="Masukkan alamat email Anda"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Masukkan nomor telepon (opsional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subjek *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                        errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                      placeholder="Contoh: Perbaikan Laptop, Konsultasi, dll"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Jelaskan masalah komputer/laptop Anda atau pertanyaan yang ingin diajukan..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </button>
                </div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
                  >
                    <CheckIcon className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-medium">Form berhasil diisi!</p>
                    <p className="text-sm">WhatsApp akan terbuka dengan pesan yang sudah disiapkan.</p>
                    <p className="text-xs mt-2 text-green-600 dark:text-green-400">
                      Jika WhatsApp tidak terbuka, silakan copy pesan dan kirim manual.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Pertanyaan <span className="gradient-text">Umum</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Berikut adalah beberapa pertanyaan yang sering diajukan oleh pelanggan kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: 'Berapa lama waktu perbaikan komputer?',
                answer: 'Waktu perbaikan bervariasi tergantung kompleksitas masalah. Masalah ringan bisa selesai dalam 1-2 jam, sedangkan masalah kompleks membutuhkan waktu 1-3 hari.'
              },
              {
                question: 'Apakah ada garansi untuk hasil perbaikan?',
                answer: 'Ya, kami memberikan garansi untuk setiap hasil perbaikan. Garansi mencakup masalah yang sama yang telah diperbaiki selama periode tertentu.'
              },
              {
                question: 'Apakah layanan panggilan ke lokasi tersedia?',
                answer: 'Ya, kami menyediakan layanan panggilan ke lokasi Anda. Teknisi kami akan datang dengan peralatan lengkap untuk memperbaiki komputer/laptop di tempat.'
              },
              {
                question: 'Teknologi apa yang digunakan?',
                answer: 'Kami menggunakan peralatan dan perangkat lunak diagnostik modern, standar industri IT, serta teknik perbaikan terkini. Mulai dari analisis hardware, optimasi sistem operasi, hingga pembaruan software, kami memilih solusi terbaik sesuai kebutuhan perangkat Anda.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
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
              Butuh Perbaikan Segera?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Jangan biarkan masalah komputer mengganggu aktivitas Anda. 
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>WhatsApp Sekarang</span>
              </button>
              <button
                onClick={handlePhoneClick}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Telepon Langsung</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

