import HeaderV1 from "../components/HeaderV1";
import Footer from "../components/Footer";
import { bebas } from "../fonts";

export default function LayoutV1({ children }: { children: React.ReactNode }) {
    return (
        <div className={`contents ${bebas.variable} font-[var(--font-bebas)]`} data-theme="">
            <HeaderV1 />

            <main className="min-h-screen">
                {children}
            </main>

            <Footer />
        </div>
    );
}
