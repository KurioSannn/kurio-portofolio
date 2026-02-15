import { Mail, Phone } from "lucide-react";
import Reveal from "../../components/sections/reveal";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-14" id="contact">
    <Reveal>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* Branding */}
        <div>
          <h3 className="text-xl text-light font-semibold">
            Cleo Firman Ferdinand
          </h3>
          <p className="text-sm text-light/60 mt-1">
            Illustrator & Graphic Designer
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 text-sm">

          <a
            href="mailto:cleopasker@gmail.com"
            className="flex items-center gap-2 hover:text-light transition"
          >
            <Mail size={18} />
            cleopasker@gmail.com
          </a>

          <a
            href="https://wa.me/6285646458409"
            target="_blank"
            className="flex items-center gap-2 hover:text-light transition"
          >
            <Phone size={18} />
            +62 856-4645-8409
          </a>

        </div>

        {/* Copyright */}
        <div className="text-sm text-light/50 ">
          © {new Date().getFullYear()} All rights reserved.
        </div>

      </div>
      </Reveal>
    </footer>
  );
}
