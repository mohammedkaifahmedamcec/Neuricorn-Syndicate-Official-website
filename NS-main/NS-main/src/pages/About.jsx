import { motion } from "framer-motion";

export default function About() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: "easeOut" },
  });

  const stats = [
    { icon: "👩‍🎓", title: "50K+ Students", desc: "Empowered globally" },
    { icon: "🏫", title: "200+ Institutions", desc: "Trusted network" },
    { icon: "⚙️", title: "99.9% Uptime", desc: "Reliable neural cloud systems" },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 flex flex-col items-center text-white overflow-hidden opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
      {/* Header */}
      <motion.h2
        {...fadeUp(0)}
        className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
      >
        About Us
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-gray-300 max-w-3xl text-center mb-16 text-lg leading-relaxed"
      >
        <span className="text-yellow-400 font-semibold">Neuricorn Syndicate</span>{" "}
        pioneers the future of education technology through neural-network-based
        automation, blockchain security, and AI-driven intelligence. We design
        next-gen solutions that empower institutions to streamline assessments,
        grading, and personalized learning — redefining how intelligence fuels
        education.
      </motion.p>

      {/* Core Philosophy / Mission Card */}
      <motion.div
        {...fadeUp(0.4)}
        whileHover={{ scale: 1.03 }}
        className="bg-[#141414]/70 border border-[#2a2a2a] rounded-2xl p-10 max-w-4xl mx-auto mb-20 text-center backdrop-blur-md shadow-lg hover:border-yellow-400 transition-all"
      >
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
          “Empowering Minds with Neural Intelligence”
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Our vision is to merge artificial intelligence, data transparency, and
          human creativity to build a decentralized educational ecosystem. We’re
          not just building tools — we’re building the neural foundation for the
          future of learning.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.6 + i * 0.2)}
            whileHover={{ scale: 1.05 }}
            className="relative p-8 bg-[#0d0d0d]/70 border border-[#2a2a2a] rounded-2xl backdrop-blur-md
              hover:border-yellow-400 shadow-md shadow-black/40 transition-all duration-300 text-center overflow-hidden"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-1">
              {item.title}
            </h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>

            {/* Neural pulse line */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
