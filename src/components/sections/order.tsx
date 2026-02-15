import Reveal from "../../components/sections/reveal";
import { useState } from "react";
import { motion } from "framer-motion";
import FloatingParticles from "../../components/sections/FloatingParticles";

export default function Order() {
  const [isHovered, setIsHovered] = useState(false);

  const handleRedirect = () => {
    window.open(
      "https://www.instagram.com/kurio_sannn?igsh=bjh5c2Z0NGV0bzRs",
      "_blank"
    );
  };

  return (
    <section id="order" className="relative py-20 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-primary z-0" />

      {/* Animated Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #ff3ace, #ff8a00, #ff3ace)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          scale: isHovered ? 1.05 : 1,
          filter: isHovered ? "brightness(1.2)" : "brightness(1)",
        }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
          filter: { duration: 0.6 },
          backgroundPosition: {
            duration: isHovered ? 3 : 6,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />

      {/* Particles */}
      <FloatingParticles intensity={isHovered ? 2 : 1} />

      <Reveal>
        <motion.div
          className="relative z-20 max-w-4xl mx-auto text-center px-6"
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >

          {/* Small Label */}
          <motion.h3
            className="text-sm font-medium text-light/65 mb-2"
            animate={{
              y: isHovered ? -4 : 0,
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            [ Order ]
          </motion.h3>

          {/* Main Title */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-light mb-3"
            animate={{
              scale: isHovered ? 1.02 : 1,
              textShadow: isHovered
                ? "0px 0px 25px rgba(255,255,255,0.9)"
                : "0px 0px 0px rgba(255,255,255,0)",
            }}
            transition={{ duration: 0.4 }}
          >
            Ready to Work Together?
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-light/70 mb-10"
            animate={{
              y: isHovered ? -4 : 0,
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.4 }}
          >
            Let’s bring your ideas to life with creative visuals and clean execution.
          </motion.p>

        <motion.button
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}

          // ✅ MOBILE SUPPORT
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}

          onClick={handleRedirect}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="
            relative
            inline-block
            mx-auto
            font-medium
            bg-white/30
            backdrop-blur-lg
            border border-white/30
            rounded-full
            px-8 py-3
            shadow-lg
            text-2xl
            overflow-hidden
            text-white
          "
        >

        {/* TEXT */}
        <motion.span
          className="relative z-10"
          animate={{
            scale: isHovered ? 1.03 : 1,
          textShadow: isHovered
            ? `
              0px 0px 30px rgba(255,255,255,1),
              0px 0px 60px rgba(255,255,255,0.9),
              0px 0px 120px rgba(255,255,255,0.8)
            `
            : "none",

          }}

          transition={{ duration: 0.3 }}
        >
          Order Here
        </motion.span>

        {/* STRONGER SHIMMER */}
        <motion.span
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, transparent 25%, rgba(255,255,255,1) 50%, transparent 75%)",
            filter: "blur(12px)", // ✨ bikin kemerlap lebih glowing
          }}
          animate={{
            x: isHovered ? ["-150%", "150%"] : "-150%",
          }}
          transition={{
            duration: isHovered ? 0.8 : 1.6, // ⚡ hover = lebih cepat
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </motion.button>


        </motion.div>
      </Reveal>
    </section>
  );
}
