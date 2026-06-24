/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import UAE from './pages/UAE';
import Dubai from './pages/Dubai';
import USA from './pages/USA';
import UK from './pages/UK';
import EU from './pages/EU';
import Services from './pages/Services';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import CaseStudyItem from './pages/CaseStudyItem';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import About from './pages/About';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="uae" element={<UAE />} />
            <Route path="dubai" element={<Dubai />} />
            <Route path="usa" element={<USA />} />
            <Route path="uk" element={<UK />} />
            <Route path="eu" element={<EU />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="case-studies/:slug" element={<CaseStudyItem />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="*" element={<div className="py-32 text-center text-2xl font-bold">404 - Not Found</div>} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
