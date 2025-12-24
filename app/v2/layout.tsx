import HeaderV2 from "../components/HeaderV2";
import Footer from "../components/Footer";
import Link from "next/link";

export default function LayoutV2({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground" data-theme="warm">
            <HeaderV2 />

            <main className="min-h-screen">
                {children}
            </main>

            <Footer />
        </div>
    );
}
