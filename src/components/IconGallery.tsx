import { useEffect, useRef } from "react";
import IconGalleryCard from "./IconGalleryCard";

const IconGallery = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
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
    <div className="flex flex-col items-center">
      <div
        ref={rootRef}
        className="reveal flex flex-col justify-center items-center"
      >
        <h1 className="text-[#902028] text-3xl font-bold py-13 relative text-center">
          Icon Gallery
          <span className="about-underline"></span>
        </h1>
      </div>

      <IconGalleryCard />

      <div className="flex gap-4 mt-8">
        <span
          className="text-white border-none font-bold px-4 py-3 rounded-full bg-[#902028] cursor-pointer
  transition-all duration-200 ease-in-out
  hover:bg-white hover:text-[#902028] hover:shadow-lg hover:scale-105
  text-sm sm:text-base md:text-lg"
        >
          Add Project
        </span>

        <span
          className="text-white border-none font-bold px-4 py-3 rounded-full bg-[#902028] cursor-pointer
  transition-all duration-200 ease-in-out
  hover:bg-white hover:text-[#902028] hover:shadow-lg hover:scale-105
  text-sm sm:text-base md:text-lg"
        >
          Join ICON
        </span>
      </div>
    </div>
  );
};

export default IconGallery;
