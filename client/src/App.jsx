import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, CreatePost } from './pages';
import { Navbar } from './components';

const App = () => (
  <>
    <Navbar />
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </>
);

export default App;
