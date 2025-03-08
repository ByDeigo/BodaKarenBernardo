export default function Date() {
    return (
        <section className="flex flex-col items-center justify-center box-border ">
            <p className="text-3xl md:text-4xl text-center ">
                Nosotros
            </p>
            <img
                src="\images\vecteezy_flower-and-foliage_36642398.svg"
                className="opacity-30 left-[-2rem] md:left-[-10rem] absolute size-44 hidden md:block lg:size-96 max-w-full max-h-screen object-contain invert"
            />

            <div className="grid grid-cols-[1fr_40px_1fr] grid-rows-3 justify-items-center w-[80%] max-w-[500px] p-5 box-border relative">
                <img src="/images/vecteezy_designs-autumn_36640354.svg" className="absolute opacity-20 -top-8" />
                <p className="text-4xl sm:text-5xl md:text-6xl col-start-2 sm:col-start-1">Karen</p>
                <p className="text-4xl sm:text-5xl md:text-6xl col-start-2 row-start-2 self-center text-[#3E3E3E]">&</p>
                <p className="text-4xl sm:text-5xl md:text-6xl col-start-2 col-end-3 sm:col-start-3 sm:col-end-3 row-start-3">Bernardo</p>
            </div>

            <p className="text-2xl text-center p-1.5">Tenemos el honor de invitarte a nuestra boda.</p>
            <img
                src="\images\vecteezy_flower-and-foliage_36642398.svg"
                className="opacity-30 right-[-2rem] md:right-[-10rem] absolute size-44 hidden md:block lg:size-96 max-w-full max-h-screen object-contain invert"
            />

            <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-3 place-items-center text-lg sm:text-xl md:text-2xl box-border gap-2">
                <div className="row-start-2 w-full">
                    <hr className="flex-1 border-t-2 border-[#E8D28A] mx-2" />
                    <p className="border-solid text-xl sm:text-2xl md:text-3xl w-full text-center p-2 box-border">
                        Sábado
                    </p>
                    <hr className="flex-1 border-t-2 border-[#E8D28A] mx-2" />
                </div>
                <div className="col-start-2 row-start-2 flex flex-col items-center relative">
                    <p className="text-3xl sm:text-4xl md:text-5xl w-[100px] text-center text-[#595959]">Mayo</p>
                    <p className="text-6xl sm:text-8xl md:text-9xl top-6 absolute text-[#595959]">12</p>
                </div>
                <div className="row-start-2 w-full">
                    <hr className="flex-1 border-t-2 border-[#E8D28A] mx-2" />
                    <p className="border-solid text-xl sm:text-2xl md:text-3xl w-full text-center p-2 box-border">
                        2025
                    </p>
                    <hr className="flex-1 border-t-2 border-[#E8D28A] mx-2" />
                </div>
            </div>
        </section>
    );
}
