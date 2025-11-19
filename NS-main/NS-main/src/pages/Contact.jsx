import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7 },
    viewport: { once: true, amount: 0.2 }, // triggers earlier
  });

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 text-white overflow-hidden">
      {/* Heading */}
      <motion.h2
        {...fadeUp()}
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        {...fadeUp(0.2)}
        className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
      >
        Whether you’re curious about our neural systems, want a product demo, or
        have partnership ideas — we’d love to hear from you.
      </motion.p>

      {/* Contact Form */}
      <motion.div
        {...fadeUp(0.4)}
        className="max-w-3xl mx-auto bg-[#141414]/70 border border-[#2a2a2a] rounded-2xl p-10 backdrop-blur-md shadow-lg shadow-black/40 hover:border-yellow-400/50 transition-all"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <motion.div {...fadeUp(0.1)}>
            <label className="block text-sm text-yellow-400 mb-2">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div {...fadeUp(0.2)}>
            <label className="block text-sm text-yellow-400 mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </motion.div>

          {/* Message */}
          <motion.div {...fadeUp(0.3)}>
            <label className="block text-sm text-yellow-400 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            {...fadeUp(0.5)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="relative w-full py-3 font-semibold text-black rounded-md overflow-hidden transition-all
            bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 shadow-lg shadow-yellow-400/30"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 opacity-0 hover:opacity-20 transition bg-white rounded-md" />
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Info / Social Links */}
      <motion.div
        {...fadeUp(0.6)}
        className="mt-20 text-center text-gray-300 max-w-3xl mx-auto"
      >
        <p className="mb-6 text-lg">
          Prefer direct communication? Reach us at{" "}
          <span className="text-yellow-400 font-semibold cursor-pointer hover:underline">
            business@neuricornsyndicate.com
          </span>
        </p>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            title="LinkedIn"
          >
            🔗
          </a>
          <a href="#" className="hover:text-yellow-400 transition" title="Twitter">
            🐦
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            title="Instagram"
          >
            📸
          </a>
        </div>
      </motion.div>
    </section>
  );
}
