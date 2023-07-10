// Task2.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useStateValue } from "../statemangement/StateProvider";
import { useNavigate } from "react-router-dom";

const Task2 = () => {
  const navigate = useNavigate();
  const [{ users }, dispatch] = useStateValue();

  const gotOUser = (e, index) => {
    e.preventDefault();
    dispatch({
      type: "SET_SELECTED",
      value: index,
    });
    navigate("/A2z-assingment/task3");
  };

  return (
    <Container style={{ marginBottom: "100px" }}>
      <h2 className="text-center mb-3">Employee List</h2>
      <Row className="justify-content-center m-2">
        {users.map((user, index) => (
          <Col
            onClick={(e) => gotOUser(e, index)}
            className="mb-3"
            key={user.id}
            sm={6}
            md={4}
            lg={3}>
            <Card className="shadow">
              <Card.Img variant="top" src={user.avatar} />
              <Card.Body className="justify-content-center">
                <Card.Title>
                  {user.first_name} {user.last_name}
                </Card.Title>
                <Card.Text>
                  {`ID : ${user.id}`}
                  <br />
                  {user.employment.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Task2;
