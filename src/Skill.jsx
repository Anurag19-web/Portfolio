import { motion } from "framer-motion";

export const Skill = ()=>{
      return(
      <section id="skills" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Skills</h3>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript (ES6+)",
            "React.js",
            "Redux & RTK",
            "Tailwind CSS",
            "Git & GitHub",
            "Postman",
            "Vercel / Netlify / Render",
          ].map((skill) => (
            <motion.span
              key={skill}
              className="px-6 py-2 bg-blue-100 text-blue-700 font-medium rounded-full shadow"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#2563EB",
                color: "#fff",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>
      );
}