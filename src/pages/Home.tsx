import BackgroundHeader from "@components/Carosel";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "./PageUtils";

const Home: React.FC = () => {
  useDocumentTitle("Home");

  // hack
  document.getElementById("basic-nav-dropdown")?.classList.remove("active");
  return (
    <>
      <BackgroundHeader title="Welcome to Journeys Continue" />
      <Container id="home" className="mt-3 p-0">
        <p className="px-3">
          Our business focuses on coordinating supports and services,
          particularly for those with temporary or permanent{" "}
          <Link to="disability">disability</Link>, the{" "}
          <Link to="aged-care">aged</Link> and their{" "}
          <Link to="supporting-carers">families and carers</Link>. Our aim is to
          make the experience as smooth as possible, empower you as you continue
          your life&apos;s journey, and provide you with fulfilling and
          enjoyable life experiences. We will work with you as long as is
          required to achieve your goals - no matter how complex your situation
          may appear, and how short or long term your needs are.
          <br />
          <p style={{ textAlign: "center" }}>
            <img
              src="assets/socialWorkerLogo.png"
              alt="accredited social worker"
            />
            <img
              src="assets/palliativeCare.png"
              alt="accredited social worker"
            />
            <img src="assets/ACSA.png" alt="accredited social worker" />
          </p>
          <br />
          Journeys Continue works with you to identify your needs and goals, and
          advocates, coordinates and links you to those who can deliver the most
          appropriate support solutions for your situation. We will assist to
          reduce the complexities related to accessing appropriate supports and
          applying for NDIS, My Aged Care and other assistance. Our experience
          enables us to develop and review your support plans to make sure they
          remain best suited for your circumstances. We can assist you apply
          for, create and review plan and self-managed National Disability
          Insurance Scheme (NDIS) plans and My Aged Care supports.
          <br />
          <br />
          We work in the Bungendore and surrounding areas in NSW. We can meet
          you where it suits you best - in person at the Bungendore Medical
          Centre, in your home or via Zoom.
          <br />
          <br />
          We look forward to hearing from you and working with you to achieve
          your goals and live a fulfilling life.
        </p>

        <h1>Covid-19</h1>
        <hr className="header-underline" />
        <p className="px-3">
          We all continue to adapt to life during the coronavirus pandemic. At
          Journeys Continue, we take your health seriously and comply with
          current COVID-19 regulations and health recommendations. Local
          regulations can be found on the{" "}
          <a href="https://www.nsw.gov.au/covid-19">NSW</a> and{" "}
          <a href="https://www.covid19.act.gov.au">ACT</a> government covid web
          pages.
        </p>

        <h1>Acknowledgement of Country</h1>
        <hr className="header-underline" />
        <p className="px-3">
          Journeys Continue acknowledges the Traditional Owners of the land
          where we work and live. We pay our respects to Elders past, present
          and emerging. We celebrate the stories, culture and traditions of
          Aboriginal and Torres Strait Islander Elders of all communities.
        </p>
      </Container>
    </>
  );
};

export default Home;
