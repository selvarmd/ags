import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

function Layout() {
  const [appTheme, setAppTheme] = useState<"light" | "dark">("light");
  const [loading, setLoading] = useState(true); // page loader state

  // Only manage theme locally for the Header
  const handleThemeChange = (theme: "light" | "dark") => {
    setAppTheme(theme);
  };

  // Simulate page load (or replace with actual data loading)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader mode="page" />; // show full-page loader
  }

  return (
    <>
      {/* Header receives the current theme */}
      <Header theme={appTheme} />
      {/* Main content */}
      <main>
        <Outlet context={{ onThemeChange: handleThemeChange }} />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
