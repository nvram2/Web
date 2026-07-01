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
import AIAutomation from './pages/services/AIAutomation';
import LeadGeneration from './pages/services/LeadGeneration';
import CRMSystems from './pages/services/CRMSystems';
import ProductDevelopment from './pages/services/ProductDevelopment';
import WebDevelopment from './pages/services/WebDevelopment';
import DigitalConsulting from './pages/services/DigitalConsulting';
import BlockchainWeb3 from './pages/services/BlockchainWeb3';
import Industries from './pages/Industries';
import Startups from './pages/industries/Startups';
import SaaS from './pages/industries/SaaS';
import RealEstate from './pages/industries/RealEstate';
import Healthcare from './pages/industries/Healthcare';
import Education from './pages/industries/Education';
import Ecommerce from './pages/industries/Ecommerce';
import Logistics from './pages/industries/Logistics';
import Recruitment from './pages/industries/Recruitment';
import Enterprise from './pages/industries/Enterprise';
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
            <Route path="services/ai-automation" element={<AIAutomation />} />
            <Route path="services/lead-generation" element={<LeadGeneration />} />
            <Route path="services/crm-systems" element={<CRMSystems />} />
            <Route path="services/product-development" element={<ProductDevelopment />} />
            <Route path="services/web-development" element={<WebDevelopment />} />
            <Route path="services/digital-consulting" element={<DigitalConsulting />} />
            <Route path="services/blockchain-web3" element={<BlockchainWeb3 />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            <Route path="industries/startups" element={<Startups />} />
            <Route path="industries/saas" element={<SaaS />} />
            <Route path="industries/real-estate" element={<RealEstate />} />
            <Route path="industries/healthcare" element={<Healthcare />} />
            <Route path="industries/education" element={<Education />} />
            <Route path="industries/ecommerce" element={<Ecommerce />} />
            <Route path="industries/logistics" element={<Logistics />} />
            <Route path="industries/recruitment" element={<Recruitment />} />
            <Route path="industries/enterprise" element={<Enterprise />} />
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
