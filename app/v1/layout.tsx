import Header from "../components/Header";
import { bebas } from "../fonts";

export default function LayoutV1({ children }: { children: React.ReactNode }) {
    return (
        <div className={`contents ${bebas.variable} font-[var(--font-bebas)]`} data-theme="">
            <Header variant="v1" />

            <main className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
                {children}
            </main>

            <footer className="border-t border-white/10 bg-neutral-950 mt-20">
                <div className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-3">
                    <div className="text-sm text-neutral-400">© 2024 V1 Design</div>
                </div>
            </footer>
        </div>
    );
}
