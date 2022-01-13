import Link from 'next/link';
import {Card, ListGroup} from "react-bootstrap";

const CourseCard = ({id, name, lessons}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{ id + " " + name }</Card.Title>
        <ListGroup>
          {
            lessons.map(lesson => (
              <Link href={`/ders/${lesson.id}`} key={lesson.id}>
                <a>
                  <ListGroup.Item className="text-primary">
                    {lesson.name}
                  </ListGroup.Item>
                </a>
              </Link>
            ))
          }
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
