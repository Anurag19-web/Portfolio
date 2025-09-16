import { motion } from "framer-motion";

export const About = ()=>{
      return(
      <section id="about" className="py-20 container mx-auto px-6">
        <motion.h3
          className="text-3xl font-bold mb-6 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h3>
        <motion.p
          className="text-gray-600 text-lg text-center max-w-2xl mx-auto leading-relaxed"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          I am currently a <span className="font-semibold text-blue-600">3rd-year BCA student</span> at <span className="font-semibold">Shreyarth University</span>.
          As a <span className="font-semibold">fresher in the tech industry</span>, I am passionate about frontend development and love working with <span className="text-blue-600">React.js</span> and <span className="text-blue-600">Tailwind CSS</span> to build clean, responsive, and user-friendly web applications.
          I am eager to apply my skills, learn from real-world projects, and grow as a professional developer.
        </motion.p>
      </section>
      );
}