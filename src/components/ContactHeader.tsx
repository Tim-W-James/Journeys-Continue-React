import { MdFacebook, MdMail } from "react-icons/md";

const ContactHeader: React.FC = () => (
  <div className="bg-light pt-2 pb-2 contact-header">
    <div className="container d-flex justify-content-between">
      <a
        href="https://journeyscontinue.com.au/"
        target="_blank"
        rel="noreferrer"
      >
        <MdFacebook />
        https://journeyscontinue.com.au/
      </a>
      <a
        href="mailto:contact@journeyscontinue.com.au"
        target="_blank"
        rel="noreferrer"
      >
        <MdMail />
        contact@journeyscontinue.com.au
      </a>
    </div>
  </div>
);

export default ContactHeader;
