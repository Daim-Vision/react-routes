import { Routes, Route, Link } from "react-router-dom";
import Main from "./main";
import { Contacts } from "./Cont.jsx";
import { Home } from "./Home";
import { Features } from "./Features";

function App() {
  return (
    <>
      <div>
        <Main />
      </div>
      <Routes>
        <Route path="feat" element={<Features />} />
        <Route path="cont" element={<Contacts />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
