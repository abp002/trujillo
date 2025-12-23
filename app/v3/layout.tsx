import HeaderV3 from "../components/HeaderV3";
import Link from "next/link";

export default function LayoutV3({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="contents" data-theme="ocean">
            <HeaderV3 />

            <main className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
                {children}
            </main>

            <footer className="border-t border-cyan-500/20 bg-cyan-950/20 mt-20">
                <div className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-3">
                    <div className="text-sm text-cyan-400">© 2024 V3 Ocean Design</div>
                </div>
            </footer>
        </div>
    );
}
