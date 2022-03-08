import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";
import NotesList from "../../components/NotesList";
import AddNote from "../../components/AddNote";

const defaultNotes = [
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
];

const Notes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useLocalStorageState("notes", {
    defaultValue: defaultNotes,
  });

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const clickNote = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Row>
      <Col>
        <AddNote handleAddNote={addNote} />
        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          clickNote={clickNote}
        />
      </Col>
    </Row>
  );
};

export default Notes;
