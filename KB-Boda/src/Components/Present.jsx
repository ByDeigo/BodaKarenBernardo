export default function Present() {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-4 gap-2.5 p-2 box-border relative overflow-x-hidden h-full">
            <img
                src="\images\vecteezy_botanic-illustration_36647509.svg"
                className="absolute w-[80px] right-[-30px] lg:right-[-30px] md:w-[120px] bottom-[180px] rotate-y-180 -z-10 max-w-full max-h-screen object-contain"
            />
            <img
                src="\images\vecteezy_botanic-illustration_36647509.svg"
                className="absolute left-[-20px] lg:left-[-60px] bottom-[-20px] w-[80px] md:w-[100px] lg:w-[200px] max-w-full max-h-screen object-contain"
            />
            <header className="flex flex-col w-full max-w-[600px] text-center gap-2">
                <div className="flex items-center justify-center">
                    <span className="border-t-2 border-[#E8D28A] flex-1 mx-2"></span>
                    <p className="text-3xl sm:text-4xl md:text-5xl text-[#E8D28A]">Detalles</p>
                    <span className="border-t-2 border-[#E8D28A] flex-1 mx-2"></span>
                </div>
                <div className="flex items-center flex-col gap-2.5">
                    <p className="text-2xl sm:text-3xl">Nuestro regalo</p>
                    <img
                        src="\images\Gift.png"
                        alt="Imagen de un regalo"
                        className="w-[80px] sm:w-[80px] md:w-[100px]"
                    />
                    <p className="text-base sm:text-lg md:text-xl p-2 box-border lora">
                        Tu presencia es el mejor regalo que podemos recibir, pero si prefieres hacernos un obsequio, te ofrecemos esta opción.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl">Mesa de regalo <span className="text-[#E6B6A6]">(Liverpool)</span></p>
                    <p className="text-lg sm:text-xl md:text-2xl">Código de mesa: <span className="text-[#B7D0D9] font-serif">51624631</span></p>
                </div>
            </header>
            <a
                href="https://mesaderegalos.liverpool.com.mx/eventodebusqueda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[300px] mx-auto"
            >
                <button
                    className="bodoni-moda-sc w-full tracking-widest bg-white border-2 my-2.5 rounded-lg text-black py-2 px-4 z-20 hover:cursor-pointer inline-block text-center hover:bg-[#E6B6A6] transition-colors duration-300"
                >
                    Ir a mesa de regalo
                </button>
            </a>
        </div>
    );
}
