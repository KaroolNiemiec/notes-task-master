import { Routes, Route } from "react-router-dom";
import Notes from "./pages/notes/notes";
import NoteDetails from "./pages/note-details/note-details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="note-details" element={<NoteDetails />} />
      </Routes>
    </div>
  );
}

export default App;
////////////ROUTES///////////
