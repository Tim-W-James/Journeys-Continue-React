import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "./PageUtils";

const NotFound: React.FC = () => {
  useDocumentTitle("Page Not Found");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.remove("active");
  return (
    <>
      <BackgroundHeader title="Page Not Found" />
      <Container id="not-found" className="mt-3 p-0">
        <div className="d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3">
              {" "}
              <span className="text-danger">Oops!</span> Page not found.
            </p>
            <p className="lead">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
