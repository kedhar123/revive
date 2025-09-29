"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function EnhancedAnimatedFeatures() {
  const featuresRef = useRef(null);
  const lineRef = useRef(null);
  const circleRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "eco-friendly",
      title: "Eco-Friendly",
      description: "Sustainable choices for a better planet",
      color: "#00c851",
      bgColor: "bg-green-100",
      iconColor: "bg-green-500",
      icon: "🌱",
    },
    {
      id: "ai-powered",
      title: "AI-Powered",
      description: "Advanced machine learning technology",
      color: "#4285f4",
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-500",
      icon: "🤖",
    },
    {
      id: "real-time",
      title: "Real-time",
      description: "Instant analysis and recommendations",
      color: "#ff8800",
      bgColor: "bg-orange-100",
      iconColor: "bg-orange-500",
      icon: "⚡",
    },
    {
      id: "personalized",
      title: "Personalized",
      description: "Tailored to your dietary preferences",
      color: "#aa66cc",
      bgColor: "bg-purple-100",
      iconColor: "bg-purple-500",
      icon: "🎯",
    },
  ];

  useEffect(() => {
    const featureElements =
      featuresRef.current?.querySelectorAll(".feature-card");
    const line = lineRef.current;
    const circle = circleRef.current;

    if (!featureElements || !line) return;

    featureElements.forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        setActiveFeature(index);
        const rect = element.getBoundingClientRect();
        const parentRect = featuresRef.current.getBoundingClientRect();

        // Animate the underline
        anime({
          targets: line,
          left: rect.left - parentRect.left,
          width: rect.width,
          backgroundColor: features[index].color,
          duration: 600,
          easing: "easeOutExpo",
        });

        // Animate floating circle
        if (circle) {
          anime({
            targets: circle,
            left: rect.left - parentRect.left + rect.width / 2 - 15,
            backgroundColor: features[index].color,
            scale: [0, 1.2, 1],
            duration: 800,
            easing: "easeOutElastic(1, .8)",
          });
        }

        // Card hover animation
        anime({
          targets: element,
          scale: 1.08,
          translateY: -5,
          duration: 400,
          easing: "easeOutQuad",
        });

        // Icon animation
        const iconElement = element.querySelector(".feature-icon");
        if (iconElement) {
          anime({
            targets: iconElement,
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            duration: 600,
            easing: "easeOutBack(1.7)",
          });
        }
      });

      element.addEventListener("mouseleave", () => {
        anime({
          targets: element,
          scale: 1,
          translateY: 0,
          duration: 300,
          easing: "easeOutQuad",
        });
      });
    });

    // Initialize animations
    if (featureElements[0]) {
      const firstRect = featureElements[0].getBoundingClientRect();
      const parentRect = featuresRef.current.getBoundingClientRect();

      anime.set(line, {
        left: firstRect.left - parentRect.left,
        width: firstRect.width,
        backgroundColor: features[0].color,
      });

      if (circle) {
        anime.set(circle, {
          left: firstRect.left - parentRect.left + firstRect.width / 2 - 15,
          backgroundColor: features[0].color,
        });
      }
    }
  }, []);

  return (
    <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
      {/* Background gradient that changes */}
      <div
        className="absolute inset-0 opacity-5 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${
            features[activeFeature]?.color || "#00c851"
          } 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
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
              className="feature-card text-center cursor-pointer transition-all duration-300 p-6 rounded-xl hover:shadow-xl relative"
              data-color={feature.color}
            >
              <div
                className={`feature-icon w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:shadow-lg relative overflow-hidden`}
              >
                <span className="text-2xl relative z-10">{feature.icon}</span>
                <div
                  className={`absolute inset-0 ${feature.iconColor} rounded-full opacity-80`}
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
            className="absolute bottom-0 h-1 rounded-full transition-all duration-500 shadow-lg"
            style={{
              width: "0px",
              left: "0px",
              backgroundColor: "transparent",
              boxShadow: `0 0 20px ${
                features[activeFeature]?.color || "#00c851"
              }40`,
            }}
          />

          {/* Floating animated circle */}
          <div
            ref={circleRef}
            className="absolute -top-8 w-8 h-8 rounded-full opacity-60 transition-all duration-500"
            style={{
              backgroundColor: "transparent",
              boxShadow: `0 0 15px ${
                features[activeFeature]?.color || "#00c851"
              }60`,
            }}
          />
        </div>

        {/* Active feature info */}
        <div className="mt-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500"
            style={{
              backgroundColor: `${
                features[activeFeature]?.color || "#00c851"
              }15`,
              color: features[activeFeature]?.color || "#00c851",
            }}
          >
            <span className="text-lg">{features[activeFeature]?.icon}</span>
            <span className="font-semibold">
              Currently viewing: {features[activeFeature]?.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
