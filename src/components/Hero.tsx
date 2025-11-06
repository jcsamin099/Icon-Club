
import HeroBG from "../assets/IconHero.jpg";

const Hero = () => {
  return (
    <div
  className="w-full h-[60vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex items-start justify-center bg-fixed"
  style={{ backgroundImage: `url(${HeroBG})` }}
>

      <div className="w-full flex flex-wrap items-center justify-center mt-5 md:mt-10">
        <div className="flex flex-col flex-wrap justify-center items-center gap-2 text-center w-full">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            ICON - IT CLUB
          </span>

          <span className="text-sm sm:text-base md:text-lg text-white drop-shadow-lg max-w-[700px]">
            Where Passion for Technology Meets Innovation and Collaboration
          </span>

          <span
            className="text-[#902028] border-none font-bold px-4 py-3 rounded-full bg-white cursor-pointer
      transition-all duration-200 ease-in-out
      hover:bg-[#902028] hover:text-white hover:shadow-lg hover:scale-105
      text-sm sm:text-base md:text-lg"
          >
            Join ICON
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
