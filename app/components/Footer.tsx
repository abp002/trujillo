"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-neutral-950 text-neutral-400 py-16">
            <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Column 1: Navigation */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold text-lg">Navegación</h3>
                    <nav className="flex flex-col gap-2 text-sm">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <Link href="/v2/shop" className="hover:text-white transition">Shop</Link>
                        <Link href="/v2/contact" className="hover:text-white transition">Contacto</Link>
                    </nav>
                </div>

                {/* Column 2: Policies */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold text-lg">Legal</h3>
                    <nav className="flex flex-col gap-2 text-sm">
                        <Link href="#" className="hover:text-white transition">Política de Privacidad</Link>
                        <Link href="#" className="hover:text-white transition">Cookies</Link>
                        <Link href="#" className="hover:text-white transition">Términos y condiciones</Link>
                    </nav>
                </div>

                {/* Column 3: Social & Info */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold text-lg">Social</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition" aria-label="Instagram">
                            {/* Instagram Icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="#" className="hover:text-white transition" aria-label="TikTok">
                            {/* TikTok Icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.83-.35-4.14-.85-2.28-.9-3.79-3.08-3.86-5.59h-3.9v9.43c.09 3.25-2.75 6.45-5.99 6.27-2.61-.17-4.73-2.63-4.14-5.32.48-2.18 2.46-3.83 4.69-3.91.47-.02.94.01 1.41.09v-4.13c-.22-.03-.43-.02-.65-.02-4.04.14-7.46 3.42-7.53 7.47-.08 4.25 3.12 8.02 7.37 8.35 4.41.34 8.34-2.83 8.87-7.23.05-.4.07-.81.07-1.22V.02z" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
                <p className="order-2 md:order-1">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>
                <p className="order-1 md:order-2 mb-4 md:mb-0">
                    Creative Commons BY-NC-ND 4.0
                </p>
            </div>
        </footer>
    );
}
