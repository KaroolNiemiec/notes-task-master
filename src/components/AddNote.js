import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveClick = () => {
    handleAddNote(noteText);
  };
  return (
    <div>
      <>
        <h2>Create Notes</h2>
        <Form className="mt-3 mb-3">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Text</Form.Label>
            <Form.Control
              placeholder="Enter your notes"
              as="textarea"
              rows={3}
              value={noteText}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="button" variant="primary" onClick={handleSaveClick}>
            Submit
          </Button>
        </Form>
      </>
    </div>
  );
};
export default AddNote;
