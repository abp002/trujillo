
import CoverflowAdjacent from "../components/CoverflowScroll";

export default function HomePage() {
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

    return <CoverflowAdjacent items={posters} startIndex={4} />;
}
