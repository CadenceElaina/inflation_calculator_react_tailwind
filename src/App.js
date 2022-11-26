import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Table from "./components/Table";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
