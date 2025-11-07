import { useEffect, useRef } from "react";

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
          <h4 className="text-[#902028] text-2xl font-bold">INTRAMURALS</h4>
          <p className="text-gray-600">
            <span className="font-bold text-black">Date: </span>
            March 2025
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black">Venue:</span> Magnificat
            Center
          </p>
          <p className="text-gray-600">
            Get ready to cheer, compete, and celebrate unity at this year’s
            Intramurals! Experience thrilling sports competitions, team-building
            activities, and showcases of talent and school spirit as students
            from different departments come together for friendly rivalry and
            fun.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-2">
          <h4 className="text-[#902028] text-2xl font-bold">Christmas Party</h4>
          <p className="text-gray-600">
            <span className="font-bold text-black">Date:</span> December 2025
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black">Venue:</span> To Be Announce!
          </p>
          <p className="text-gray-600">
            Celebrate the season of joy and togetherness with laughter, music,
            and meaningful memories. Join us for a festive night filled with
            games, performances, gift-giving, and the spirit of unity that
            brings our community closer together.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-3">
          <h4 className="text-[#902028] text-2xl font-bold">
            College Graduation Ceremony
          </h4>
          <p className="text-gray-600">
            <span className="font-bold text-black">Date:</span> April 2026
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black">Venue:</span> Magnificat
            Center
          </p>
          <p className="text-gray-600">
            Celebrate the culmination of years of hard work, growth, and
            achievement. Join us as we honor our graduating students for their
            dedication and success, marking the beginning of new journeys and
            endless possibilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
