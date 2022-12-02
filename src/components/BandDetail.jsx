import React from "react";
import { Card } from "react-bootstrap";

const BandDetail = ({ band }) => {
  return (
    <Card style={{ width: "350px" }} className="ms-5">
      <Card.Img variant="top" src={band.image} />
      <Card.Body>
        <Card.Title>{band.name}</Card.Title>
        <Card.Text>{band.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BandDetail;
