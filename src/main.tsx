import App from "App";
import AgedCare from "pages/AgedCare";
import ContactUs from "pages/ContactUs";
import Disability from "pages/Disability";
import Fees from "pages/Fees";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ProfessionalSupervision from "pages/ProfessionalSupervision";
import Resources from "pages/Resources";
import SupportingCarers from "pages/SupportingCare";
import WhoWeAre from "pages/WhoWeAre";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "scss/index.scss";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="disability" element={<Disability />} />
          <Route path="aged-care" element={<AgedCare />} />
          <Route path="supporting-carers" element={<SupportingCarers />} />
          <Route
            path="professional-supervision"
            element={<ProfessionalSupervision />}
          />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="fees" element={<Fees />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
