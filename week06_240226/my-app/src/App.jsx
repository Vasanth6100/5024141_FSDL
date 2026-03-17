import { Routes, Route } from "react-router-dom";
import Auth from "./assets/pages/Auth";
import Home from "./assets/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;