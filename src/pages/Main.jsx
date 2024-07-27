import Hero from "../components/main/Hero";
import BigTechs from "../components/main/BigTechs";
import Metrics from "../components/main/Metrics";
import Instructions from "../components/main/Instructions";
import './styles/main.css';

function Main() {
  return (
    <main className="relative font-onest py-10 base:py-20 px-4 min-h-screen max-w-dwv text-gray-100">
      <section className="hero 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto">
        <Hero />
      </section>
      <section className="bigtechs 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto">
        <Instructions />
      </section>
      <section className="bigtechs 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto">
        <BigTechs />
      </section>
      <section className="bigtechs 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto">
        <Metrics />
      </section>
    </main>
  );
}
export default Main;
