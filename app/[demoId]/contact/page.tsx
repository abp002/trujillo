export default async function ContactPage({ params }: { params: Promise<{ demoId: string }> }) {
    const { demoId } = await params;
    return (
        <div className="min-h-screen pt-32 px-10">
            <h1 className="text-4xl font-bold mb-4">Contact ({demoId})</h1>
            <p className="text-neutral-400">
                Ponte en contacto con nosotros en la versión <strong>{demoId}</strong>.
            </p>
            <form className="mt-8 max-w-lg space-y-4">
                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3" />
                <textarea placeholder="Mensaje" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 h-32" />
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium">Enviar</button>
            </form>
        </div>
    );
}
