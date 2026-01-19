import { HashRouter } from "react-router-dom";
import ThemeProvider from "./ThemeProvider.jsx";

function AppProviders({ children }) {
    return (
        <ThemeProvider>
            <HashRouter>{children}</HashRouter>
        </ThemeProvider>
    );
}

export default AppProviders;
