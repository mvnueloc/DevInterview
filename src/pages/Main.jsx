import Header from "../components/common/Header"
import Informacion from "../components/main/Informacion";
import Modelo from "../components/main/Modelo";
import Preview from "../components/main/Preview";
import Run from "../components/main/Run";
import "./styles/index.css";

function Main() {
  return (
    <div className="bg-custom-degrad bg-dot">
      <Header />
      <main className="relative font-jetbrains py-8 lg:py-0 lg:h-screen w-full text-gray-100 flex justify-center items-center">
        <div>
          <section className="flex justify-center items-center">
            <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-16 lg:space-y-0">
              <Informacion />
              <Preview />
            </div>
          </section>
          <section className=" flex mt-16 justify-between items-center lg:items-baseline flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-9">
            <Modelo />
            <Run />
          </section>
        </div>
      </main>
    </div>
  );
}
export default Main;
