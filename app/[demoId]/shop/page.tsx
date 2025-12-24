export default async function ShopPage({ params }: { params: Promise<{ demoId: string }> }) {
    const { demoId } = await params;
    return (
        <div className="min-h-screen pt-32 px-10">
            <h1 className="text-4xl font-bold mb-4">Shop ({demoId})</h1>
            <p className="text-neutral-400">
                Bienvenido a la tienda de la versión <strong>{demoId}</strong>.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card border border-white/5 rounded-2xl h-64 animate-pulse" />
                ))}
            </div>
        </div>
    );
}
