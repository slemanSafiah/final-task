import { Container, Row, Col } from "react-bootstrap";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import "./charts/charts.style.css";

function Section3Left() {
  return (
    <div className="section-3">
      <Container>
        <Row>
          <Col lg={5}>
            <BarChart />
          </Col>
          <Col lg={4}>
            <LineChart />
          </Col>
          <Col lg={3}>
            <PieChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section3Left;
