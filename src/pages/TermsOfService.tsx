import { Helmet } from "react-helmet-async";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Madlabs Digital</title>
        <meta name="description" content="Terms of Service for Madlabs Digital. Read the terms and conditions governing the use of our services and website." />
        <meta name="keywords" content="Terms of Service, Terms and Conditions, Madlabs Digital Terms" />
        <meta property="og:title" content="Terms of Service | Madlabs Digital" />
        <meta property="og:description" content="Terms of Service for Madlabs Digital." />
        <link rel="canonical" href="https://madlabs.digital/terms" />
      </Helmet>

      <div className="pt-24 pb-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-8">Terms of Service</h1>
          <div className="prose prose-lg prose-p:text-brand-text/80">
            <p><strong>Last Updated:</strong> October 2024</p>
            
            <p>
              Please read these Terms of Service ("Terms") carefully before using the website or engaging the consulting services operated by Madlabs Digital ("us", "we", or "our").
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website and engaging our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>

            <h2>2. Consulting & Development Services</h2>
            <p>
              Madlabs Digital provides technology consulting, web development, AI automation setup, lead generation strategies, and product development services. The specific scope, deliverables, timeline, and pricing for our services will be defined in a separate binding agreement (such as a Statement of Work or Master Services Agreement) before any work commences.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              Unless otherwise agreed upon in writing, Madlabs Digital retains all intellectual property rights to pre-existing code, methodologies, and frameworks used during project execution. Once full payment is received for custom deliverables, intellectual property rights to the specific custom code and assets produced for the client will be transferred as outlined in your specific contract.
            </p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>
              While we strive to provide the highest quality strategies and technical implementations, our services are provided on an "as is" and "as available" basis. We do not warrant that our business growth or SEO strategies will yield specific financial results, as market conditions and external platform algorithms are beyond our control.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall Madlabs Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our insights or services.
            </p>

            <h2>6. Client Responsibilities</h2>
            <p>
              To ensure project success, clients are expected to provide timely feedback, necessary credentials, and access to internal systems as required for project completion. Delays caused by the client may result in adjusted timelines.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with standard international business law, without regard to its conflict of law provisions.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at terms@madlabs.digital.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
