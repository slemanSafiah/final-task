import TodoList from "./TodoList";
import Cards from "./Cards";
import { Container, Col, Row } from "react-bootstrap";

function Section1Left() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <TodoList />
        </Col>
        <Col lg={6}>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
}

export default Section1Left;
