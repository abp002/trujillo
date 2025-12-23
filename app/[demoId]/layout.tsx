import { notFound } from "next/navigation";

// Define themes map
const themes: Record<string, string> = {
    page1: "", // default
    page2: "emerald",
    page3: "ocean",
};

export default function DemoLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { demoId: string };
}) {
    const theme = themes[params.demoId];

    // If route is not page1/2/3, 404
    if (theme === undefined) return notFound();

    return (
        <div data-theme={theme} className="contents">
            {children}
        </div>
    );
}
