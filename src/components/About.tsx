import React, { useEffect, useRef } from "react";

const About = () => {
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
    <div ref={rootRef} className="reveal flex flex-col justify-center items-center">
      <h1 className="text-[#902028] text-3xl font-bold py-13 relative text-center">
        About ICON
        <span className="about-underline"></span>
      </h1>

      <div className="w-[85%] p-15 flex flex-col gap-5 rounded-3xl border border-[#902028]/30 bg-white/20 backdrop-blur-lg shadow-[0_0_35px_rgba(144,32,40,0.4)]">

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-1">
          <h4 className="text-[#902028] text-2xl font-bold">Our History</h4>
          <p className="text-gray-600">
            ICON (IT Club of Nerds) was established in 2018 by a group of
            passionate computer science students who wanted to create a community
            for tech enthusiasts. What started as a small group of coding enthusiasts
            has grown into one of the most active and innovative student organizations
            on campus.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-2">
          <h4 className="text-[#902028] text-2xl font-bold">Our Mission</h4>
          <p className="text-gray-600">
            Our mission is to foster a collaborative environment where IT students
            can enhance their technical skills, work on real-world projects, and
            prepare for careers in the technology industry. We believe in learning
            by doing and creating solutions that make a difference.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-3">
          <h4 className="text-[#902028] text-2xl font-bold">What We Do</h4>
          <p className="text-gray-600">
            ICON organizes hackathons, coding competitions, workshops on emerging
            technologies, and networking events with industry professionals. Our
            members work on projects ranging from web and mobile applications to AI
            and cybersecurity solutions.
          </p>
          <p className="text-gray-600">
            Throughout the years, ICON has continued to uphold its motto:
            "Code, Create, Innovate." We've helped hundreds of students develop their
            technical skills, build impressive portfolios, and connect with potential
            employers.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
