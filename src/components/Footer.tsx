import { useEffect, useRef } from "react";

import Discord from "../assets/Discord.png";
import LinkedIn from "../assets/LinkedIn.png";
import GitHub from "../assets/GitHub.png";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const underline = el.querySelector(".about-underline");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("show");
            underline?.classList.add("show");
          } else {
            el.classList.remove("show");
            underline?.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="reveal flex flex-col items-center justify-center bg-[#6a0d0d] text-gray-200 py-10 border-t border-red-900/40"
    >
      {/* Title */}
      <h1 className="text-white text-2xl font-bold mb-6 text-center">
        Get in Touch with JSWAP & JFINEX
        <span className="about-underline"></span>
      </h1>

      {/* Content Grid */}
      <div className="w-[85%] grid grid-cols-1 md:grid-cols-3 gap-10 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_35px_rgba(144,32,40,0.4)]">
        {/* CONTACT */}
        <div className="reveal-section delay-1 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-white mb-3 border-b border-gray-400 w-fit pb-1">
            Contact JSWAP or JFINEX
          </h2>
          <p className="text-gray-200 flex items-start">
            <span className="mr-2 text-white/80">📍</span>
            Computer Science Department, University Campus
          </p>
          <p className="text-gray-200 flex items-center">
            <span className="mr-2 text-white/80">📞</span>
            (123) 456-7890
          </p>
          <p className="text-gray-200 flex items-center">
            <span className="mr-2 text-white/80">✉️</span>
            jswap@cic.edu.ph
          </p>
          <p className="text-gray-200 flex items-center">
            <span className="mr-2 text-white/80">✉️</span>
            jfinex@cic.edu.ph
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="reveal-section delay-2 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-white mb-3 border-b border-gray-400 w-fit pb-1">
            Quick Links
          </h2>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About JSWAP & JFINEX
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-white transition">
                Events
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* FOLLOW ICON */}
        <div className="reveal-section delay-3 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-white mb-3 border-b border-gray-400 w-fit pb-1">
            Follow JSWAP & JFINEX
          </h2>
          <div className="flex space-x-5 mt-3">
            <a href="#" className="hover:opacity-80 transition">
              <img src={GitHub} alt="GitHub" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={Discord} alt="Discord" className="w-7 h-7" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={LinkedIn} alt="LinkedIn" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-300 mt-10 border-t border-gray-700 pt-4">
        © 2023 ICON - IT Club of Nerds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
