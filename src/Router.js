
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Work from "./Work";
// import your route components too

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route exact path="/work" element={<Work />}/>
    </Routes>
  </BrowserRouter>
);

export default Router