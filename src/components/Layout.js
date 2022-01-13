import Header from "./Header";
import {Container} from "react-bootstrap";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        { children }
      </Container>
      <Footer/>
    </div>
  );
};

export default Layout;
