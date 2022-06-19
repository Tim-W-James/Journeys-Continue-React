import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "./PageUtils";

const Disability: React.FC = () => {
  useDocumentTitle("Disability");

  document.getElementById("basic-nav-dropdown")?.classList.add("active");
  return (
    <>
      <BackgroundHeader title="Disability" />
      <Container id="disability" className="mt-3 p-0">
        <p className="px-3">
          Journeys Continue has extensive{" "}
          <Link to="who-are-we">experience</Link> working with people with
          physical and mental disabilities.
          <br />
          <br />
          Journeys Continue provides a range of therapeutic and coordination
          support services that will assist you establish, review and improve
          support plans and opportunities that link you to services that will
          provide the most appropriate outcomes for you. Our strength is that we
          work with you so that your plan is best suited to your needs and
          circumstances. These supports are tailored to be appropriate so that
          you can identify and achieve your goals.
          <br />
          <br />
          We can support you regardless of whether your disability is permanent
          or transient. You may have already established supports through the
          National Disability Insurance Scheme (NDIS), Workcover or insurance
          that may need reviewing or updating, or you may be seeking help to
          navigate the systems to see what assistance may be available for you.
          <br />
          <br />
          Journeys Continue can work with plan and self-managed{" "}
          <a href="https://www.ndis.gov.au/">NDIS packages</a>. If you intend to
          use your NDIS funding for Support Coordination, please ensure your
          Capacity Building budget has available funds.
          <br />
          <br />
          Through your NDIS package, Journeys Continue will work with you to
          define appropriate pathways for you to achieve your social and skills
          development goals. We can help you strengthen informal and formal
          networks and maximise benefits from service delivery so that you can
          build skills to live more independently and be included in your
          community. We will assist you to manage and navigate challenges you
          may experience in your support environment and ensure consistent
          person-centred approach to the provision of support in achieved.
        </p>
      </Container>
    </>
  );
};

export default Disability;
