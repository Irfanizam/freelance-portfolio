"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCode, FaGraduationCap, FaBriefcase, FaHeart } from "react-icons/fa";

function ProfileImage() {
  const [imgSrc, setImgSrc] = useState("/profile.png");

  return (
    <Image
      src={imgSrc}
      alt="Muhammad Irfan Bin Ahmad Nizam"
      width={800}
      height={1000}
      className="object-contain w-full h-auto max-h-[650px] drop-shadow-2xl"
      priority
      quality={100}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
      style={{
        filter: "drop-shadow(0 20px 40px rgba(14, 165, 233, 0.2))",
      }}
      onError={() => {
        // Fallback to jpg if png doesn't exist
        if (imgSrc.includes(".png")) {
          setImgSrc("/profile.jpg");
        }
      }}
    />
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-300 to-primary-500 rounded-3xl transform rotate-6 opacity-30 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-white via-primary-50/30 to-primary-100/50 p-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-primary-100/50">
              <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100/50 flex items-center justify-center min-h-[500px] p-8">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgb(14, 165, 233) 1px, transparent 0)`,
                      backgroundSize: "40px 40px",
                    }}
                  ></div>
                </div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <ProfileImage />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Muhammad Irfan Bin Ahmad Nizam
              </h3>
              <p className="text-xl text-primary-600 font-semibold mb-6">
                Full-Time Software Developer & Freelancer
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                I’m a full-time software developer who also builds real
                solutions for clients through freelance work — including web
                apps, backend systems, automation tools, and academic projects.
                I’ve delivered projects for students, local businesses, and
                international clients, ranging from small projects to full-stack
                platforms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                My approach is simple: clean architecture, maintainable code,
                and clear communication. Whether you need a custom website, an
                internal tool, a system fix, or a well-structured student
                project, I focus on delivering reliable results backed by solid
                engineering practices.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FaBriefcase className="text-primary-600 text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600">Year Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FaCode className="text-primary-600 text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Key Values */}
            <div className="pt-6 space-y-3">
              <h4 className="font-semibold text-gray-900 mb-3">
                What I Value:
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <FaHeart className="text-primary-600" />
                  <span className="text-gray-700">
                    Quality code with proper documentation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHeart className="text-primary-600" />
                  <span className="text-gray-700">
                    On-time delivery, every time
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHeart className="text-primary-600" />
                  <span className="text-gray-700">
                    Clear communication and explanations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHeart className="text-primary-600" />
                  <span className="text-gray-700">
                    Affordable pricing for students and business
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Let's Work Together</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
