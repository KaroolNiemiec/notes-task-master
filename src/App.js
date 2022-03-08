import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Note from "./components/Note";
import NoteDetails from "./pages/note-details/note-details";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "My first ever note!",
      date: "08.03.2022",
    },
    {
      id: nanoid(),
      text: "The second one!",
      date: "07.03.2022",
    },
    {
      id: nanoid(),
      text: "This is just a beginning!",
      date: "06.03.2022",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        {/* <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row> */}
        <Row>
          <Col>
            <NotesList notes={notes} handleAddNote={addNote} />
          </Col>
        </Row>
      </Container>
      {/* <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="note-details" element={<NoteDetails />} />
      </Routes> */}
    </div>
  );
};

export default App;
