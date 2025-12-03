import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaBug,
  FaGraduationCap,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Web & Backend Development",
    description:
      "Full-stack web development using modern technologies. From business websites to production-ready backend systems.",
    features: [
      "Frontend development",
      "Backend APIs",
      "Database integration",
      "Responsive UI/UX",
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Assignments & Academic Projects",
    description:
      "Support for student and academic projects across multiple languages with clear explanations and clean code.",
    features: [
      "C++, Java, Python, PHP, Javascript",
      "Code documentation",
      "Reports & explanations",
      "On-time delivery",
    ],
  },
  {
    icon: FaCode,
    title: "Custom Software Development",
    description:
      "Tailored software solutions for businesses and individuals. Designed for performance, scalability, and maintainability.",
    features: [
      "Web apps & internal tools",
      "Automation scripts",
      "API integrations",
      "Feature development",
    ],
  },
  {
    icon: FaMobileAlt,
    title: "Application Development",
    description:
      "Development of web-based and cross-platform applications. Built using clean, efficient, and maintainable code.",
    features: [
      "Custom interfaces",
      "Feature-rich functionality",
      "Performance optimization",
      "Cross-platform solutions",
    ],
  },
  {
    icon: FaDatabase,
    title: "Database & Data Solutions",
    description:
      "Design, implementation, and optimization of SQL and NoSQL databases, supported by strong data analysis and automation capabilities.",
    features: [
      "Database design & modeling",
      "SQL/NoSQL queries",
      "Performance optimization",
      "Data analysis & visualization",
      "Automation & reporting tools",
    ],
  },
  {
    icon: FaBug,
    title: "Code Review & Debugging",
    description:
      "Improve, optimize, or repair existing systems. Ideal for broken assignments or business applications.",
    features: [
      "Bug fixing",
      "Code optimization",
      "Performance tuning",
      "Best practices",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive software development services to help you succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="text-primary-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





