import { Button } from "@/components/ui/button";
import { useLocation } from "wouter"; // Import useLocation from wouter
import pic from "./colleagues-studying-university-library.jpg"

const Hero = () => {
  const [, setLocation] = useLocation(); // useLocation hook to navigate

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Handle click event for Enroll Now button
  const handleEnrollClick = () => {
    setLocation("/register"); // Navigate to the /register page
  };

  return (
    <>
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-50 to-indigo-50 pt-16 pb-12 md:pt-24 md:pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl text-[#8B4513] md:text-5xl font-bold text-gray-800 leading-tight">
                Welcome <span className="text-primary">to</span> JD{" "}
                <span className="text-purple-500">Tutoring</span>
              </h1>

              <p className="mt-4 text-lg text-gray-600">
                At JD Tutoring, we are dedicated to empowering students to
                achieve academic excellence. Our experienced tutors provide
                personalized support to help learners overcome challenges and
                reach their full potential.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button
                  onClick={handleEnrollClick} // Navigate to Register page on click
                  className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition-colors shadow-md"
                >
                  Enroll now
                </Button>
                <Button
                  onClick={() => setLocation("/services")}
                  variant="outline"
                  className="px-6 py-3 bg-white text-primary border border-primary rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src={pic}
                alt="Students learning mathematics and physics"
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="hidden lg:block absolute -bottom-6 left-1/4 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center text-green-500 font-bold">
            <i className="fas fa-check-circle mr-2"></i>
            <span>Personalized Learning</span>
          </div>
        </div>
        <div className="hidden lg:block absolute -bottom-6 right-1/4 transform translate-x-1/2 bg-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center text-purple-500 font-bold">
            <i className="fas fa-star mr-2"></i>
            <span>Expert Tutors</span>
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section className="bg-gradient-to-r from-orange-300 to-red-400 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
               FINAL REVISION EXAMINATION WORKSHOP 
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-2xl font-semibold mb-3">Grade 10-12 Workshop</h3>
              <p className="text-lg mb-4">
                Subjects: <span className="font-bold">Mathematics/Mathematical Literacy, Physics, Accounting, Life Science</span>
              </p>
              <div className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full inline-block font-bold text-lg">
                Requirement: Must have average of 45% on the subject
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
