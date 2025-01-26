import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Lessons from "./Pages/Lessons";
const App = () => {
  return (
    <div className="bg-[#111] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jlpt-level/:id" element={<Lessons />} />
      </Routes>
    </div>
  );
};

export default App;
