import {Col, Row} from "react-bootstrap";
import Layout from "../components/Layout";
import CourseCard from "../components/CourseCard";

import {data} from '../utils/data';

function App() {
  return (
    <Layout>
      <Row>
        { data.map(course => (
          <Col xs={3} key={course.id}>
            <CourseCard
              id={course.id}
              name={course.name}
              lessons={course.lessons}
            />
          </Col>
        )) }
      </Row>
    </Layout>
  );
}

export default App;
