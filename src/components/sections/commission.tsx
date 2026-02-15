import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../../components/sections/reveal";
import chara1 from "../../assets/makoto.png";
import chara2 from "../../assets/takashi.png";
import chara3 from "../../assets/unmei.png";
import chara4 from "../../assets/design.png";

type CommissionItem = {
  image: string;
  title: string;
  price: string;
};

export default function Commission() {

  const commissions: CommissionItem[] = [
    { image: chara1, title: "HEADSHOT", price: "Rp 25.000" },
    { image: chara2, title: "BUST UP", price: "Rp 50.000" },
    { image: chara3, title: "FULL BODY", price: "Rp 100.000" },
    { image: chara4, title: "ILLUSTRATIONS", price: "Rp 125.000" },
    { image: chara4, title: "DESIGN", price: "Rp 35.000" }
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % commissions.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, commissions.length]);

  const whiteParticles = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="relative py-24" id="commission">

      <div className="absolute inset-0 bg-gradient-to-br 
        from-[#ff3ace]/90 
        via-[#ff8a00]/90 
        to-[#ffb347]/90" 
      />

      <div className="absolute inset-0 bg-black/10" />

      {/* Sparkle */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
        {whiteParticles.map((p, i) => (
          <span
            key={i}
            className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-70 animate-sparkle shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <Reveal>
        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="mb-14">
            <h3 className="text-sm font-medium text-light/70 mb-2">
              [ Commission ]
            </h3>

            <h2 className="text-light text-3xl md:text-6xl font-bold leading-tight">
              Commission & Work Process
            </h2>

            <p className="text-light/80 max-w-2xl text-xl mt-3 font-light">
              Choose your commission type. Clean workflow, transparent pricing,
              professional result.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-5">
              {commissions.map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border ${
                    i === index
                      ? "bg-white/30 backdrop-blur-lg border-white/40 shadow-xl scale-[1.02]"
                      : "border-white/20 hover:bg-white/20"
                  }`}
                  onClick={() => setIndex(i)}
                >
                  <h3 className="text-light text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-light/80">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div
              className="relative h-[420px] lg:h-[550px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="commission-border h-full">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    >
                      <img
                        src={commissions[index].image}
                        alt={commissions[index].title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                        <motion.h3
                          initial={{ y: 40, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-white text-2xl font-bold"
                        >
                          {commissions[index].title}
                        </motion.h3>

                        <motion.p
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-white/80 text-base"
                        >
                          {commissions[index].price}
                        </motion.p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>
            </div>

          </div>
        </div>
      </Reveal>

      {/* FULLSCREEN MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={commissions[index].image}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            alt="Preview"
          />
        </div>
      )}

    </section>
  );
}
