import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Animate on mount instead of whileInView
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: "easeOut" },
  });

  return (
    <main className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-24">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            {...fadeUp(0)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Advanced{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              SaaS solutions
            </span>{" "}
            powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              AI and blockchain technology
            </span>{" "}
            for modern educational institutions
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-gray-300 text-base sm:text-lg mt-6 max-w-2xl mx-auto"
          >
            Cutting-edge AI-powered tools transforming educational workflows
            with neural intelligence.
          </motion.p>

          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/30"
            >
              Explore Our Solutions
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-32 px-6 sm:px-12 md:px-24">
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <motion.div
            {...fadeUp(0.2)}
            whileHover={{ scale: 1.03 }}
            className="p-10 bg-[#141414]/60 border border-[#2a2a2a] rounded-2xl backdrop-blur-sm hover:border-yellow-400 shadow-lg shadow-black/40 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 drop-shadow-[0_0_12px_rgba(255,215,0,0.3)]">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At{" "}
              <span className="text-yellow-400 font-semibold">
                Neuricorn Syndicate
              </span>
              , we envision a decentralized educational ecosystem driven by
              neural intelligence — where automation, transparency, and
              creativity coexist seamlessly. Our goal is to build intelligent
              systems that adapt and evolve with every learner — fostering truly
              personalized education across the world.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            {...fadeUp(0.4)}
            whileHover={{ scale: 1.03 }}
            className="p-10 bg-[#141414]/60 border border-[#2a2a2a] rounded-2xl backdrop-blur-sm hover:border-yellow-400 shadow-lg shadow-black/40 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 drop-shadow-[0_0_12px_rgba(255,215,0,0.3)]">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to redefine the learning experience by integrating
              advanced AI-driven tools and blockchain-secured systems into
              education. We aim to empower institutions, educators, and students
              through intelligent analytics, transparent certification, and
              adaptive neural systems — ensuring efficiency, trust, and
              innovation in every interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Neuricorn Syndicate */}
      <section className="relative py-32 text-center px-6 sm:px-12 md:px-24">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
          >
            Why Choose{" "}
            <span className="text-orange-400">Neuricorn Syndicate</span>?
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Because we merge innovation with purpose — blending neural
            intelligence, blockchain transparency, and human-centered design to
            transform how the world learns, teaches, and evolves.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left"
          >
            {[
              {
                title: "Neural-Powered Intelligence",
                desc: "We design adaptive AI systems that grow smarter with real educational data.",
              },
              {
                title: "Blockchain Security",
                desc: "Every transaction, credential, and academic record is verified and immutable.",
              },
              {
                title: "Seamless Integration",
                desc: "Our SaaS tools blend effortlessly with existing EdTech infrastructures.",
              },
              {
                title: "Transparent Insights",
                desc: "Real-time analytics empower educators and institutions with clarity and control.",
              },
              {
                title: "Future-Ready Innovation",
                desc: "We continuously evolve to stay ahead in AI, blockchain, and neural systems.",
              },
              {
                title: "Global Impact",
                desc: "Our goal is not just to digitize education, but to democratize it worldwide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp(0.5 + index * 0.1)} // Staggered entrance
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-[#141414]/50 border border-[#2a2a2a] rounded-2xl backdrop-blur-sm hover:border-yellow-400 transition-all"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
