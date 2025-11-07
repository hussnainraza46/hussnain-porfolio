import bgHero from "../assets/images/bg-hero.avif";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col font-mono  justify-center mx-auto h-[600px] items-center text-center py-20 px-6 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-nunito font-extrabold mb-2">
          Hi, I’m <span className="text-cyan-400 text-[65px]">Hussnain Raza</span>
        </h2>

        <p className="text-gray-300 text-xl font-medium mt-4 mb-6">
          Frontend Developer | React.js, Tailwind CSS |<br />
          WordPress & Shopify Specialist
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="text-lg transition duration-700 ease-in-out font-medium border px-8 py-3 rounded border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-md"
          >
            View My Work
          </a>
          <button
            className="text-lg transition duration-700 ease-in-out font-medium border px-8 py-3 rounded border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-md cursor-pointer"
            type="button"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
