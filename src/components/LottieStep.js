"use client";
import Lottie from "lottie-react";

export default function LottieStep({
  animationData,
  title,
  description,
  stepNumber,
  bgColor = "bg-white",
  width = 300,
  height = 200,
}) {
  return (
    <div className="text-center group">
      {/* Animation Container */}
      <div
        className={`relative ${bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 mb-6 group-hover:scale-105`}
      >
        {/* Step Number Badge */}
        {/* <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center z-10">
          <span className="text-white font-bold text-lg">{stepNumber}</span>
        </div> */}

        {/* Lottie Animation */}
        <div className="flex justify-center items-center">
          <Lottie
            animationData={animationData}
            style={{ width: width, height: height }}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
}
