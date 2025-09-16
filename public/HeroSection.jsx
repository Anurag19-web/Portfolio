import { motion } from "framer-motion";

export const HeroSection = ()=>{
      return(
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-100 to-blue-200">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="text-blue-600">Anurag Nayak</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Frontend Developer | React.js | Tailwind CSS
        </motion.p>
        <motion.div
          className="mt-6 space-x-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
      );
}