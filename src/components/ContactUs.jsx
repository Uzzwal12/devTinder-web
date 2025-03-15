import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
        <p className="text-lg mb-4">If any query, feel free to contact us!</p>
        <p className="text-lg mb-6">
          For any assistance and queries, mail us at{" "}
          <a
            href="mailto:support@tinderdev.info"
            className="text-blue-500 hover:underline"
          >
            support@tinderdev.info
          </a>
        </p>
        <p className="text-lg">
          Our Operational Address is:{" "}
          <span className="font-semibold">Dharuhera, Rewari-123106</span>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
