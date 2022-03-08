import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div>
      <Form className="mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Note</Form.Label>
          <Form.Control
            placeholder="Note text"
            as="textarea"
            rows={3}
            value={noteText}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          display="inline-block"
          margin-left="0 auto"
          type="button"
          variant="primary"
          onClick={handleSaveClick}
        >
          Submit
        </Button>
        <h2 style={{ textAlign: "center" }}>Latest notes</h2>
      </Form>
    </div>
  );
};
export default AddNote;
