import { motion } from "framer-motion";

export const Project = ()=>{
    return(
      <section id="projects" className="py-20 bg-gray-100">
        <motion.div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Question Task App",
                link: "https://question-task-eta.vercel.app/",
                desc: "A web app to manage questions and tasks efficiently.",
              },
              {
                name: "BCA Tutorial Site",
                link: "https://bca-tutorial.vercel.app/",
                desc: "Educational platform providing BCA tutorials.",
              },
              {
                name: "Dev Platform",
                link: "https://dev-platform-frontend-qtfu.vercel.app/",
                desc: "Developer platform for profile and project showcase.",
              },
            ].map((proj, index) => (
              <motion.div
                key={proj.name}
                className="bg-white rounded-lg shadow hover:shadow-xl transition p-6"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="h-40 bg-gradient-to-r from-blue-100 to-blue-200 rounded mb-4 flex items-center justify-center text-xl font-bold text-blue-600">
                  {proj.name}
                </div>
                <h4 className="text-xl font-semibold mb-2">{proj.name}</h4>
                <p className="text-gray-600 mb-3">{proj.desc}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
}