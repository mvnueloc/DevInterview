import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import AppRouter from "./Router";
import Loader from "./components/common/Loader";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
