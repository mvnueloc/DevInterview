import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import AppRouter from "./Router";
import Loader from "./components/common/Loader";
import StateFeedback from "./context/StateFeedback";

function App() {
  return (
    <StateFeedback>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </StateFeedback>
  );
}

export default App;
