import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useStateValue } from "../statemangement/StateProvider";

const Task1 = () => {
  const [{ users, circles }, dispatch] = useStateValue();
  
  const handleIncrement = (e, index) => {
    e.preventDefault();
    
    const newCircles = [...circles];
    newCircles[index] = {
      counter: circles[index].counter + 1,
      color: getRandomColor(),
    };
    dispatch({
      type: "SET_CIRCLE",
      value: newCircles,
    });
  };

  const handleDuplicate = (e, index) => {
    e.preventDefault();
    if (circles.length >= 10) return;
    

    const newCircles = [...circles];
    newCircles[index] = { counter: 0, color: circles[index].color };
    const newCircle = { counter: 0, color: circles[index].color };
    newCircles.splice(index + 1, 0, newCircle);
    dispatch({
      type: "SET_CIRCLE",
      value: newCircles,
    });
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center">
        {circles.map((circle, index) => (
          <Col key={index} className="text-center my-4">
            <div
              className="mx-auto d-flex mx-atuo m-1 justify-content-center align-items-center"
              style={{
                backgroundColor: circle.color,
                height: "10vh",
                width: "10vh",
                borderRadius: "50%",
              }}>
              <p className="counter text-dark">{circle.counter}</p>
            </div>
            <p className="color-text mb-2">Background Color: {circle.color}</p>
            <Button
              size={"sm"}
              className="m-1"
              onClick={(e) => handleIncrement(e, index)}>
              Increase Counter
            </Button>
            <Button
              size={"sm"}
              className="m-1"
              onClick={(e) => handleDuplicate(e, index)}>
              Duplicate Circle
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Task1;
