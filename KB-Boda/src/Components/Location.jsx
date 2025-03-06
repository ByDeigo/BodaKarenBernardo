export default function Location() {
    return (
        <section className="w-full flex flex-col items-center box-border mt-8 overflow-x-hidden">
            <div className="text-center flex flex-col gap-2.5">
                <p className="text-3xl sm:text-3xl md:text-4xl text-[#E6B6A6] font-bold">Celebración</p>
                <p className="text-3xl sm:text-2xl md:text-3xl text-[#F2D1B7]">5:00 pm</p>
                <p className="text-lg sm:text-xl md:text-2xl">Salon Gala Tepotzotlan</p>
            </div>
            <div className="text-center flex flex-col items-center gap-6 py-4 px-8 box-border z-20">
                <p className="text-lg sm:text-xl md:text-2xl">Av. Insurgentes 68, 54602 San Mateo Xoloc, Méx.</p>
                <img
                    src="\images\vecteezy_flower-floral_36630366.svg"
                    className="opacity-30 left-0 absolute max-w-full max-h-screen object-contain"
                />

                <a
                    target="_blank"
                    href="https://maps.app.goo.gl/tgYTe8wi7Et4ALD58?g_st=iw"
                    className="bodoni-moda-sc min-w-[150px] tracking-widest bg-white border-2 mt-2.5 rounded-lg text-black py-2 px-1 w-1/2 z-20 hover:cursor-pointer inline-block text-center"
                >
                    Ver ubicación
                </a>

                <img
                    src="images\CompromisoIMG2.jpg"
                    className="w-full max-w-[400px] z-10 shadow-xl  opacity-90 brightness-95"
                />

                <img
                    src="\images\vecteezy_flower-floral_36630366.svg"
                    className="opacity-30 right-0 absolute rotate-y-180 hidden sm:block max-w-full max-h-screen object-contain"
                />
            </div>
        </section>
    );
}
