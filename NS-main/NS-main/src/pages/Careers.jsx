import { useState } from "react";
import { motion } from "framer-motion";

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    bio: "",
    github: "",
    linkedin: "",
    portfolio: "",
    resume: null,
    marks10: null,
    marks12: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("✅ Application submitted! Our team will get in touch soon.");
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });

  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-8 md:px-10 text-white overflow-hidden">
      {/* Header */}
      <motion.h2
        {...fadeUp(0)}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
      >
        Join the Neural Revolution
      </motion.h2>

      <motion.p
        {...fadeUp(0.2)}
        className="text-gray-300 text-center max-w-3xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base md:text-lg leading-relaxed"
      >
        At <span className="text-yellow-400 font-semibold">Neuricorn Syndicate</span>, we’re not
        just hiring — we’re building the next generation of innovators redefining education through
        intelligence, creativity, and technology.
      </motion.p>

      {/* Form */}
      <motion.form
        {...fadeUp(0.3)}
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-[#141414]/70 border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 md:p-10
        backdrop-blur-md shadow-lg shadow-black/40 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8
        hover:border-yellow-400/50 transition-all duration-300"
      >
        {/* Name */}
        <div>
          <label className="block text-xs sm:text-sm text-yellow-400 mb-2">Full Name</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-2.5 sm:p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
            focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs sm:text-sm text-yellow-400 mb-2">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full p-2.5 sm:p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
            focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs sm:text-sm text-yellow-400 mb-2">Phone</label>
          <input
            name="phone"
            type="tel"
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="w-full p-2.5 sm:p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
            focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
            required
          />
        </div>

        {/* DOB */}
        <div>
          <label className="block text-xs sm:text-sm text-yellow-400 mb-2">Date of Birth</label>
          <input
            name="dob"
            type="date"
            onChange={handleChange}
            className="w-full p-2.5 sm:p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
            focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
            required
          />
        </div>

        {/* Bio */}
        <div className="sm:col-span-2">
          <label className="block text-xs sm:text-sm text-yellow-400 mb-2">Short Bio</label>
          <textarea
            name="bio"
            rows="4"
            onChange={handleChange}
            placeholder="Tell us about yourself, your skills, and your goals..."
            className="w-full p-2.5 sm:p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
            focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all resize-none"
            required
          ></textarea>
        </div>

        {/* Uploads */}
        {["resume", "marks10", "marks12"].map((field) => (
          <div key={field}>
            <label className="block text-xs sm:text-sm text-yellow-400 mb-2 capitalize">
              {field === "marks10"
                ? "10th Marksheet"
                : field === "marks12"
                ? "12th Marksheet"
                : "Resume"}
            </label>
            <input
              name={field}
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={handleChange}
              className="w-full text-gray-300 bg-transparent border border-yellow-500/30 rounded-md p-1.5 sm:p-2 cursor-pointer
                file:mr-2 sm:file:mr-3 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-md file:border-0 
                file:bg-yellow-400 file:text-black file:font-semibold hover:file:bg-yellow-300 transition-all text-sm sm:text-base"
              required
            />
          </div>
        ))}

        {/* Social Links */}
        <div>
          <label className="block text-xs sm:text-sm text-yellow-400 mb-2">GitHub</label>
          <input
            name="github"
            type="url"
            placeholder="https://github.com/username"
            onChange={handleChange}
            className="w-full p-2.5 sm:p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
            focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm text-yellow-400 mb-2">LinkedIn</label>
          <input
            name="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/username"
            onChange={handleChange}
            className="w-full p-2.5 sm:p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
            focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs sm:text-sm text-yellow-400 mb-2">Portfolio</label>
          <input
            name="portfolio"
            type="url"
            placeholder="https://yourportfolio.com"
            onChange={handleChange}
            className="w-full p-2.5 sm:p-3 bg-[#0d0d0d] border border-yellow-500/30 rounded-md
            focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="sm:col-span-2 mt-4 py-2.5 sm:py-3 font-semibold text-black rounded-md
          bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300
          shadow-lg shadow-yellow-400/30 transition-all text-sm sm:text-base"
        >
          Submit Application
        </motion.button>
      </motion.form>

      {/* Footer CTA */}
      <motion.div
        {...fadeUp(0.5)}
        className="text-center mt-12 sm:mt-16 text-gray-300 max-w-3xl mx-auto px-4"
      >
        <p className="text-sm sm:text-lg mb-3 sm:mb-4">
          Have questions before applying? Reach us at{" "}
          <span className="text-yellow-400 font-semibold cursor-pointer hover:underline">
            business@neuricornsyndicate.com
          </span>
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          We’re an equal-opportunity company — your skills, ideas, and mindset matter most.
        </p>
      </motion.div>
    </section>
  );
}
