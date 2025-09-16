import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
    const [emailLink, setEmailLink] = useState("");

    useEffect(() => {
        // Simple mobile detection
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            // Mobile → Gmail app / default mail app
            setEmailLink("mailto:anuragnayak78910@gmail.com");
        } else {
            // Desktop → Gmail web
            setEmailLink(
                "https://mail.google.com/mail/?view=cm&fs=1&to=anuragnayak78910@gmail.com"
            );
        }
    }, []);
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-600 mb-6">
                    Feel free to reach out for collaboration, internship opportunities, or just a friendly chat!
                </p>

                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mb-8 text-left space-y-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg"><strong>📞 Phone:</strong> +91 85114 10560</p>
                    <p className="text-lg">
                        <strong>📧 Email:</strong>{" "}
                        <a
                            href={emailLink}
                            target={emailLink.startsWith("http") ? "_blank" : undefined}
                            rel={emailLink.startsWith("http") ? "noreferrer" : undefined}
                            className="text-blue-600 hover:underline"
                        >
                            anuragnayak78910@gmail.com
                        </a>
                    </p>
                    <p className="text-lg"><strong>📍 Location:</strong> Ahmedabad, Gujarat, India</p>
                    <p className="text-lg">
                        <strong>💻 GitHub:</strong>{" "}
                        <a
                            href="https://github.com/Anurag19-web"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            github.com/Anurag19-web
                        </a>
                    </p>
                    <p className="text-lg">
                        <strong>🔗 LinkedIn:</strong>{" "}
                        <a
                            href="https://www.linkedin.com/in/anurag-nayak-4a7b72358/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            linkedin.com/in/your-linkedin
                        </a>
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center space-x-6 text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <a
                        href={emailLink}
                        target={emailLink.startsWith("http") ? "_blank" : undefined}
                        rel={emailLink.startsWith("http") ? "noreferrer" : undefined}
                        className="hover:text-blue-600"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/Anurag19-web"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/your-linkedin"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600"
                    >
                        <FaLinkedin />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}