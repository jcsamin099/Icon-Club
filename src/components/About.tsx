import { useEffect, useRef } from "react";

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
    <div
      ref={rootRef}
      className="reveal flex flex-col justify-center items-center"
    >
      <h1 className="text-[#902028] text-3xl font-bold py-13 relative text-center">
        About JSWAP & JFINEX
        <span className="about-underline"></span>
      </h1>

      <div className="w-[85%] p-15 flex flex-col gap-5 rounded-3xl border border-[#902028]/30 bg-white/20 backdrop-blur-lg shadow-[0_0_35px_rgba(144,32,40,0.4)]">
        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-1">
          <h4 className="text-[#902028] text-2xl font-bold">Our History</h4>
          <p className="text-gray-600">
            JSWAP (Junior Social Work Association of the Philippines) and JFINEX
            (Junior Financial Executives) are two dynamic student organizations
            at the College of the Immaculate Conception that embody excellence
            in both service and leadership. JFINEX was founded to unite aspiring
            business professionals passionate about finance, management, and
            entrepreneurship, while JSWAP was formed to empower future social
            workers with compassion, advocacy, and community engagement.
            Together, they represent a balance between strategic thinking and
            social responsibility within the academic community.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-2">
          <h4 className="text-[#902028] text-2xl font-bold">Our Mission</h4>
          <p className="text-gray-600">
            Our mission is to cultivate student leaders who embody both
            financial wisdom and social empathy. JFINEX strives to develop
            financially literate, ethically driven professionals ready to lead
            in the business world. JSWAP aims to inspire socially responsible
            advocates committed to promoting human welfare and community
            empowerment. Together, we seek to foster collaboration between
            fields — proving that success in business and compassion in service
            can create sustainable, meaningful change.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 reveal-section delay-3">
          <h4 className="text-[#902028] text-2xl font-bold">What We Do</h4>
          <p className="text-gray-600">
            JFINEX conducts financial literacy seminars, entrepreneurship fairs,
            business forums, and inter-school competitions that hone financial
            management and leadership abilities.
          </p><br />
          <p className="text-gray-600">
            JSWAP organizes community outreach programs, social awareness
            campaigns, training workshops, and advocacy projects that promote
            empowerment and social justice.
          </p><br />
          <p className="text-gray-600">
            Jointly, both clubs collaborate on initiatives that combine business
            insight with social impact — preparing members to lead with both
            competence and conscience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
