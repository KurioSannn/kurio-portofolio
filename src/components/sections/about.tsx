import chara from "../../assets/PORTO.jpg";
import figma from "../../assets/icons/icons8-figma.svg";
import gopaint from "../../assets/icons/gopaint.png";
import ibis from "../../assets/icons/icons8-ibis-paint-x.svg";
import canva from "../../assets/icons/icons8-canva.svg";
import Reveal from "../../components/sections/reveal";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 🔥 modal state

  /* INTERSECTION OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* ESC CLOSE */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const skills = [
    { name: "Figma", icon: figma, level: 4 },
    { name: "Gopaint", icon: gopaint, level: 5 },
    { name: "Ibis Paint", icon: ibis, level: 5 },
    { name: "Canva", icon: canva, level: 5 },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 bg-light overflow-hidden"
    >

      {/* WAVES */}
      <svg
        className="absolute inset-0 w-[200%] -left-[50%] h-full z-0"
        viewBox="0 0 2000 650"
        preserveAspectRatio="none"
      >
        <defs>
          <style>
            {`
            .wave-left {
              animation: slideLeft 20s linear infinite alternate;
            }

            .wave-right {
              animation: slideRight 18s linear infinite alternate;
            }

            @keyframes slideLeft {
              0% { transform: translateX(-600px); }
              100% { transform: translateX(500px); }
            }

            @keyframes slideRight {
              0% { transform: translateX(500px); }
              100% { transform: translateX(-600px); }
            }
            `}
          </style>
        </defs>

        <g className={`${isVisible ? "wave-left" : ""} opacity-15`}>
          {[100, 200, 300, 400, 500].map((y, i) => (
            <path
              key={"l" + i}
              d={`M-200,${y}
                  C300,${y + 100}
                  700,${y - 100}
                  1200,${y}
                  S1800,${y + 100}
                  2200,${y}`}
              stroke="#FFA600"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </g>

        <g className={`${isVisible ? "wave-right" : ""} opacity-30`}>
          {[150, 250, 350, 450, 550].map((y, i) => (
            <path
              key={"r" + i}
              d={`M-200,${y}
                  C300,${y - 100}
                  700,${y + 100}
                  1200,${y}
                  S1800,${y - 100}
                  2200,${y}`}
              stroke="#FFA600"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </g>
      </svg>

      <Reveal>
        <div className="relative z-10 max-w-6xl mx-auto px-8 grid md:grid-cols-[45%_55%] gap-4 items-stretch mt-8">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div
              className="gradient-border w-full max-w-md h-[520px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={chara}
                className="w-full h-full object-cover"
                alt="Cleo"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-between h-[520px]">

            <div>
              <h2 className="text-sm font-medium text-dark opacity-50 mb-2">
                [ About Me ]
              </h2>

              <div className="text-dark leading-relaxed space-y-3">
                <p>
                  Halo, saya{" "}
                  <span className="font-semibold text-dark">
                    Cleo Firman Ferdinand
                  </span>. Saya adalah mahasiswa dengan minat besar di bidang Informatika.
                </p>

                <p>
                  Aktif sebagai <span className="font-medium">Illustrator</span> dan{" "}
                  <span className="font-medium">Graphic Designer</span>.
                </p>

                <p>
                  Saya menggabungkan kemampuan teknis IT dengan kreativitas visual
                  untuk menghasilkan karya estetis dan fungsional.
                </p>

                <p className="pt-1">Beberapa software yang saya gunakan:</p>
              </div>

              {/* SKILLS */}
              <div className="mt-4 space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-5 mb-4">
                      <img src={skill.icon} className="w-8 h-8" />
                      <span className="text-sm font-medium text-dark">
                        {skill.name}
                      </span>
                      <span className="ml-auto text-sm text-dark/80">
                        {skill.level}/5
                      </span>
                    </div>

                    <div className="w-full bg-gray-200/60 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 🔥 FULLSCREEN MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={chara}
              className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              alt="Full Preview"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-md transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
