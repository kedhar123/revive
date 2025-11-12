"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function AnimatedFeatures(): JSX.Element {
  const featuresRef = useRef(null);
  const lineRef = useRef(null);

  const features = [
    {
      id: "eco-friendly",
      title: "Eco-Friendly",
      description: "Sustainable choices for a better planet",
      color: "#00c851",
      bgColor: "bg-green-100",
      iconColor: "bg-green-500",
    },
    {
      id: "ai-powered",
      title: "AI-Powered",
      description: "Advanced machine learning technology",
      color: "#4285f4",
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-500",
    },
    {
      id: "real-time",
      title: "Real-time",
      description: "Instant analysis and recommendations",
      color: "#ff8800",
      bgColor: "bg-orange-100",
      iconColor: "bg-orange-500",
    },
    {
      id: "personalized",
      title: "Personalized",
      description: "Tailored to your dietary preferences",
      color: "#aa66cc",
      bgColor: "bg-purple-100",
      iconColor: "bg-purple-500",
    },
  ];

  useEffect(() => {
    const featureElements =
      featuresRef.current?.querySelectorAll(".feature-card");
    const line = lineRef.current;

    if (!featureElements || !line) return;

    featureElements.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        const rect = element.getBoundingClientRect();
        const parentRect = featuresRef.current.getBoundingClientRect();

        anime({
          targets: line,
          left: rect.left - parentRect.left,
          width: rect.width,
          backgroundColor: features[index].color,
          duration: 500,
          easing: "easeOutExpo",
        });

        // Animate the feature card
        anime({
          targets: element,
          scale: 1.05,
          duration: 300,
          easing: "easeOutQuad",
        });
      });

      element.addEventListener("mouseleave", () => {
        anime({
          targets: element,
          scale: 1,
          duration: 300,
          easing: "easeOutQuad",
        });
      });
    });

    // Initialize line position to first feature
    if (featureElements[0]) {
      const firstRect = featureElements[0].getBoundingClientRect();
      const parentRect = featuresRef.current.getBoundingClientRect();

      anime.set(line, {
        left: firstRect.left - parentRect.left,
        width: firstRect.width,
        backgroundColor: features[0].color,
      });
    }
  }, []);

  return (
    <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Revive?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI-powered platform helps you make informed decisions about your
          food choices while promoting sustainability.
        </p>
      </div>

      <div
        ref={featuresRef}
        className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="feature-card text-center cursor-pointer transition-all duration-300 p-4 rounded-xl hover:shadow-lg"
            data-color={feature.color}
          >
            <div
              className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:shadow-lg`}
            >
              <div
                className={`w-8 h-8 ${feature.iconColor} rounded-full`}
              ></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}

        {/* Animated highlight line */}
        <div
          ref={lineRef}
          className="absolute bottom-0 h-1 rounded-full transition-all duration-500"
          style={{
            width: "0px",
            left: "0px",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
  );
}
