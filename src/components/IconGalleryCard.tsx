import React from "react";

const IconGalleryCard = () => {
  const galleries = [
    {
      id: 1,
      image: "/public/images/Hackathon.jpg",
      title: "Hackathon 2022",
      description:
        "Our annual hackathon brought together over 150 students to create innovative tech solutions.",
    },
    {
      id: 2,
      image: "/public/images/Workshop.jpg",
      title: "Team Projects",
      description:
        "Students collaborating on various software development projects throughout the semester.",
    },
    {
      id: 3,
      image: "/public/images/iconclub.jpg",
      title: "Workshop Series",
      description:
        "Hands-on workshops covering topics from AI to cybersecurity and web development.",
    },
    {
      id: 4,
      image: "/public/images/IndustryConnection.jpg",
      title: "Industry Connections",
      description:
        "Networking events with tech companies and alumni working in theindustry.",
    },
  ];

  return (
    <div className="w-[85%] mx-auto flex flex-wrap justify-center gap-5 mt-10">
      {galleries.map((gallery) => (
        <div
          key={gallery.id}
          className="w-[250px] h-[320px] p-5 rounded-2xl bg-white/30 backdrop-blur-md border border-[#902028]/30 shadow-[0_0_25px_rgba(144,32,40,0.25)] hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center text-center"
        >
          <img
            src={gallery.image}
            alt={gallery.title}
            className="w-full h-[150px] object-cover rounded-xl border border-[#902028]/40"
          />

          <h3 className="text-[#902028] text-xl font-bold mt-3">
            {gallery.title}
          </h3>
          <p className="text-gray-600 mt-1 break-words">
            {gallery.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IconGalleryCard;
