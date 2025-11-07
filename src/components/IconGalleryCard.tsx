import JFINEXXMAS from "../assets/JFINEXXMAS.jpg";
import JSWAPxJFINEX from "../assets/JSWAPxJFINEX.jpg";
import CelebrationSeries from "../assets/CelebrationSeries.jpg";
import JSWAPLICENSURE from "../assets/JSWAPLICENSURE.jpg"

const IconGalleryCard = () => {
  const galleries = [
    {
      id: 1,
      image: JFINEXXMAS,
      title: "Christmas Giving",
      description:
        "LOOK: The JFINEX club Christmas Gift giving at Bajau Community, Bakod Bayan, Cabanatuan City",
    },
    {
      id: 2,
      image: JSWAPxJFINEX,
      title: "Team Projects",
      description:
        "Working hand in hand with the NSTP Students of Junior Social Workers’ Association of the Philippines",
    },
    {
      id: 3,
      image: CelebrationSeries,
      title: "Celebration Series",
      description:
        "To remind every CICian that caring for one’s mental health is a vital part of living with purpose and joy. ",
    },
    {
      id: 4,
      image: JSWAPLICENSURE,
      title: "JSWAP Licensure Examination",
      description:
        "Conducted a tribute to Social Work Licensure Examination Board Passers",
    },
  ];

  return (
    <div className="w-[85%] mx-auto flex flex-wrap justify-center gap-5 mt-10">
      {galleries.map((gallery) => (
        <div
          key={gallery.id}
          className="w-[250px] h-80 p-5 rounded-2xl bg-white/30 backdrop-blur-md border border-[#902028]/30 shadow-[0_0_25px_rgba(144,32,40,0.25)] hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center text-center"
        >
          <img
            src={gallery.image}
            alt={gallery.title}
            className="w-full h-[150px] object-cover rounded-xl border border-[#902028]/40"
          />

          <h3 className="text-[#902028] text-xl font-bold mt-3">
            {gallery.title}
          </h3>
          <p className="text-gray-600 mt-1 wrap-break-words">
            {gallery.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IconGalleryCard;
