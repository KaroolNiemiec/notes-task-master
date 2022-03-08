import Note from "./Note";

const NotesList = ({ notes, deleteNote, clickNote }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
          clickNote={clickNote}
        />
      ))}
    </div>
  );
};
export default NotesList;
