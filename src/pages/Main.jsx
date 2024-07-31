import Hero from "../components/main/Hero";
import BigTechs from "../components/main/BigTechs";
import Metrics from "../components/main/Metrics";
import Instructions from "../components/main/Instructions";
import "./styles/main.css";
import FadeInComponent from "../components/common/Animations/FadeInComponent";

function Main() {
  return (
    <main className="relative font-onest pb-10 px-4 min-h-screen max-w-dwv text-gray-100">
      <section className="hero 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto min-h-[calc(100vh_-_64px)] lg:h-screen flex items-center">
        <Hero />
      </section>
      <section className="bigtechs 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto">
        <FadeInComponent>
          <Instructions />
        </FadeInComponent>
      </section>
      <section className="bigtechs 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto">
        <FadeInComponent>
          <BigTechs />
        </FadeInComponent>
      </section>
      <section className="bigtechs 2xl:w-[1280px] xl:w-10/12 w-11/12 mx-auto">
        <FadeInComponent>
          <Metrics />
        </FadeInComponent>
      </section>
    </main>
  );
}
export default Main;
