"use client";

import { FaCheck, FaStar } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Basic Assignment",
    price: "RM 150-300",
    description: "Perfect for simple assignments and small projects",
    features: [
      "Basic code implementation",
      "Code comments & documentation",
      "1-2 revisions included",
      "Delivery within 3-5 days",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Standard Project",
    price: "RM 300-600",
    description: "Ideal for medium complexity projects",
    features: [
      "Full project implementation",
      "Comprehensive documentation",
      "3-5 revisions included",
      "Delivery within 5-7 days",
      "Priority email support",
      "Code explanation session",
    ],
    popular: true,
  },
  {
    name: "Premium Solution",
    price: "RM 600+",
    description: "For complex projects and custom solutions",
    features: [
      "Complete custom solution",
      "Full documentation & comments",
      "Unlimited revisions",
      "Fast delivery (negotiable)",
      "Priority support (WhatsApp/Email)",
      "Multiple explanation sessions",
      "Code optimization",
      "Future maintenance support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable pricing designed for students and small businesses.
            All prices in Malaysian Ringgit (RM).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular
                  ? "border-primary-500 shadow-2xl transform scale-105"
                  : "border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <FaStar className="text-xs" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom quote? All projects are priced based on complexity and requirements.
          </p>
          <p className="text-sm text-gray-500">
            * Final pricing depends on project scope and timeline. Contact me for a detailed quote.
          </p>
        </div>
      </div>
    </section>
  );
}

