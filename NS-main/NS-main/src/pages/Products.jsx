import { motion } from "framer-motion";

const products = [
  {
    title: "WebChain",
    subtitle: "Blockchain Question Papers",
    description:
      "Automated question paper generation using blockchain-verified content and DevOps pipelines for secure, tamper-proof assessments.",
    icon: "🔗",
  },
  {
    title: "NeuraGrade",
    subtitle: "AI Grading System",
    description:
      "AI-powered grading system with ML-based evaluation and intelligent feedback generation.",
    icon: "🤖",
  },
  {
    title: "NeuraScan",
    subtitle: "Smart Mark Processing",
    description:
      "Mark sheet automation using computer vision for seamless academic record management.",
    icon: "📊",
  },
  {
    title: "Training & Placement",
    subtitle: "Career Development Hub",
    description:
      "Industry-aligned training programs and placement guidance platform for students.",
    icon: "🎓",
  },
];

export default function Products() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7 },
    viewport: { once: true, amount: 0.2 }, // triggers earlier
  });


  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 text-white overflow-hidden">
      <motion.h2
        {...fadeUp()}
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
      >
        Our Products
      </motion.h2>

      <motion.p
        {...fadeUp(0.2)}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
      >
        Revolutionary EdTech solutions powered by neural intelligence and
        blockchain innovation — redefining how education evolves in the digital era.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.1)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,215,0,0.15)",
            }}
            className="group relative bg-[#0d0d0d]/70 border border-[#2a2a2a] rounded-2xl p-8
              backdrop-blur-md hover:border-yellow-400 transition-all duration-300 overflow-hidden"
          >
            {/* Glowing background effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent blur-2xl" />

            <div className="relative z-10">
              <div className="text-5xl mb-5">{p.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3 italic">
                {p.subtitle}
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                {p.description}
              </p>
            </div>

            {/* Accent glow line at bottom */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
