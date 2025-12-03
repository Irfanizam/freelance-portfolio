"use client";

import { useRef, useState, useEffect } from "react";
import { FaCode, FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Freelancer Management App",
    description:
      "A custom application for a talent-gathering company in Dubai. Features include messaging, profile management, authentication, role-based access, and secure backend architecture.",
    tech: ["React", "Next.js", "Node.js", "Prisma", "Docker", "JWT Security"],
    category: "Full-Stack Development",
    status: "Completed",
    code: `// Secure authentication & role management
class AuthService {
  async login(credentials) {
    const user = await validateUser(credentials);
    return generateJWT(user);
  }
}`,
  },
  {
    title: "Restaurant QR Ordering System",
    description:
      "A fully functional restaurant ordering system with QR code menu, order tracking, and email receipt automation. Built for a real business to streamline customer orders.",
    tech: ["Node.js", "JavaScript", "HTML", "CSS", "Email API"],
    category: "Web Application",
    status: "Completed",
    code: `// QR menu & order processing
function processOrder(order) {
  generateQR(order);
  sendReceipt(order.email);
}`,
  },
  {
    title: "Learning Resource & Test Web App",
    description:
      "A web-based library system for storing lessons, quizzes, and answer evaluations. Includes admin tools, content management, and student access features.",
    tech: ["Node.js", "JavaScript", "SQL", "Express"],
    category: "Education App",
    status: "Completed",
    code: `// Content management system
app.post('/quiz', async (req, res) => {
  const quiz = await createQuiz(req.body);
  res.json(quiz);
});`,
  },
  {
    title: "English Subject Web App",
    description:
      "A simple PHP-based educational platform for English subject learning, complete with teaching materials, exercises, and user accounts.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    category: "Web Application",
    status: "Completed",
    code: `// PHP backend & MySQL
$query = "SELECT * FROM lessons";
$result = mysqli_query($conn, $query);`,
  },
  {
    title: "PHP & C++ Hybrid Systems",
    description:
      "A collection of academic and practical systems combining PHP with SQL databases and C++ modules, focusing on full-stack logic and backend processing.",
    tech: ["C++", "PHP", "MySQL"],
    category: "Hybrid Development",
    status: "Completed",
    code: `// Hybrid system integration
int processData() {
  return calculate();
}`,
  },
  {
    title: "C++ Traffic System",
    description:
      "A comprehensive traffic management simulation with traffic flow logic, signal control, and analytics. Built as an academic project.",
    tech: ["C++", "Data Structures", "Algorithms"],
    category: "Academic Project",
    status: "Completed",
    code: `// Clean, efficient code
class TrafficSystem {
public:
    void manageFlow();
};`,
  },
  {
    title: "Modern Web Application Framework",
    description:
      "Responsive web applications with clean UI, API integration, and scalable architecture using modern frameworks.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    status: "Available",
    code: `// Modern React component
const App = () => {
  return <Component />;
};`,
  },
  {
    title: "Database Design & Optimization",
    description:
      "Custom database solutions featuring schema design, modeling, indexing, and query optimization for fast, secure data access.",
    tech: ["SQL", "Database Design", "Data Modeling"],
    category: "Database",
    status: "Available",
    code: `-- Optimized queries
SELECT * FROM users 
WHERE status = 'active'
INDEX idx_status;`,
  },
  {
    title: "Data Automation & Analytics",
    description:
      "Automated large-scale data processing workflows and developed analytical tools. Improved data accuracy, forecasting, and reporting.",
    tech: [
      "Excel VBA",
      "Data Cleaning",
      "Forecasting Models",
      "Process Automation",
      "Power BI",
    ],
    category: "Data Analytics",
    status: "Completed",
    code: `// VBA automation
Sub ProcessData()
    Range("A1").Value = Calculate()
End Sub`,
  },
];

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    
    if (container) {
      // Scroll event listeners
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);

      // Mouse wheel horizontal scrolling
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollBy({
            left: e.deltaY,
            behavior: "smooth",
          });
        }
      };

      container.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        container.removeEventListener("wheel", handleWheel);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Get the first project card to calculate its width
      const firstCard = container.querySelector('[class*="flex-shrink-0"]') as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 24; // gap-6 = 24px
        const scrollAmount = (cardWidth + gap) * 2; // Scroll 2 projects at a time
        
        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio & Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Examples of work I've completed for clients
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-primary-50 transition-all hover:scale-110 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-primary-600 text-xl" />
            </button>
          )}

          {/* Scrollable Projects */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[500px] lg:w-[550px]"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <FaCode className="text-white text-3xl" />
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Code Preview */}
                    {project.code && (
                      <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mb-4">
                        <div className="text-primary-600">
                          {project.code.split("\n")[0]}
                        </div>
                        <div className="text-gray-800 mt-2 whitespace-pre">
                          {project.code.split("\n").slice(1).join("\n")}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {project.status} ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-primary-50 transition-all hover:scale-110 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-primary-600 text-xl" />
            </button>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary-300 opacity-50"
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see more examples or discuss your project?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
