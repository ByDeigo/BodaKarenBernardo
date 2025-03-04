import Present from "./Components/Present";
import Date from "./Components/Date";
import Location from "./Components/Location";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <img
        src="./src/images/vecteezy_botanic-illustration_36647509.svg"
        className="absolute w-[120px] md:w-[150px] opacity-45 -left-12 top-30"
      />
      <main className="box-border w-full flex-wrap flex justify-center items-center sm:flex-row gap-2 sm:gap-2.5 relative p-4 overflow-hidden min-h-[100vh] ">
        <div className="w-1/2 max-w-[300px] h-full box-border ">
          <img
            src="./src/images/Logo_de_Moda_con_Iniciales_Caligráfico_Elegante_Rosa_y_Negro_1_-removebg-preview.png"
            className="object-cover rounded-md"
          />
          <p className="text-base sm:text-lg md:text-xl text-center mb-3.5 ">
            "Pero, además de todo esto, vístanse de amor, porque es un lazo de unión perfecto.":Colosenses 3:14
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-center">Nuestra boda</p>
        </div>
        <img
          src=".\src\images\Pareja.jpg"
          className="w-1/2 max-w-[300px] shadow-lg min-w-[200px] mt-4"
        />
        <img
          src="./src/images/vecteezy_botanic-illustration_36647509.svg"
          className="absolute w-[160px] md:w-[200px] lg:w-[20vw] rotate-y-180 right-[-80px] sm:right-0 translate-x-1/4 top-30 -z-10 clip-path-inset opacity-45"
        />
      </main>
      <Date />
      <Location />
      <Present />
      <Contact />
    </div>
  );
}

export default App;
