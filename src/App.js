import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  const [ searchTerm, setSearchTerm ] = useState(null);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
    
  );
}

export default App;
