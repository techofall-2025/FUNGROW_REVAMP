import { useState, useEffect } from "react";
import TeenPortal from "../app/page";
import CompanyPortal from "../app/companies/page";
import NotFound from "../app/not-found";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Direct path synchronizer
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Initial path load check
    handleLocationChange();

    // Listen to history pop events
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case "/":
        return <TeenPortal />;
      case "/companies":
        return <CompanyPortal />;
      default:
        return <NotFound />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="bg-background text-gray-100 min-h-screen flex flex-col font-sans antialiased text-opacity-95">
        <Navbar />
        <main id="main-content" className="flex-grow focus:outline-none">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
