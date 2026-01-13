import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"

import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Blogs from "./pages/Blogs";
import Services from "./components/Services_new";
import Careers from "./pages/Carrears";
import Contact from "./components/Contact";
import Github from "./pages/Github";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Github" element={<Github />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
