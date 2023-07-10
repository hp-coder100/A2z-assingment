// Task3.js
import React from "react";

import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useStateValue } from "./StateProvider";

const Task3 = () => {
  const [state, dispatch] = useStateValue();
  const user = state.users[state.selectedUser];

  return (
    <Container className="m-3 shadow-lg p-5 mx-auto">
      
        <Row  as={Card} className="d-flex flex-row mx-auto p-2 align-items-center justify-content-center">
          <Col className="text-center" md={6}><Card.Img 
            variant="top"
            style={{ height: "200px", width: "200px" }}
            src={user.avatar}
          />
          </Col>
        <Col md={6}>
          <Card.Title>
            {user.first_name} {user.last_name}
          </Card.Title>
          <Card.Subtitle  className="border-bottom border-dark pb-2 mb-2 text-muted">
            {user.username}
          </Card.Subtitle>
          <Card.Text>
            <strong>ID:</strong> {user.id}
            <br />
            <strong>Email:</strong> {user.email}
            <br />
            <strong>Gender:</strong> {user.gender}
            <br />
            <strong>Date of Birth:</strong> {user.date_of_birth}
            <br />
          </Card.Text>
        </Col>
        </Row>
        
        
        <Row className="mt-3 justify-content-around">
        <Col as={Card} className="p-4" sm={6} md={4}>
          <Card.Title>Employment</Card.Title>
          <ListGroup variant="flush border-bottom border-dark mb-2">
            <ListGroup.Item>
              <strong>Title:</strong> {user.employment.title}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Key Skill:</strong> {user.employment.key_skill}
            </ListGroup.Item>
          </ListGroup>
        
          <Card.Title>Credit Card</Card.Title>
          <Card.Text className="m-2">
           
            <strong>CC Number:</strong> {user.credit_card.cc_number}
            
          </Card.Text>
        </Col>
        <Col as={Card} className="p-4" sm={6} md={4}>
          <Card.Title className="border-bottom border-dark pb-2">Address</Card.Title>
          <Card.Text>
            <strong>Street Name:</strong> {user.address.street_name}
            <br />
            <strong>Street Address:</strong> {user.address.street_address}
            <br />
            <strong>City:</strong> {user.address.city}
            <br />
            <strong>State:</strong> {user.address.state}
            <br />
            <strong>Country:</strong> {user.address.country}
            <br />
            <strong>Zip Code:</strong> {user.address.zip_code}
            <br />
          </Card.Text>
        </Col>
      
        <Col as={Card} className="p-4" sm={6} md={3}>
          <Card.Title className="border-bottom border-dark pb-2" >Subscription</Card.Title>
          <Card.Text>
            <strong>Plan:</strong> {user.subscription.plan}
            <br />
            <strong>Status:</strong> {user.subscription.status}
            <br />
            <strong>Payment Method:</strong> {user.subscription.payment_method}
            <br />
            <strong>Term:</strong> {user.subscription.term}
            <br />
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
};

export default Task3;
