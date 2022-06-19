import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { useDocumentTitle } from "./PageUtils";

const SupportingCarers: React.FC = () => {
  useDocumentTitle("Supporting Carers");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.add("active");
  return (
    <>
      <BackgroundHeader title="Supporting Care" />
      <Container id="supporting-carers" className="mt-3 p-0">
        <p className="px-3">
          We work with carers so that their needs are supported while they care
          for others.
          <br />
          <br />
          Family and friends are important in providing everyday care for our
          loved ones experiencing limitations due to disability, health issues
          and / or age. It is important that we do not overlook their valuable
          caring roles, as their support provides a complete and loving package.
          Carers face new challenges, limitations on their independence and
          emotional and physical challenges, particularly when the caring role
          is ongoing or a result of a sudden change in circumstances.
          <br />
          <br />
          Journeys Continue recognises these valuable people and provides
          emotional and practical care for the carers. We can connect carers to
          services to support them - including services that will reduce the
          daily demands placed on them, support networks and respite care
          options. We are here to help you navigate through the complexities of
          aged care, disability and other support systems, services, and
          administration.
          <br />
          <br />
          Journeys Continue specialises in working with you to develop
          succession plans for ongoing care for your loved one should you become
          challenged by your ability to continue long-term care. We enable you
          to share and teach your knowledge, skills and intimate understanding
          of the needs of your loved one to alternate carers in preparation for
          the time when you can no longer fulfill this role. This provides peace
          of mind that you continue to do the best for those that you care for.
        </p>
      </Container>
    </>
  );
};

export default SupportingCarers;
