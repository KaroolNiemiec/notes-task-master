import * as React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ReactMarkdown from "react-markdown";

const Note = ({ id, text, date, deleteNote, clickNote }) => {
  const handleClickNote = () => {
    if (clickNote) {
      clickNote(id);
    }
  };

  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: "lightgray" }}>
        <Card.Body>
          <Card.Text>
            <ReactMarkdown>{text}</ReactMarkdown>
          </Card.Text>
          <Card.Subtitle className="text-muted" onClick={handleClickNote}>
            {date}
          </Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => deleteNote(id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Note;
