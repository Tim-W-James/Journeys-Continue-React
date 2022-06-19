import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { useDocumentTitle } from "./PageUtils";

const Resources: React.FC = () => {
  useDocumentTitle("Resources");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.remove("active");
  return (
    <>
      <BackgroundHeader title="Resources" />
      <Container id="resources" className="mt-3 p-0">
        <h1>Journeys Continue Policy and Processes</h1>
        <hr className="header-underline" />
        <ul>
          <li>
            <a href="pdf/Privacy_Policy_v.3.pdf">
              Journeys Continue Privacy Policy
              <BsFileEarmarkPdfFill />
            </a>
          </li>
          <li>
            <a href="pdf/Appointment_Cancellation_Policy_v.4.pdf">
              Journeys Continue Cancellation Policy
              <BsFileEarmarkPdfFill />
            </a>
          </li>
        </ul>
        <h1>Social Work Standards and Ethics</h1>
        <hr className="header-underline" />
        <ul>
          <li>
            <a href="https://www.aasw.asn.au/document/item/13400 ">
              Australian Association of Social Workers Code of Ethics, 2020
            </a>
          </li>
        </ul>
        <h1>Disability Resources</h1>
        <hr className="header-underline" />
        <ul>
          <li>
            <a href="https://www.ndis.gov.au/">NDIS Information</a>
          </li>
          <li>
            <a href="https://www.ndis.gov.au/">NDIS Information</a>
          </li>
          <li>
            <a href="https://www.ndiscommission.gov.au/sites/default/files/documents/2019-12/ndis-practice-standards-and-quality-indicators.pdf">
              NDIS Practice Standards and Quality Indicators
              <BsFileEarmarkPdfFill />
            </a>
          </li>
          <li>
            <a href="https://www.ndis.gov.au/contact/feedback-and- complaints">
              NDIS Feedback and Complaints
            </a>
          </li>
        </ul>
        <h1>Aged Care Resources </h1>
        <hr className="header-underline" />
        <ul>
          <li>
            <a href="https://www.myagedcare.gov.au/">
              My Aged Care Information
            </a>
          </li>
          <li>
            <a href="https://www.myagedcare.gov.au/aged-care-quality- standards">
              Aged Care Quality Standards
            </a>
          </li>
          <li>
            <a href="https://www.cotansw.com.au/">Council of the Aging NSW</a>
          </li>
        </ul>
        <h1>Carers Resources</h1>
        <hr className="header-underline" />
        <ul>
          <li>
            <a href="https://www.carersnsw.org.au/">Carers NSW</a>
          </li>
          <li>
            <a href="https://www.servicesaustralia.gov.au/individuals/services/centrelink/carer-allowance">
              Carers Allowance
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Resources;
