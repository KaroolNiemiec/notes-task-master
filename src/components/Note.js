import * as React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="mb-3">
      <Card>
        <Card.Body>
          <Card.Text>{text}</Card.Text>
          <Card.Subtitle className="text-muted">{date}</Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => handleDeleteNote(id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Note;
