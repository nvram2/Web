import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Madlabs Digital</title>
        <meta name="description" content="Privacy Policy for Madlabs Digital. Learn how we handle your data, ensure privacy, and comply with regulations." />
        <meta name="keywords" content="Privacy Policy, Data Protection, Madlabs Digital Privacy" />
        <meta property="og:title" content="Privacy Policy | Madlabs Digital" />
        <meta property="og:description" content="Privacy Policy for Madlabs Digital." />
        <link rel="canonical" href="https://madlabs.digital/privacy" />
      </Helmet>

      <div className="pt-24 pb-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-lg prose-p:text-brand-text/80">
            <p><strong>Last Updated:</strong> October 2024</p>
            
            <p>
              At Madlabs Digital ("we," "us," or "our"), respecting your privacy is deeply important to us. This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website or engage our consulting and technology services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. This includes:</p>
            <ul>
              <li><strong>Contact Data:</strong> First name, last name, email address, phone number.</li>
              <li><strong>Business Data:</strong> Company name, website URL, team size, tools you currently use.</li>
              <li><strong>Communication Data:</strong> Any information you provide in strategy call booking forms or email communications.</li>
            </ul>
            <p>We also automatically collect certain information when you visit our site, including IP address, browser and device characteristics, operating system, referring URLs, and information about how you interact with our website.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use your information to:</p>
            <ul>
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Respond to your inquiries and offer support.</li>
              <li>Send you administrative information, such as updates to our terms, conditions, and policies.</li>
              <li>Deliver marketing and promotional communications, if you have opted in.</li>
              <li>Assess your business needs to provide relevant consulting services.</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We securely use third-party vendors (e.g., Google Workspace, HubSpot, Calendly, Vercel) to process operational data.</p>

            <h2>4. Security</h2>
            <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that we cannot guarantee that the internet itself is 100% secure.</p>

            <h2>5. Your Privacy Rights</h2>
            <p>Depending on your location, you may have rights under applicable privacy laws (such as GDPR or CCPA) to access, correct, or delete the personal data we hold about you. To exercise these rights, please contact us.</p>

            <h2>6. Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us at privacy@madlabs.digital.</p>
          </div>
        </div>
      </div>
    </>
  );
}
