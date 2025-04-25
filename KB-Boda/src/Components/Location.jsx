export default function Location() {
    return (
        <section className="w-full flex flex-col items-center box-border mt-8 ">
            <div className="text-center flex gap-8 pt-2">
                <div className="flex flex-col gap-2">
                    <p className="text-3xl sm:text-3xl md:text-4xl text-[#D88D77] font-bold">Ceremonia</p>
                    <p className="text-3xl sm:text-2xl md:text-3xl text-[#D88D77]">4:00 pm</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-3xl sm:text-3xl md:text-4xl text-[#D88D77] font-bold">Recepción</p>
                    <p className="text-3xl sm:text-2xl md:text-3xl text-[#D88D77]">5:00 pm</p>
                </div>
            </div>
            <div className="text-center w-full relative flex flex-col items-center gap-6 py-4 px-8 box-border z-20">
                <p className="text-lg sm:text-xl md:text-2xl">Salón Gala Tepotzotlan</p>
                <p className="text-lg sm:text-xl md:text-2xl">Av. Insurgentes 68, 54602 San Mateo Xoloc, Méx.</p>
                <img
                    src="\images\vecteezy_flower-floral_36630366.svg"
                    className="opacity-15 -left-10 absolute max-w-full max-h-screen object-contain invert"
                />

                <a
                    target="_blank"
                    href="https://maps.app.goo.gl/tgYTe8wi7Et4ALD58?g_st=iw"
                    className="bodoni-moda-sc min-w-[150px] tracking-widest bg-white border-2 mt-2.5 rounded-lg text-black py-2 px-1 w-1/2 z-20 hover:cursor-pointer inline-block text-center max-w-[200px] hover:bg-[#E6B6A6] transition-colors duration-300"
                >
                    Ver ubicación
                </a>
                <img
                    src="\images\ImagenCompromiso.jpg"
                    className="w-full max-w-[400px] z-10 shadow-xl opacity-90 brightness-95"
                />

                <img
                    src="\images\LateralRose.png"
                    className="opacity-20 bottom-0 -right-20 absolute rotate-y-180 max-w-full max-h-screen object-contain"
                />
            </div>
        </section>
    );
}
