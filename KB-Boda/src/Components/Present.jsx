export default function Present() {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-4 gap-2.5 p-2 box-border relative ">
            <img
                src="\images\HorizontalRose.png"
                className="absolute w-[280px] -rotate-90 right-[-120px] md:w-[300px] bottom-[180px] -z-10 max-w-full max-h-screen object-contain opacity-50"
            />
            <img
                src="\images\LateralRose.png"
                className="absolute left-[-20px] lg:left-[-60px] bottom-[-20px] w-[100px] md:w-[150px] lg:w-[250px] max-w-full max-h-screen object-contain opacity-80"
            />
            <header className="flex flex-col w-full max-w-[600px] text-center gap-2">
                <div className="flex items-center justify-center">
                    <span className="border-t-2 border-[#E8D28A] flex-1 mx-2"></span>
                    <p className="text-3xl sm:text-4xl md:text-5xl text-[#d8b434]">Detalles</p>
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
                    <p className="text-lg sm:text-xl md:text-2xl">Mesa de regalo <span className="text-[#D88D77]">(Liverpool)</span></p>
                    <p className="text-lg sm:text-xl md:text-2xl">Código de mesa: <span className="text-[#D88D77] font-serif">51624631</span></p>
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
