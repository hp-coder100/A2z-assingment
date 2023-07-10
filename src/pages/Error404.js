import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <div className="text-center mt-5"  style={{ marginBottom: "100px" }}>
      <h1>Error 404</h1>
      <h4>Page Not Found</h4>
      <Button as={Link} to="/A2z-assingment/" variant="outline-primary">
        Go Back to Home
      </Button>
    </div>
  );
}

export default Error404;
