import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CreateNotes from "../../components/CreateNotes";

const Notes = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <CreateNotes />
          <Card.Title>Tytuł</Card.Title>
          <Card.Text>Content</Card.Text>
          <Card.Subtitle>Timestamp</Card.Subtitle>
          <Button className="mt-3" variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Notes;
