import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  const baseText = "Perbaikan Komputer Dan Laptop Panggilan ";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPartialDelete, setIsPartialDelete] = useState(false);
  const [isReplacing, setIsReplacing] = useState(false);
  const [isTypingBase, setIsTypingBase] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [baseIndex, setBaseIndex] = useState(0);

  // Image path - ganti dengan path gambar Anda
  const serviceImage = "/Image.jpeg"; // Ganti dengan path gambar Anda

  const texts = [
    {
      full: "Ke Rumah",
      deleteFrom: "",
      complete: "Ke Rumah",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      full: "Ke Kantor",
      deleteFrom: "",
      complete: "Ke Kantor",
      color: "text-green-600 dark:text-green-400",
    },
    {
      full: "Ke Sekolah",
      deleteFrom: "",
      complete: "Ke Sekolah",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      full: "Ke Manapun Itu",
      deleteFrom: "",
      complete: "Ke Manapun Itu",
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      full: "Teknisi Berpengalaman",
      deleteFrom: "",
      complete: "Teknisi Berpengalaman",
      color: "text-red-600 dark:text-red-400",
    },
    {
      full: "Bergaransi",
      deleteFrom: "",
      complete: "Bergaransi",
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      full: "Semarang & Sekitarnya",
      deleteFrom: "",
      complete: "Semarang & Sekitarnya",
      color: "text-indigo-600 dark:text-indigo-400",
    },
  ];

  useEffect(() => {
    const currentTextObj = texts[textIndex];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    // Step 0: Type the base text first
    if (isTypingBase && baseIndex < baseText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(baseText.slice(0, baseIndex + 1));
        setBaseIndex(baseIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Step 0.5: Start typing the dynamic text after base text is complete
    else if (isTypingBase && baseIndex === baseText.length) {
      const timeout = setTimeout(() => {
        setIsTypingBase(false);
        setDisplayText(baseText + currentTextObj.full.slice(0, 1));
        setCurrentIndex(1);
      }, 500);
      return () => clearTimeout(timeout);
    }

    // Step 0.6: Handle subsequent cycles where baseText is already displayed
    else if (
      !isDeleting &&
      !isPartialDelete &&
      !isReplacing &&
      !isTypingBase &&
      currentIndex === 0 &&
      displayText === baseText
    ) {
      const timeout = setTimeout(() => {
        setDisplayText(baseText + currentTextObj.full.slice(0, 1));
        setCurrentIndex(1);
      }, 500);
      return () => clearTimeout(timeout);
    }

    // Step 1: Type the full text
    else if (
      !isDeleting &&
      !isPartialDelete &&
      !isReplacing &&
      !isTypingBase &&
      currentIndex < currentTextObj.full.length
    ) {
      const timeout = setTimeout(() => {
        setDisplayText(
          baseText + currentTextObj.full.slice(0, currentIndex + 1)
        );
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Step 2: Pause after typing full text
    else if (
      !isDeleting &&
      !isPartialDelete &&
      !isReplacing &&
      !isTypingBase &&
      currentIndex === currentTextObj.full.length
    ) {
      const timeout = setTimeout(() => {
        if (
          currentTextObj.deleteFrom &&
          currentTextObj.deleteFrom !== currentTextObj.full
        ) {
          // Start partial deletion
          setIsPartialDelete(true);
        } else {
          // Start full deletion
          setIsDeleting(true);
        }
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    // Step 3: Partial deletion (delete only the part after deleteFrom)
    else if (
      isPartialDelete &&
      currentIndex > currentTextObj.deleteFrom.length
    ) {
      const timeout = setTimeout(() => {
        setDisplayText(
          baseText + currentTextObj.full.slice(0, currentIndex - 1)
        );
        setCurrentIndex(currentIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    // Step 4: Start replacement after partial deletion
    else if (
      isPartialDelete &&
      currentIndex === currentTextObj.deleteFrom.length
    ) {
      const timeout = setTimeout(() => {
        setIsPartialDelete(false);
        setIsReplacing(true);
        setCurrentIndex(currentTextObj.deleteFrom.length);
        setDisplayText(baseText + currentTextObj.deleteFrom);
      }, 500);
      return () => clearTimeout(timeout);
    }

    // Step 5: Type the replacement part
    else if (isReplacing && currentIndex < currentTextObj.complete.length) {
      const timeout = setTimeout(() => {
        setDisplayText(
          baseText + currentTextObj.complete.slice(0, currentIndex + 1)
        );
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Step 6: Pause after replacement
    else if (isReplacing && currentIndex === currentTextObj.complete.length) {
      const timeout = setTimeout(() => {
        setIsReplacing(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    // Step 7: Full deletion
    else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        const currentText = isReplacing
          ? currentTextObj.complete
          : currentTextObj.full;
        setDisplayText(baseText + currentText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    // Step 8: Move to next text
    else if (isDeleting && currentIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setIsPartialDelete(false);
        setIsReplacing(false);
        setTextIndex((textIndex + 1) % texts.length);
        setCurrentIndex(0);
        setDisplayText(baseText);
        // Don't reset isTypingBase and baseIndex for subsequent cycles
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [
    currentIndex,
    isDeleting,
    isPartialDelete,
    isReplacing,
    isTypingBase,
    baseIndex,
    textIndex,
    texts,
    baseText,
    displayText,
  ]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo! Saya butuh jasa perbaikan komputer/laptop. Bisa bantu?"
    );
    const phoneNumber = "+6283878028873"; // Ganti dengan nomor WhatsApp Anda
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleVideoClick = () => {
    // Handle video modal or redirect to video
    console.log("Video clicked");
  };

  // Function to render text with different colors
  const renderColoredText = () => {
    if (isTypingBase) {
      // When typing base text, show it in normal color
      return (
        <>
          <span className="text-gray-900 dark:text-white">{displayText}</span>
          <span className="animate-pulse text-blue-600">|</span>
        </>
      );
    }

    // Split the display text into base and dynamic parts
    const basePart = baseText;
    const dynamicPart = displayText.substring(baseText.length);
    const currentTextObj = texts[textIndex];

    return (
      <>
        <span className="text-gray-900 dark:text-white">{basePart}</span>
        <span
          className={`${currentTextObj.color} font-semibold transition-all duration-300 drop-shadow-sm`}
        >
          {dynamicPart}
        </span>
        <span className="animate-pulse text-blue-600">|</span>
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Layanan Panggilan - Semarang & Sekitarnya
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {renderColoredText()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl lg:max-w-none"
            >
              Teknisi profesional kami siap datang ke lokasi Anda untuk
              memperbaiki komputer dan laptop. Layanan cepat, terpercaya, dan
              bergaransi. Gratis konsultasi!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Panggil Teknisi Sekarang</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center justify-center lg:justify-start space-x-6 mt-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white text-sm font-semibold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <div className="font-semibold">300+ Pelanggan Puas</div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">5.0</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-12">
                <div className="glass-card p-4 relative overflow-hidden">
                  {/* Service Image */}
                  <div className="w-full h-80 rounded-2xl overflow-hidden relative">
                    <img
                      src={serviceImage}
                      alt="Layanan Profesional - Perbaikan Komputer dan Laptop"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.nextElementSibling?.classList.remove("hidden");
                      }}
                    />

                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center hidden">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Silakan masukkan gambar layanan profesional Anda di
                          sini
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                          Format: JPG, PNG, atau WebP
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image overlay with text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
