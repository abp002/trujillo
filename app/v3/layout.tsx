import HeaderV3 from "../components/HeaderV3";
import Footer from "../components/Footer";
import Link from "next/link";

export default function LayoutV3({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="contents" data-theme="ocean">
            <HeaderV3 />

            <main className="min-h-screen">
                {children}
            </main>

            <Footer />
        </div>
    );
}
