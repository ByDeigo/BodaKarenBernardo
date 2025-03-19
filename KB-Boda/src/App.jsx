import Present from "./Components/Present";
import Date from "./Components/Date";
import Location from "./Components/Location";
import Contact from "./Components/Contact";
import { useEffect, useRef } from "react";

function App() {
  const musicRef = useRef(null)
  useEffect(() => {
    function handlePlay() {
      if (musicRef.current.paused) {
        musicRef.current.play();
        musicRef.current.muted = false;
      }
      // Desvincula el evento después de que se haya activado una vez
      window.removeEventListener("click", handlePlay);
    }

    // Agrega el evento de scroll para activar el audio
    window.addEventListener("click", handlePlay);

    // Limpiar el evento cuando el componente se desmonte
    return () => window.removeEventListener("click", handlePlay);
  }, []);
  return (
    <div className="flex flex-col gap-2 overflow-hidden ">
      <img
        src="/images/vecteezy_botanic-illustration_36647509.svg"
        className="absolute absolute-img w-[120px] md:w-[150px] opacity-45 -left-12 top-30 object-cover invert"
      />

      <main className="box-border w-full flex-wrap flex justify-center items-center sm:flex-row gap-2 sm:gap-2.5 relative p-4 min-h-[100vh] ">
        <div className="w-1/2 flex flex-col max-w-[300px] h-full box-border justify-center items-center gap-1.5 ">
          <img
            src="/images/Logo_de_Moda_con_Iniciales_Caligráfico_Elegante_Rosa_y_Negro_1_-removebg-preview.png"
            className="object-cover rounded-md min-w-[250px] sm:w-[300px] invert"
          />
          <p className="text-base sm:text-lg md:text-xl text-center mb-3.5">
            "Pero, además de todo esto, vístanse de amor, porque es un lazo de unión perfecto." Colosenses 3:14
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-center">Nuestra boda</p>

          <audio
            ref={musicRef}
            src="\images\audio\How Deep Is Your Love.m4a"
            className="opacity-40 mt-4"
            loop
            autoplay
            controls
          ></audio>

        </div>

        <img
          src="/images/Pareja.jpg"
          className="lg:w-1/2 max-w-[400px] w-[300px] shadow-lg"
        />

        <img
          src="/images/vecteezy_botanic-illustration_36647509.svg"
          className="absolute absolute-img w-[160px] md:w-[200px] lg:w-[20vw] rotate-y-180 right-[-80px] sm:right-0 translate-x-1/4 top-30 -z-10 clip-path-inset opacity-45 invert"
        />
      </main>
      <div className="w-full overflow-hidden">
        <Date />
        <Location />
        <Present />
        <Contact />
      </div>
    </div>
  );
}

export default App;
