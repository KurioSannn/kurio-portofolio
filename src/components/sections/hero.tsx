import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import kurio from "../../assets/kurioSannn.png";
import { useMemo } from "react";
// import Reveal from "../components/Reveal";

export default function Hero() {

  /* ================= HEADLINES ================= */
  const headlines = [
    "WELCOME COMRADES",
    "HOW ARE YOU?",
    "HALLO I'M KURIO GUYS",
    "NICE TO MEET YOU",
    "IM VTUBER ?!",
    "TQ FOR VISITING"
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

const colors = [
  "bg-pink-300",
  "bg-orange-300",
  "bg-yellow-200",
];

const particles = useMemo(() => {
  return Array.from({ length: 50 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
}, []);

  /* ================= TYPING LOOP ================= */
  const fullText =
    "Terimakasih sudah berkunjung di website Kurio. Senang bertemu denganmu!";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting = false;

    const typing = setInterval(() => {
      if (!deleting) {
        setTypedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length + 50) deleting = true;
      } else {
        setTypedText(fullText.slice(0, i));
        i--;
        if (i === 0) deleting = false;
      }
    },55);

    return () => clearInterval(typing);
  }, []);

  return (
<section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
  id="hero">

  {/* Sparkle Particles */}
<div className="pointer-events-none absolute inset-0 overflow-hidden z-50">
  {particles.map((p, i) => (
    <span
      key={i}
      className={`
  absolute w-[2px] h-[2px]
  rounded-full
  animate-sparkle
  opacity-80
  ${p.color}
  shadow-[0_0_8px_rgba(255,200,150,0.8)]
`}

      style={{
        top: `${p.top}%`,
        left: `${p.left}%`,
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.duration}s`,
      }}
    />
  ))}
</div>

{/* === BACKGROUND CHARACTER === */}
<motion.div
  initial={{ scale: 1.15 }}
  animate={{ scale: 1.05 }}
  transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
  className="absolute inset-0 bg-no-repeat bg-cover bg-[center_20%]"
  style={{ backgroundImage: `url(${kurio})` }}
/>

{/* Soft Dark Overlay (TIPIS AJA) */}
<div className="absolute inset-0 bg-black/30" />

{/* Warm Gradient Depth (TRANSPARENT) */}
<div className="absolute inset-0 bg-gradient-to-br 
  from-[#ff3ace]/40 
  via-transparent 
  to-[#ffb347]/60"
/>

  {/* Radial Center Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />

  {/* Floating Light Orbs */}
  <div className="absolute w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-3xl -top-40 -left-40 animate-pulse" />
  <div className="absolute w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse" />

  {/* ===== CONTENT ===== */}
  <div className="relative z-10 max-w-6xl mx-auto">

    {/* TITLE */}
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="font-bold text-white"
    >
      <span className="block text-5xl md:text-6xl tracking-wide">
        KURIO COMMISSION
      </span>

      <div className="min-h-[80px] md:min-h-[110px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={textIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
              className="
                text-[clamp(32px,9vw,100px)]
                leading-[1.1]
                text-center
                px-2
                bg-gradient-to-r from-primary via-pink-500 to-orange-500
                bg-clip-text text-transparent
              ">
            {headlines[textIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.h1>

    {/* SUBTEXT */}
    <p className="mt-8 text-white text-lg min-h-[60px] opacity-90">
      {typedText}
      <span className="animate-pulse">|</span>
    </p>

    {/* STATUS BOX */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
        className="
          mt-12
          backdrop-blur-xl
          bg-white/20
          border border-white/30
          rounded-3xl md:rounded-full
          px-6 py-6 md:px-10 md:py-4
          flex flex-col md:flex-row
          items-center
          gap-4 md:gap-10
          text-base
          shadow-2xl
          text-white
          w-full md:w-fit
          max-w-sm md:max-w-none
          mx-auto
        ">
      <div>
        <p className="text-sm text-white/70">
          Status Commission :
        </p>
        <p className="font-semibold">Open to order</p>
      </div>

      <div className="hidden md:block w-px h-10 bg-white/40" />

      <div>
        <p className="text-sm text-white/70">
          Order info :
        </p>
        <p className="font-semibold">0 of 5 slots</p>
      </div>

      <div className="hidden md:block w-px h-10 bg-white/40" />

  <motion.a
    href="https://www.instagram.com/kurio_sannn?igsh=bjh5c2Z0NGV0bzRs"
    target="_blank"
    rel="noopener noreferrer"
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.1 }}
    className="
      bg-white
      text-primary
      px-6 py-2
      rounded-full
      font-medium
      shadow-lg
      cursor-pointer
    "
  >
    Order Here ↗
  </motion.a>

    </motion.div>

  </div>
</section>
  );
}
