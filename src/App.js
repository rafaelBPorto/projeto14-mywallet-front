import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle.js";
import Home from "./pages/Home/Home.js";
import Inflow from "./pages/Inflow/Inflow.js";
import Outflow from "./pages/OutFlow/OutFlow.js";
import SingIn from "./pages/SingIn/SingIn.js";
import SingUp from "./pages/SingUp/SingUp.js";

function App() {
  return (
    <GlobalStyle >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingIn />} />
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="inflow" element={<Inflow />} />
          <Route path="outflow" element={<Outflow />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
