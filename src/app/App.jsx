import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout.jsx";
import AsyncBoundary from "../components/ui/AsyncBoundary.jsx";
import "../App.css";

const Home = lazy(() => import("../pages/Home.jsx"));
const Library = lazy(() => import("../pages/Library.jsx"));
const BookDetails = lazy(() => import("../pages/BookDetails.jsx"));
const Sections = lazy(() => import("../pages/Sections.jsx"));
const InfoSecurity = lazy(() => import("../pages/sections/InfoSecurity.jsx"));
const LegalActs = lazy(() => import("../pages/sections/LegalActs.jsx"));
const Networks = lazy(() => import("../pages/sections/Networks.jsx"));
const Programming = lazy(() => import("../pages/sections/Programming.jsx"));
const SectionTheory = lazy(() => import("../pages/sections/SectionTheory.jsx"));
const SectionPractice = lazy(() => import("../pages/sections/SectionPractice.jsx"));
const SectionGlossary = lazy(() => import("../pages/sections/SectionGlossary.jsx"));
const SectionTheoryText = lazy(() => import("../pages/sections/SectionTheoryText.jsx"));
const SectionTheoryVideo = lazy(() => import("../pages/sections/SectionTheoryVideo.jsx"));
const Glossary = lazy(() => import("../pages/Glossary.jsx"));
const Contacts = lazy(() => import("../pages/Contacts.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const withBoundary = (page) => <AsyncBoundary>{page}</AsyncBoundary>;

function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route index element={withBoundary(<Home />)} />
                <Route path="library" element={withBoundary(<Library />)} />
                <Route path="library/:slug" element={withBoundary(<BookDetails />)} />
                <Route path="sections" element={withBoundary(<Sections />)} />
                <Route
                    path="sections/info-security"
                    element={withBoundary(<InfoSecurity />)}
                />
                <Route
                    path="sections/legal-acts"
                    element={withBoundary(<LegalActs />)}
                />
                <Route
                    path="sections/networks"
                    element={withBoundary(<Networks />)}
                />
                <Route
                    path="sections/programming"
                    element={withBoundary(<Programming />)}
                />
                <Route
                    path="sections/:sectionId/theory"
                    element={withBoundary(<SectionTheory />)}
                />
                <Route
                    path="sections/:sectionId/theory-text"
                    element={withBoundary(<SectionTheoryText />)}
                />
                <Route
                    path="sections/:sectionId/theory-video"
                    element={withBoundary(<SectionTheoryVideo />)}
                />
                <Route
                    path="sections/:sectionId/practice"
                    element={withBoundary(<SectionPractice />)}
                />
                <Route
                    path="sections/:sectionId/glossary"
                    element={withBoundary(<SectionGlossary />)}
                />
                <Route path="glossary" element={withBoundary(<Glossary />)} />
                <Route path="contacts" element={withBoundary(<Contacts />)} />
                <Route path="*" element={withBoundary(<NotFound />)} />
            </Route>
        </Routes>
    );
}

export default App;
