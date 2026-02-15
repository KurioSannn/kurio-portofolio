import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { galeriData } from "../../data/galeri";

export default function PortfolioMarquee() {
  const artworks = galeriData;

  const looped = useMemo(() => [...artworks, ...artworks], [artworks]);

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-28 bg-light overflow-hidden relative" id="portfolio">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <h3 className="text-sm font-medium text-dark/25 mb-2">
          [ Portofolio ]
        </h3>
        <h2 className="text-3xl text-dark md:text-6xl font-bold">
          Showcase Portfolio
        </h2>
        <p className="text-dark/70 mt-3">
          Selected artworks & recent projects
        </p>
      </div>

      {/* FADE LEFT */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-light to-transparent z-20 pointer-events-none" />

      {/* FADE RIGHT */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-light to-transparent z-20 pointer-events-none" />

      {/* MARQUEE */}
      <div className="flex gap-6 overflow-visible">
        <div className="marquee flex gap-10 w-max">
          {looped.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              whileHover={{
                y: -12,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="
                relative
                w-[260px] h-[360px]
                rounded-2xl
                flex-shrink-0
                cursor-pointer
                shadow-lg
                shadow-dark/20
              "
            >
              {/* GRADIENT BORDER */}
              <div
                className="
                absolute inset-0
                rounded-2xl
                p-[2px]
                bg-gradient-to-r
                from-orange-400
                via-pink-400
                to-orange-400
                bg-[length:200%_200%]
                animate-borderFlow
                transition-all duration-500
                group-hover:shadow-2xl
              "
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="group relative w-full h-full object-cover transition duration-700 hover:scale-105 group-hover:brightness-110 group-hover:contrast-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN PREVIEW */}
      {active !== null && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <motion.img
            src={looped[active].image}
            alt={looped[active].title}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-h-[85vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
