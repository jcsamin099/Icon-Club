import HeroBG from "../assets/IconHero.jpg";

const Hero = () => {
  return (
    <div
      className="w-full h-[60vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex items-start justify-center bg-fixed"
      style={{ backgroundImage: `url(${HeroBG})` }}
    >
      <div className="w-full flex flex-wrap items-center justify-center mt-5 md:mt-10">
        <div className="flex flex-col flex-wrap justify-center items-center gap-2 text-center w-full">
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#902028] drop-shadow-lg">
              JSWAP - JFINEX
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold  drop-shadow-lg text-[#902028]">
              CLUB
            </span>
          </div>

          <span className="text-sm sm:text-base md:text-lg text-white drop-shadow-lg max-w-[700px]">
            Where Future Financial Leaders and Compassionate Social Advocates
            Unite to Empower Change Through Excellence, Service, and Purpose
          </span>

          <div className="flex gap-4 mt-8">
            <span
              className="text-white border-none font-bold px-4 py-3 rounded-full bg-[#902028] cursor-pointer
  transition-all duration-200 ease-in-out
  hover:bg-white hover:text-[#902028] hover:shadow-lg hover:scale-105
  text-sm sm:text-base md:text-lg"
            >
              Join JSWAP
            </span>

            <span
              className="text-white border-none font-bold px-4 py-3 rounded-full bg-[#902028] cursor-pointer
  transition-all duration-200 ease-in-out
  hover:bg-white hover:text-[#902028] hover:shadow-lg hover:scale-105
  text-sm sm:text-base md:text-lg"
            >
              Join JFINEX
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
