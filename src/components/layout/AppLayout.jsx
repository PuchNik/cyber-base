import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function AppLayout() {
    return (
        <div className="page">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
