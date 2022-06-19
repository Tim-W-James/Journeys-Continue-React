import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { MdFacebook, MdLocationPin, MdMail } from "react-icons/md";
import { useDocumentTitle } from "./PageUtils";

const ContactUs: React.FC = () => {
  useDocumentTitle("Contact Us");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.remove("active");
  return (
    <>
      <BackgroundHeader title="Contact Us" />
      <Container id="contact-us" className="mt-3 p-0 text-center">
        <p className="px-3">
          <MdMail />{" "}
          <a
            href="mailto:contact@journeyscontinue.com.au"
            target="_blank"
            rel="noreferrer"
          >
            contact@journeyscontinue.com.au
          </a>
        </p>
        <p className="px-3">
          <BsFillTelephoneFill />{" "}
          <a href="tel:0417494283" target="_blank" rel="noreferrer">
            0417 494 283
          </a>
        </p>
        <p className="px-3">
          <MdFacebook />{" "}
          <a
            href="https://www.facebook.com/journeyscontinue"
            target="_blank"
            rel="noreferrer"
          >
            facebook.com/journeyscontinue
          </a>
        </p>
        <p className="px-3">
          <BsLinkedin />{" "}
          <a
            href="https://www.linkedin.com/in/Journeys-Continue/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/journeys-continue
          </a>
        </p>
        <p className="px-3">
          <MdLocationPin />{" "}
          <a
            href="https://journeyscontinue.com.au/"
            target="_blank"
            rel="noreferrer"
          >
            Meetings at agreed locations
          </a>
        </p>
      </Container>
    </>
  );
};

export default ContactUs;
