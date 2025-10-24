import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import CaseStudy from "./pages/Casestudy/Casestudy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/casestudy" element={<CaseStudy />} />
      </Route>
    </Routes>
  );
}
