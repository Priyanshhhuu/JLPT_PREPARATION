import React from "react";
import GradientText from "./button/GradientText";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[100vh] flex flex-col justify-center items-center banner-container relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 z-10"></div>

        {/* Text Content */}
        <div className="z-20 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight banner-text">
            Master JLPT Like a Pro!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 hidden ">
            Join us on a journey to conquer the Japanese Language Proficiency
            Test. From N5 to N1, we've got lessons, tests, and resources to
            guide you every step of the way.
          </p>

          <button className="px-6 py-3 text-lg bg-violet-500/40 text-white font-semibold rounded-lg shadow-md hover:bg-violet-600 transition">
            <GradientText
              colors={["#40ffaa", "#FF0000", "#40ffaa", "#FF0000", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Start Learning Now
            </GradientText>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
