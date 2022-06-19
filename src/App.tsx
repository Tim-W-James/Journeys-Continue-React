import ContactHeader from "@components/ContactHeader";
import PrimaryFooter from "@components/PrimaryFooter";
import PrimaryNavbar from "@components/PrimaryNavbar";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <ContactHeader />
    <PrimaryNavbar />
    <Outlet />
    <PrimaryFooter />
  </>
);

export default App;
