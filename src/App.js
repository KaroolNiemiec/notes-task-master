import React from "react";
import { Routes, Route } from "react-router-dom";
import NoteDetails from "./pages/note-details/note-details";
import Notes from "./pages/notes/notes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="note-details" element={<NoteDetails />} />
      </Routes>
    </div>
  );
};

export default App;
