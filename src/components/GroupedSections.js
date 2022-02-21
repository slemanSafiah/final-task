import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Container, Row, Col } from "react-bootstrap";

function GroupedSections() {
  return (
    <div className="sections">
      <Container fluid>
        <Row>
          <Col lg={9}>
            <LeftSide />
          </Col>
          <Col lg={3}>
            <RightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GroupedSections;
