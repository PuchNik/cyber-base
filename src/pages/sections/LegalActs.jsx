import SectionPage from "../../components/sections/SectionPage.jsx";
import { sectionPages } from "../../data/sectionPages.js";

function LegalActs() {
    return <SectionPage {...sectionPages["legal-acts"]} />;
}

export default LegalActs;
