import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { useDocumentTitle } from "./PageUtils";

const Fees: React.FC = () => {
  useDocumentTitle("Fees");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.remove("active");
  return (
    <>
      <BackgroundHeader title="Fees" />
      <Container id="fees" className="mt-3 p-0">
        <h1>General Information</h1>
        <hr className="header-underline" />

        <p className="px-3">
          Journeys Continue is guided by the AASW8 &apos;Schedule of recommended
          fees for Accredited Social Workers in private practice&apos;. Fees and
          charges may vary depending on services provided. Consultation fees
          will be confirmed at time of confirming an appointment.
        </p>
        <ul>
          <li>
            The default consultation hourly rate for this private social work
            practice is $160.
          </li>
          <li>
            A once off admin fee of $30.00 is applied to all initial
            consultations.
          </li>
          <li>
            For home and workplace consultations travel charges may apply.
          </li>
        </ul>
        <p className="px-3">Current fees and charges as of 1 July 2021</p>
        <h1>Cancellation Policy</h1>
        <hr className="header-underline" />
        <a
          className="contacts"
          href="pdf/Appointment_Cancellation_Policy_v.4.pdf"
          target="_blank"
        >
          Journeys Continue Appointment Cancellation Policy - click here to open
          PDF
          <BsFileEarmarkPdfFill />
        </a>
      </Container>
    </>
  );
};

export default Fees;
