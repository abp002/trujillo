import FanHoverCards from "../components/FanCards";

export default function Page2() {
    const items = [
        { id: "1", image: "/img/posters/poster1.png" },
        { id: "2", image: "/img/posters/poster2.png" },
        { id: "3", image: "/img/posters/poster3.png" },
        { id: "4", image: "/img/posters/poster4.png" },
        { id: "5", image: "/img/posters/poster5.png" },
        { id: "6", image: "/img/posters/poster6.png" },
        { id: "7", image: "/img/posters/poster7.png" },

    ];

    return (
        <section className="px-6 py-16 bg-background text-foreground">
            <h2 className="text-center text-6xl font-extrabold tracking-tight text-primary">
                WHAT’S UP
                <br />
                ON SOCIALS
            </h2>

            <div className="mt-12">
                <FanHoverCards items={items} />
            </div>

            <p className="mt-12 text-center text-2xl text-muted">
                Follow on social media
            </p>
        </section>
    );
}
