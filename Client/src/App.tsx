import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Questions from "./pages/questions/questions";
import Response from "./pages/response/response";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/response" element={<Response />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
