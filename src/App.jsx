import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comman from "./Componets/Comman";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comman />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
