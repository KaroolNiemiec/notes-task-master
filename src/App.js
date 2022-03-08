import React from "react";
import { Routes, Route } from "react-router-dom";
import NoteDetails from "./pages/note-details/note-details";
import Notes from "./pages/notes/notes";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/:noteId" element={<NoteDetails />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
