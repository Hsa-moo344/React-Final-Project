import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Team from "./Component/Team/Team";
import Work from "./Component/Work/Work";
import Login from "./Component/Login/Login";
import Navigation from "./Component/Navigation/Navigation";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
