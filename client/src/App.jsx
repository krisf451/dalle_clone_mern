import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, CreatePost } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
