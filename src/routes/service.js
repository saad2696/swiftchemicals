import React from "react";
import ink from "../images/inkind.jpg"
import film from "../images/film.jpg"
import print from "../images/print.jpg"
import gcylinder from "../images/gcy.jpeg"
import ad from "../images/ad.jpg"

import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

export const service = () => (
  <div style={{ padding: 60 }}>
    <div style={{ padding: 10, float: "left" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ink} style={{}} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>Ink Industry</Card.Title>
          <Card.Text>
            Sourcing one of the best quailty inks required for your Business!
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>1) Best Suitable Printing Inks</ListGroupItem>
          <ListGroupItem>
            2) Flexographic, Rotogravure and Offset inks.{" "}
          </ListGroupItem>
          <ListGroupItem>3) High Quailty Ink Dilutes.</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link  style={{color:"#1949ad"}} href="#">Show More</Card.Link>
        </Card.Body>
      </Card>
    </div>
    <div style={{ padding: 10, float: "left" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ad} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Adhesives and Cleaning Industry
          </Card.Title>
          <Card.Text>
            Sourcing one of the highest performing Ahesives for your
            requirements.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Solvent Based Adhesives</ListGroupItem>
          <ListGroupItem>Solvent Less Adhesives</ListGroupItem>
          <ListGroupItem>
            Highest Quailty Doctor Blades for your Printing Cylinder
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link style={{color:"#1949ad"}} href="#">Show More</Card.Link>
        </Card.Body>
      </Card>
    </div>
    <div style={{ padding: 10, float: "left" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={film} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Film and Coating Industry
          </Card.Title>
          <Card.Text>
            We source one of the best quailty Film product availiable in the
            Market.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Sourcing Highest Grade Imported Films</ListGroupItem>
          <ListGroupItem>Best Quailty Local Films in Market</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link  style={{color:"#1949ad"}} href="#">Show More</Card.Link>
        </Card.Body>
      </Card>
    </div>

    <div style={{ padding: 10, float: "left" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={print} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Press and Printing Industry
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Pre-Press axlleries for sheet fed offest printings
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link style={{color:"#1949ad"}} href="#">Show More</Card.Link>
        </Card.Body>
      </Card>
    </div>
    <div style={{ padding: 10, clear: "both" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={gcylinder} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Rotogravure Cylinders
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Sourcing of Durable and high Defination Cylinders
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link style={{color:"#1949ad"}} href="#">Show More</Card.Link>
        </Card.Body>
      </Card>
    </div>
  </div>
);