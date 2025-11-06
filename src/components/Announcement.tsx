import React, { useEffect, useRef } from "react";

const Announcement = () => {
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
    <div
      ref={rootRef}
      className="reveal flex flex-col justify-center items-center"
    >
      <h1 className="text-[#902028] text-3xl font-bold py-13 relative text-center">
        Upcoming Events
        <span className="about-underline"></span>
      </h1>

      <div className="w-[85%] p-15 flex flex-col gap-5 rounded-3xl border border-[#902028]/30 bg-white/20 backdrop-blur-lg shadow-[0_0_35px_rgba(144,32,40,0.4)]">
        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-1">
          <h4 className="text-[#902028] text-2xl font-bold">
            Annual Hackathon 2023
          </h4>
          <p className="text-gray-600">
            <span className="font-bold text-black">Date:</span> November 15–17,
            2023
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black">Location:</span> Computer
            Science Building
          </p>
          <p className="text-gray-600">
            Join us for our annual 48-hours hackathon where teams compete to
            build innovative solutions to real-world problems. Prizes include
            tech gadgets, internship opportunities, and bragging rights!
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-2">
          <h4 className="text-[#902028] text-2xl font-bold">
            Web Development Workshop
          </h4>
          <p className="text-gray-600">
            <span className="font-bold text-black">Date:</span> October 25, 2023
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black">Venue:</span> Room 302, Tech
            Building
          </p>
          <p className="text-gray-600">
            Learn modern web development techniques including React, Node js,
            and responsive design. Perfect for beginners and intermediate
            developers looking to enhance their skills.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-3">
          <h4 className="text-[#902028] text-2xl font-bold">
            Tech Career Fair
          </h4>
          <p className="text-gray-600">
            <span className="font-bold text-black">Date:</span> December 5, 2023
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black">Location:</span> University
            Conference Center
          </p>
          <p className="text-gray-600">
            Connect with top tech companies looking to hire talented students.
            Bring your resume and portfolio for on-the-spot interviews!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
