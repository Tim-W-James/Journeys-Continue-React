import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { useDocumentTitle } from "./PageUtils";

const AgedCare: React.FC = () => {
  useDocumentTitle("Aged Care");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.add("active");
  return (
    <>
      <BackgroundHeader title="Aged Care" />
      <Container id="aged-care" className="mt-3 p-0">
        <p className="px-3">
          To continue to live meaningful and fulfilling lives as we age, we need
          to recognise health concerns and be able to adjust our lifestyle so we
          can still set and achieve our goals. Although it may feel that our
          aging health is letting us down, there are new opportunities that will
          support us as you strive toward and achieve our ambitions.
          <br />
          <br />
          Journeys Continue will work with you and your carers to provide
          personalised therapeutic and care coordination support. We work with
          you to understand your challenges and limitations, your needs, your
          current supports and your desires for achieving goals. These
          discussions will enable us to identify and connect you with the
          services, supports and networks best suited and most relevant to you.
          <br />
          <br />
          We will work with you, your carers and service providers (with your
          permission) to develop and implement a support plan. Our focus is to
          establish a plan that will move you closer to your goals, provide
          health, mental and spiritual wellbeing, assist with independence and
          limit social isolation.
          <br />
          <br />
          Journeys Continue can work with you to apply for, implement and review{" "}
          <a href="https://www.myagedcare.gov.au/">My Aged Care</a> supports.
          <br />
          <br />
          Journeys Continue is recognised by several Home Care Package (HCP)
          providers. With your permission, we will liaise with your existing HCP
          coordinator. There is also potential that our therapeutic and care
          coordination services could be paid for through your HCP provider.
          <br />
          <br />
          Journeys Continue can also support you through palliative care and end
          of life experiences.
        </p>
      </Container>
    </>
  );
};

export default AgedCare;
