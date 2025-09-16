import { motion } from "framer-motion";

export const Navbar = ()=>{
  return (
      <motion.nav
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-[20px] lg:text-3xl xl:text-3xl font-bold font-sarif text-blue-600">Portfolio</h1>
          <ul className="flex space-x-6 font-medium ml-4">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#2563EB" }}
              >
                {/* 👇 clicking scrolls smoothly */}
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>  
  );
} 