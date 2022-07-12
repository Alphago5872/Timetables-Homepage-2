import React from "react";
import { Routes, Route } from "react-router-dom";
import Timetable from "./pages/Timetable";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import DevCredits from "./pages/DevCredits";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timetable/:id" element={<Timetable />} />
        <Route path="*" element={<ErrorPage errorCode="404" />} />
        <Route path='/Developers' element={<DevCredits />} />
      </Routes>
    </>
  );
}

export default App;
