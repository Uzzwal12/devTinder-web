import React from "react";

function Refund() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">REFUND POLICY</h1>
      </div>

      <div className="text-lg">
        <ul className="list-inside list-disc text-left mx-auto max-w-4xl">
          <li className="mb-4">
            We offer a 7 days <strong>"NO QUESTIONS ASKED"</strong> refund
            policy.
          </li>
          <li className="mb-4">
            Within the 7 days of your course purchase, you can ask for the
            refund anytime.
          </li>
          <li className="mb-4">
            For refunds, please email us at{" "}
            <a
              href="mailto:support@tinderdev.info"
              className="text-blue-500 hover:underline"
            >
              support@tinderdev.info
            </a>
          </li>
          <li className="mb-4">
            In case of course bundles, a refund will be initiated for the whole
            course bundle, and not for individual courses.
          </li>
          <li className="mb-4">
            After the refund is initiated, it takes around 5-7 business days for
            the amount to be reflected in your bank.
          </li>
          <li className="mb-4">
            Please note that once a refund is processed, no further refunds will
            be provided for the same purchase/course.
          </li>
          <li className="mb-4">
            Purchases made using the <strong>"Gift-a-course"</strong> feature
            are not eligible for a refund.
          </li>
          <li className="mb-4">
            Refunds are only provided if you have access to the course.
          </li>
          <li className="mb-4">
            If your email ID is found to be suspicious or involved in malicious
            activity, a refund will not be initiated.
          </li>
          <li>
            If any queries, feel free to contact us at{" "}
            <a
              href="mailto:support@tinderdev.info"
              className="text-blue-500 hover:underline"
            >
              support@tinderdev.info
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Refund;
