import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { useDocumentTitle } from "./PageUtils";

const ProfessionalSupervision: React.FC = () => {
  useDocumentTitle("Professional Supervision");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.add("active");
  return (
    <>
      <BackgroundHeader title="Professional Supervision" />
      <Container id="professional-supervision" className="mt-3 p-0">
        <p className="px-3">
          Journeys Continue provides professional supervision to support other
          social workers and those working in the human services sector. We also
          provide site supervision to undergraduate social work students gaining
          practical experience. This is a wonderful opportunity to shares
          decades of experience and knowledge to grow and develop the next
          generation of high performing support workers.
          <br />
          <br />
          If we can assist you in your professional development, please feel
          free to contact us.
        </p>
      </Container>
    </>
  );
};

export default ProfessionalSupervision;
