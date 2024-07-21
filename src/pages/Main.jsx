import ApiInfo from "../components/main/ApiInfo";
import Informacion from "../components/main/Informacion";
import Modelo from "../components/main/Modelo";
import Preview from "../components/main/Preview";
import ElementInfo from "../components/main/ElementInfo";

function Main() {
  return (
    <main className="relative font-onest py-10 lg:py-0 px-4 min-h-screen w-full text-gray-100">
      <section className="w-full mx-auto container md:max-w-2xl lg:max-w-4xl xl:max-w-5xl lg:h-screen lg:flex lg:flex-col lg:justify-center">
        <div className="flex flex-col space-y-16 lg:mt-8 lg:flex-row lg:space-x-16 lg:space-y-0">
          <Informacion />
          <Preview />
        </div>
        <ElementInfo />
      </section>
      <section className="mt-20 mb-16 w-full mx-auto container md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <div className="flex flex-col lg:flex-row  justify-between items-center lg:items-baseline space-y-16 lg:space-y-0 lg:space-x-9">
          <ApiInfo />
          <Modelo />
        </div>
      </section>
    </main>
  );
}
export default Main;
