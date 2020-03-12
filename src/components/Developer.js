import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Developer(props) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.intro ? props.intro : null}
          My GitHub username is: <a href={props.github_username}>GitHub</a><br />
          {props.website ? <a href={props.website}>Website</a> : null}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}
