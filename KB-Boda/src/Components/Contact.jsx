export default function Contact() {
    return (
        <div className="w-full flex items-center justify-center flex-col gap-6 mb-6 text-center relative ">
            <div className="flex w-full max-w-[600px] items-center justify-center">
                <span className="border-t-2 border-[#E8D28A] flex-1 mx-2"></span>
                <p className="text-3xl sm:text-4xl md:text-5xl text-[#E8D28A]">Confirmar asistencia</p>
                <span className="border-t-2 border-[#E8D28A] flex-1 mx-2"></span>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl">Agradecemos que confirmes tu asistencia lo antes posible.</p>
            <section className="flex flex-col">
                <a
                    href="https://wa.me/5215567733688"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[300px] mx-auto"
                >
                    <button
                        className="bodoni-moda-sc w-full tracking-widest bg-white border-2 my-2.5 rounded-lg text-black py-2 px-4 z-20 hover:cursor-pointer inline-block text-center hover:bg-[#E6B6A6] transition-colors duration-300"
                    >
                        Contactar a la novia
                    </button>
                </a>
                <a
                    href="https://wa.me/5215618986743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[300px] mx-auto"
                >
                    <button
                        className="bodoni-moda-sc w-full tracking-widest bg-white border-2 my-2.5 rounded-lg text-black py-2 px-4 z-20 hover:cursor-pointer inline-block text-center hover:bg-[#E6B6A6] transition-colors duration-300"
                    >
                        Contactar al novio
                    </button>
                </a>

                <img
                    src="\images\vecteezy_flower-exotic_36648068.svg"
                    className="-z-10 opacity-45 absolute top-[150px] w-[100px] md:w-[200px] left-[-20px]  md:left-[-80px] rotate-y-180 max-w-full max-h-screen object-contain"
                />

                <img
                    src="\images\vecteezy_flower-exotic_36648068.svg"
                    className="-z-10 opacity-45 absolute w-[100px] md:w-[200px]  right-[-20px] top-[230px] md:right-[-80px] max-w-full max-h-screen object-contain"
                />

                <div className="flex flex-col justify-center items-center gap-2.5">
                    <p className="text-2xl sm:text-3xl">Vestimenta</p>
                    <img
                        src="\images\DressCodeImg-removebg-preview.png"
                        className="invert w-[100px]"
                    />
                    <p className="text-2xl sm:text-3xl">Formal</p>
                </div>
            </section>

            <picture className="w-full flex-col flex gap-4 sm:flex-row justify-center items-center">
                <img src="\images\CompromisoIMG2.jpg" className="w-1/2 max-w-[300px]" />
                <img
                    src="\images\ParejaIMG2.jpg"
                    className="w-1/2 max-w-[300px]"
                />
            </picture>

            <img
                src="\images\vecteezy_swirl-flower_36639908.svg"
                className="absolute left-[-30px] bottom-[-20px] w-[100px] lg:w-[200px] -z-10 opacity-45 max-w-full max-h-screen object-contain"
            />
            <p className="text-2xl sm:text-3xl md:text-4xl">Gracias por ser parte de nuestro gran día.</p>
            <p className="tangerine-regular text-8xl  mt-10 md:mt-0">¡Te esperamos!</p>

            <img
                src="\images\vecteezy_swirl-flower_36639908.svg"
                className="absolute right-[-30px] bottom-[-150px] w-[100px] lg:w-[200px] rotate-y-180 -z-10 opacity-45 max-w-full max-h-screen object-contain"
            />
        </div>
    );
}
