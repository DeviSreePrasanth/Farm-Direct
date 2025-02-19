import React, { useEffect, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate a slight delay and then reveal the feature blocks
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 22h20l-10-8L2 22z" />
          <path d="M22 2l-10 8-10-8" />
          <path d="M22 2v20" />
          <path d="M2 2v20" />
        </svg>
      ),
      title: "Farm-to-Table Freshness",
      description:
        "Enjoy the vibrant flavors and superior quality of food that has been carefully harvested and brought straight to your doorstep.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20l9-5-9-5-9 5 9 5z" />
          <path d="M12 12l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
      title: "Pure and Clean Ingredients",
      description:
        "Enjoy the peace of mind that comes from consuming food free from harmful chemicals, pesticides, and artificial additives.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14.31 8L20 17.94" />
          <path d="M9 11.12L12.29 17.94" />
          <path d="M4.91 8L12 17.94" />
        </svg>
      ),
      title: "Nutritional Excellence",
      description:
        "Our products are packed with essential nutrients, vitamins, and minerals, providing customers with optimal nutrition.",
    },
  ];

  return (
    <div className="w-full px-4">
      {/* Responsive layout */}
      <div className="flex flex-col items-center md:flex-row justify-around md:space-x-8 space-y-8 md:space-y-0 overflow-hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full md:w-1/3 flex flex-col items-center text-center space-y-4 p-4 transform transition-transform duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="text-green-600 rounded-full p-4">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
