import HeaderV2 from "../components/HeaderV2";
import Link from "next/link";

export default function LayoutV2({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="contents" data-theme="warm">
            <HeaderV2 />

            <main className="min-h-screen pt-24 px-4 max-w-7xl mx-auto">
                {children}
            </main>

            <footer className="border-t border-border bg-muted/20 mt-20">
                <div className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-3">
                    <div className="text-sm text-foreground/60">© 2024 V2 Warm Design</div>
                </div>
            </footer>
        </div>
    );
}
