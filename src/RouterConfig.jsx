import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Practicar from "./pages/Practicar";
import Preguntas from "./pages/Preguntas";

export const routes = [
  {
    path: "/",
    component: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
  },
  {
    path: "/practicar",
    component: (
      <>
        <Header />
        <Practicar />
        <Footer />
      </>
    ),
  },
  {
    path: "/recursos",
    component: (
      <>
        <Header />
        <Footer />
      </>
    ),
  },
  {
    path: "practicar/preguntas/:categoria/:nivel",
    component: (
      <>
        <Header />
        <Preguntas />
        <Footer />
      </>
    ),
  },
];

export default routes;