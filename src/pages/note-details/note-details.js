import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Note from "../../components/Note";

const NoteDetails = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [notes, setNotes] = useLocalStorageState("notes");
  const [foundNote, setFoundNote] = useState();

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    navigate("/");
  };

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (notes.length && noteId) {
      setFoundNote(notes.find((note) => note.id === noteId));
    }
  }, [noteId, notes]);

  if (!foundNote) return null;
  return (
    <div>
      <Note
        id={foundNote.id}
        text={foundNote.text}
        date={foundNote.date}
        deleteNote={deleteNote}
      />
      <button onClick={goBack}>go back</button>
    </div>
  );
};
export default NoteDetails;
