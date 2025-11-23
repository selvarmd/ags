import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

function Layout() {
  const [appTheme, setAppTheme] = useState<"light" | "dark">("light");
  const [loading, setLoading] = useState(true); // page loader state

  const handleThemeChange = (theme: "light" | "dark") => setAppTheme(theme);

  useEffect(() => {
    const waitForAssets = async () => {
      // 1. Wait for window load
      if (document.readyState !== "complete") {
        await new Promise<void>((resolve) => {
          window.addEventListener("load", () => resolve(), { once: true });
        });
      }

      // 2. Wait for all fonts
      if (document.fonts) {
        await document.fonts.ready;
      }

      // 3. Wait for all images
      const images = Array.from(document.images);
      await Promise.all(
        images.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) resolve();
              else img.addEventListener("load", () => resolve());
            })
        )
      );

      setLoading(false);
    };

    waitForAssets();
  }, []);

  if (loading) {
    return <Loader mode="page" />; // full-page loader
  }

  return (
    <>
      <Header theme={appTheme} />
      <main>
        <Outlet context={{ onThemeChange: handleThemeChange }} />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
