import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Project = () => {
  const projects = [
    {
      name: "Question Task App",
      link: "https://question-task-eta.vercel.app/",
      desc: "A web app to manage questions and tasks efficiently.",
      tech: ["React", "CSS", "Vercel"],
      category: "Frontend",
    },
    {
      name: "BCA Tutorial Site",
      link: "https://bca-web-tutorial.netlify.app/",
      desc: "Educational platform providing BCA tutorials.",
      tech: ["React", "Tailwind CSS", "Netlify"],
      category: "Frontend",
    },
    {
      name: "Dev Platform",
      link: "https://dev-platform-frontend-qtfu.vercel.app/",
      desc: "Developer platform for profile and project showcase.",
      tech: ["React", "Tailwind CSS", "Express", "Mongo DB", "Vercel", "Render"],
      category: "MERN Stack",
    },
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Frontend", "MERN Stack"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((proj) => proj.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200"
    >
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">
          🌟 Creative Projects
        </h3>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredProjects.map((proj, index) => (
            <motion.div
              key={proj.name}
              className="rounded-2xl h-[300px] shadow-xl bg-white/50 backdrop-blur-lg border border-white/30 p-6 hover:shadow-2xl transition-all flex flex-col"
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring" }}
            >
              {/* Project Info */}
              <h4 className="text-2xl font-bold mb-3 text-gray-800">
                {proj.name}
              </h4>
              <p className="text-gray-600 mb-4 flex-grow">{proj.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Live Demo Button */}
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo <FaExternalLinkAlt size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
