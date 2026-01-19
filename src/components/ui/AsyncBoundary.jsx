import { Suspense } from "react";
import PageLoader from "./PageLoader.jsx";

function AsyncBoundary({ children }) {
    return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export default AsyncBoundary;
