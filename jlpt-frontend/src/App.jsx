import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Lessons from "./Pages/Lessons";
import ReadPage from "./Pages/ReadPage";
import Footer from "./Components/Footer";
import Vocab from "./Pages/Vocab";
const App = () => {
  return (
    <div className="bg-[#111] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jlpt-level/:id" element={<Lessons />} />
        <Route path="/jlpt-level/:id/chapter/:chapter" element={<ReadPage />} />
        <Route path="/vocab/:id" element={<Vocab />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
