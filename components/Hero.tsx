"use client";

import { FaCode, FaRocket, FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaRocket className="text-primary-600" />
              <span>Professional Software Development Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your{" "}
              <span className="text-primary-600">Software Projects</span> Done
              Right
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Full-stack developer delivering business websites, backend & frontend
              systems, coding assignments, data automation tools, and data-driven
              solutions. Quality work with fast, reliable delivery.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-primary-600 text-xl" />
                <span className="text-gray-700">Fast turnaround times</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-primary-600 text-xl" />
                <span className="text-gray-700">
                  Clear, consistent, and professional code quality
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-primary-600 text-xl" />
                <span className="text-gray-700">
                  Negotiable pricing
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("portfolio");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-all"
              >
                View Portfolio
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaCode className="text-primary-600 text-2xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Quality Code
                      </h3>
                      <p className="text-sm text-gray-600">
                        Clean, efficient solutions
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    <div className="text-primary-600">
                      // Clean, efficient code
                    </div>
                    <div className="text-gray-800 mt-2">
                      function buildSolution() {"{"}
                      <br />
                      &nbsp;&nbsp;const quality = "high";
                      <br />
                      &nbsp;&nbsp;const delivery = "onTime";
                      <br />
                      &nbsp;&nbsp;return success;
                      <br />
                      {"}"}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Ready ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


