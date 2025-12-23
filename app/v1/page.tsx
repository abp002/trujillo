import CoverflowAdjacent from "../components/CoverflowScroll";
import AnimatedBackground from "../components/AnimatedBackground";
import FndSplitSection from "../components/FndSplitSection";




export default function PageV1() {
  const posters = [
    { id: "1", image: "/img/posters/poster1.png" },
    { id: "2", image: "/img/posters/poster2.png" },
    { id: "3", image: "/img/posters/poster3.png" },
    { id: "4", image: "/img/posters/poster4.png" },
    { id: "5", image: "/img/posters/poster5.png" },
    { id: "6", image: "/img/posters/poster6.png" },
    { id: "7", image: "/img/posters/poster7.png" },
    { id: "8", image: "/img/posters/poster8.png" },
    { id: "9", image: "/img/posters/poster9.png" },
    { id: "10", image: "/img/posters/poster10.png" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      {/* overlay oscuro para que el texto y el coverflow se lean bien */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="relative space-y-10 px-6 py-14">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Diseño V1
        </h1>

        <CoverflowAdjacent items={posters} startIndex={4} />
      </div>
       <div>
      <FndSplitSection />
    </div>
    </div>
  );
}
