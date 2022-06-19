import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { useDocumentTitle } from "./PageUtils";

const WhoWeAre: React.FC = () => {
  useDocumentTitle("Who We Are");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.add("active");
  return (
    <>
      <BackgroundHeader title="Who We Are" />
      <Container id="who-we-are" className="mt-3 p-0">
        <p className="px-3">
          Kenneth King established Journeys Continue in 2020 to provide local
          support services for people in the Bungendore and surrounding regions.
          He recognised the importance of local familiarity when coordinating
          and linking people to appropriate services and supports. He is happy
          to be sharing his experience and skills in the local area to support
          his neighbourhood.
          <br />
          <br />
          Kenneth has been an accredited social worker since 1990 and has
          decades of experience working as a social worker in the local area -
          both for non-government organisations and in The Canberra Hospital. He
          has spent most of this time working with those with disabilities, the
          aged and their carers. His work has included providing independent
          person-centred support coordination to individuals and their support
          networks.He has also developed several community support services for
          people with special needs - including mature carers, new dads and
          carers support groups and networks.
          <br />
          <br />
          Kenneth has experience with emergency, traumatic and life changing
          experiences, having volunteered as a Rural Fire Service chaplain, and
          worked in palliative care and end-of- life experiences while at The
          Canberra Hospital.
        </p>
      </Container>
    </>
  );
};

export default WhoWeAre;
