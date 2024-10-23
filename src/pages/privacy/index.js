import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-lg mb-4">Effective Date: [Insert Date]</p>

        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          {`Welcome to [Your Company Name] ("we," "our," "us"). Your privacy is
          important to us. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your information when you visit our website
          [Your Website URL], including any other media form, media channel,
          mobile website, or mobile application related or connected thereto
          (collectively, the "Site")`}.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect information about you in a variety of ways, including:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Personal Data:</strong> Personally identifiable information,
            such as your name, shipping address, email address, and telephone
            number.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers
            automatically collect when you access the Site, such as your IP
            address, browser type, and access times.
          </li>
          <li>
            <strong>Financial Data:</strong> Financial information related to
            your payment method when you purchase our services.
          </li>
          <li>
            <strong>Data From Social Networks:</strong> User information from
            social networking sites if you connect your account to such
            networks.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          3. Use of Your Information
        </h2>
        <p className="mb-4">
          We may use the information collected about you to:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Create and manage your account.</li>
          <li>Process your transactions and manage your orders.</li>
          <li>Respond to customer service requests and support needs.</li>
          <li>Send you marketing communications.</li>
          <li>Monitor and analyze usage and trends.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          4. Disclosure of Your Information
        </h2>
        <p className="mb-4">
          We may share information we have collected about you in certain
          situations, such as:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>By law or to protect rights.</li>
          <li>With third-party service providers.</li>
          <li>With your consent for marketing purposes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          5. Tracking Technologies
        </h2>
        <p className="mb-4">
          We may use cookies and other tracking technologies to help customize
          the Site and improve your experience. You can remove or reject
          cookies, but this may affect the functionality of the Site.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Third-Party Websites</h2>
        <p className="mb-4">
          The Site may contain links to third-party websites. Once you leave the
          Site, any information you provide to these third parties is not
          covered by this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          7. Security of Your Information
        </h2>
        <p className="mb-4">
          We use administrative, technical, and physical security measures to
          help protect your personal information. However, no method of
          transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Policy for Children</h2>
        <p className="mb-4">
          We do not knowingly solicit information from or market to children
          under the age of 13. If we learn that we have collected personal
          information from a child under age 13, we will delete that information
          as quickly as possible.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          9. Options Regarding Your Information
        </h2>
        <p className="mb-4">
          You may review or change your account information at any time. Upon
          your request to terminate your account, we will deactivate or delete
          your account and information from our active databases.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4">
          [Your Company Name]
          <br />
          [Your Company Address]
          <br />
          Email: [Your Email Address]
          <br />
          Phone: [Your Phone Number]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
