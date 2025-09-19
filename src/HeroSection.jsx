import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-blue-700">Anurag Nayak</span>
      </motion.h2>

      {/* Professional Tagline */}
      <motion.p
        className="mt-4 text-lg md:text-2xl text-gray-700 font-light tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Frontend Developer | React.js | Tailwind CSS
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex space-x-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};
