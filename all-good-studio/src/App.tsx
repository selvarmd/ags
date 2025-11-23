import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./ags-components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import CaseStudy from "./pages/Casestudy/Casestudy";

export default function App() {
  return (
    <BrowserRouter basename="/ags/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
