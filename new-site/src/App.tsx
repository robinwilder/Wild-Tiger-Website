import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import WebDevelopment from './pages/WebDevelopment';
import PrototypeDevelopment from './pages/PrototypeDevelopment';
import WebHosting from './pages/WebHosting';
import Marketing from './pages/Marketing';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Process from './pages/Process';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/prototype-development" element={<PrototypeDevelopment />} />
          <Route path="/services/web-hosting" element={<WebHosting />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
