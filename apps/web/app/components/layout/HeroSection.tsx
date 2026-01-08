"use client";

import React, { useState } from "react";
import Link from "next/link";

// Import the fonts
import localFont from "next/font/local";

// Import icons
import {
  MathDuotoneIcon,
  ScienceDuotoneIcon,
  CodeDuotoneIcon,
  LanguageDuotoneIcon,
  BriefcaseDuotoneIcon,
  SearchDuotoneIcon,
  ArrowRightIcon,
} from "../icons";
import PenGif from "../icons/gif/Pen-pingpong.gif";
import BookGif from "../icons/gif/Book-pingpong.gif";

const signatureFont = localFont({
  src: "../../fonts/Signature December.otf",
  display: "swap",
  variable: "--font-signature",
});

const swashesFont = localFont({
  src: "../../fonts/Swashes.ttf",
  display: "swap",
  variable: "--font-swashes",
});

const artheloFont = localFont({
  src: "../../fonts/Arthelo.ttf",
  display: "swap",
  variable: "--font-arthelo",
});

const bassyFont = localFont({
  src: "../../fonts/Bassy.ttf",
  display: "swap",
  variable: "--font-bassy",
});

const regularBrushFont = localFont({
  src: "../../fonts/Regular Brush.ttf",
  display: "swap",
  variable: "--font-regular-brush",
});

const heyAugustFont = localFont({
  src: "../../fonts/Hey August.ttf",
  display: "swap",
  variable: "--font-hey-august",
});

const wildYouthFont = localFont({
  src: "../../fonts/Wild Youth.otf",
  display: "swap",
  variable: "--font-wild-youth",
});

const christmasMerrylandFont = localFont({
  src: "../../fonts/ChristmasMerryland.ttf",
  display: "swap",
  variable: "--font-christmas-merryland",
});

const blueRiverFont = localFont({
  src: "../../fonts/BlueRiver.otf",
  display: "swap",
  variable: "--font-blue-river",
});

const fuzzyBubblesBoldFont = localFont({
  src: "../../fonts/FuzzyBubbles-Bold.ttf",
  display: "swap",
  variable: "--font-fuzzy-bubbles-bold",
});

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      name: "Mathematics",
      icon: MathDuotoneIcon,
      templates: "250+ courses",
      link: "/mathematics",
    },
    {
      name: "Science",
      icon: ScienceDuotoneIcon,
      templates: "180+ courses",
      link: "/science",
    },
    {
      name: "Programming",
      icon: CodeDuotoneIcon,
      templates: "320+ courses",
      link: "/programming",
    },
    {
      name: "Languages",
      icon: LanguageDuotoneIcon,
      templates: "150+ courses",
      link: "/languages",
    },
    {
      name: "Business",
      icon: BriefcaseDuotoneIcon,
      templates: "120+ courses",
      link: "/business",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative bg-white" style={{ overflow: "visible" }}>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .float-animation {
          animation: float 10s ease-in-out infinite;
        }

        .float-animation-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes resizeBox {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        @keyframes cornerPulse {
          0%,
          100% {
            opacity: 1;
            stroke-width: 0.4;
          }
          50% {
            opacity: 0.6;
            stroke-width: 0.6;
          }
        }

        @keyframes textPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .scale-animation {
          animation: resizeBox 6s ease-in-out infinite;
          transform-origin: center;
          will-change: transform;
        }

        .corner-handle {
          animation: cornerPulse 3s ease-in-out infinite;
          transform-origin: center;
        }

        .corner-handle:nth-of-type(5) {
          animation-delay: 0s;
        }

        .corner-handle:nth-of-type(6) {
          animation-delay: 0.75s;
        }

        .corner-handle:nth-of-type(7) {
          animation-delay: 1.5s;
        }

        .corner-handle:nth-of-type(8) {
          animation-delay: 2.25s;
        }

        .highlight-text {
          animation: textPulse 3s ease-in-out infinite;
        }

        /* Professional Category Card Hover Effects */
        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow:
              0 2px 4px 0 rgba(124, 58, 237, 0.06),
              0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
          50% {
            box-shadow:
              0 0 20px rgba(124, 58, 237, 0.4),
              0 0 40px rgba(139, 92, 246, 0.2);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-12px) scale(1.05);
          }
        }

        .category-card {
          position: relative;
          transition: all 0.2s ease;
        }

        .category-card:hover {
          border-color: rgba(100, 100, 140, 0.8) !important;
        }

        /* View All Card Hover Effect */
        .view-all-card {
          position: relative;
          transition: all 0.2s ease;
        }

        .view-all-card:hover {
          border-color: rgba(100, 100, 140, 0.8) !important;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 640px) {
          .heading-hello {
            font-size: 32px !important;
            -webkit-text-stroke: 1px #111827 !important;
            margin-bottom: 0px !important;
          }

          .heading-new-way {
            font-size: 32px !important;
            -webkit-text-stroke: 1px #111827 !important;
          }

          .heading-learning {
            font-size: 30px !important;
            line-height: 1.2 !important;
            position: relative !important;
            padding: 0px !important;
          }

          .swash-underline {
            font-size: 70px !important;
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            bottom: -40px !important;
          }

          .heading-container {
            min-height: 160px !important;
            gap: 0px !important;
          }

          .second-line-container {
            min-height: auto !important;
            margin-top: 0px !important;
            margin-bottom: 0px !important;
            padding-bottom: 0px !important;
            gap: 4px !important;
            flex-direction: column !important;
            align-items: center !important;
            position: relative !important;
          }

          .learning-wrapper {
            position: relative !important;
            display: inline-block !important;
            padding-bottom: 35px !important;
            margin-top: -5px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .heading-hello {
            font-size: 40px !important;
            -webkit-text-stroke: 1.2px #111827 !important;
            margin-bottom: -5px !important;
          }

          .heading-new-way {
            font-size: 40px !important;
            -webkit-text-stroke: 1.2px #111827 !important;
          }

          .heading-learning {
            font-size: 38px !important;
            line-height: 1.4 !important;
            position: relative !important;
            padding: 5px 0 !important;
          }

          .swash-underline {
            font-size: 90px !important;
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            bottom: -40px !important;
          }

          .heading-container {
            min-height: 200px !important;
          }

          .second-line-container {
            min-height: auto !important;
            margin-top: 0px !important;
            margin-bottom: 0px !important;
            gap: 6px !important;
            flex-direction: column !important;
            align-items: center !important;
            position: relative !important;
          }

          .learning-wrapper {
            position: relative !important;
            display: inline-block !important;
            padding-bottom: 45px !important;
          }
        }

        /* Simpler Duotone GIF Effects using filters only */
        .duotone-gif-purple {
          filter: grayscale(100%) sepia(100%) hue-rotate(250deg) saturate(300%)
            brightness(0.9) contrast(1.1);
        }

        .duotone-gif-blue {
          filter: grayscale(100%) sepia(100%) hue-rotate(200deg) saturate(250%)
            brightness(0.95) contrast(1.1);
        }
      `}</style>

      {/* Floating GIF - Top Left */}
      <div
        className="absolute top-12 left-8 hidden lg:block"
        style={{ zIndex: 1 }}
      >
        <div className="float-animation">
          <div
            style={{
              width: "240px",
              height: "240px",
              filter: "drop-shadow(0 20px 25px rgb(0 0 0 / 0.15))",
            }}
          >
            <img
              src={PenGif.src}
              alt="Pen Animation"
              width={240}
              height={240}
              className="duotone-gif-blue"
              style={{
                width: "240px",
                height: "240px",
                objectFit: "contain",
                imageRendering: "auto",
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating GIF - Bottom Right */}
      <div
        className="absolute bottom-32 right-8 hidden lg:block"
        style={{ zIndex: 1 }}
      >
        <div className="float-animation-delayed">
          <div
            style={{
              width: "240px",
              height: "240px",
              filter: "drop-shadow(0 20px 25px rgb(0 0 0 / 0.15))",
            }}
          >
            <img
              src={BookGif.src}
              alt="Book Animation"
              width={240}
              height={240}
              className="duotone-gif-purple"
              style={{
                width: "240px",
                height: "240px",
                objectFit: "contain",
                imageRendering: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ overflow: "visible" }}
      >
        {/* Main Content */}
        <div className="pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12">
          {/* Heading Section */}
          <div
            className="text-center max-w-4xl mx-auto animate-fadeInUp heading-container"
            style={{ overflow: "visible", minHeight: "280px" }}
          >
            <h1
              className="font-black text-gray-900"
              style={{
                overflow: "visible",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0px",
              }}
            >
              <span
                className="block font-black heading-hello"
                style={{
                  fontSize: "50px",
                  lineHeight: "1",
                  fontWeight: "900",
                  WebkitTextStroke: "1.5px #111827",
                  marginBottom: "-10px",
                }}
              >
                Say Hello
              </span>
              <span
                className="second-line-container"
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "12px",
                  minHeight: "140px",
                  marginTop: "0px",
                  paddingBottom: "5px",
                  marginBottom: "-30px",
                }}
              >
                <span
                  className="font-black heading-new-way"
                  style={{
                    fontSize: "50px",
                    lineHeight: "1.2",
                    fontWeight: "900",
                    WebkitTextStroke: "1.5px #111827",
                  }}
                >
                  to your new way of
                </span>
                <span className="learning-wrapper">
                  <span
                    className={`${fuzzyBubblesBoldFont.className} heading-learning`}
                    style={{
                      fontSize: "48px",
                      lineHeight: "1.8",
                      background: "linear-gradient(90deg, #7a12fa, #b614ef)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block",
                      padding: "10px 0",
                    }}
                  >
                    Learning
                  </span>
                  {/* Hand-drawn swash underline using swashes font letters */}
                  <span
                    className={`${swashesFont.className} swash-underline`}
                    style={{
                      fontSize: "120px",
                      position: "absolute",
                      left: "88%",
                      transform: "translateX(-50%)",
                      bottom: "-70px",
                      lineHeight: "1.8",
                      background: "linear-gradient(90deg, #7a12fa, #b614ef)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block",
                      padding: "10px 0",
                    }}
                  >
                    z
                  </span>
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal mt-0 mb-10 px-2">
              Learning made simple with interactive visuals that bring ideas to
              life. Highlight and save what matters, revisit it anytime.
              Learning that adapts to how you learn best.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-0 mb-12 sm:mb-16 md:mb-20 px-2">
              <form onSubmit={handleSearch} className="relative group">
                <div className="relative flex items-center">
                  <div className="absolute left-4 sm:left-5 flex items-center pointer-events-none">
                    <SearchDuotoneIcon
                      size={20}
                      className="group-focus-within:opacity-80 transition-opacity"
                    />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses, subjects, or topics..."
                    className="w-full pl-12 sm:pl-14 pr-20 sm:pr-32 py-3 sm:py-4 text-sm sm:text-base text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    <ArrowRightIcon size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Categories Section */}
          <div
            className="max-w-5xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 justify-items-center">
              {categories.slice(0, 5).map((category, index) => (
                <Link
                  key={index}
                  href={category.link}
                  className="category-card group flex flex-col items-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border relative backdrop-blur-md cursor-pointer w-full transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderColor: "rgba(140, 140, 170, 0.4)",
                    boxShadow:
                      "0 2px 4px 0 rgba(124, 58, 237, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(118, 18, 250, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(140, 140, 170, 0.4)";
                  }}
                >
                  <div className="category-icon mb-2">
                    <category.icon size={28} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="category-title font-bold text-gray-900 text-xs sm:text-sm mb-1 text-center">
                    {category.name}
                  </h3>
                  <p className="category-count text-gray-500 text-xs font-medium text-center">
                    {category.templates}
                  </p>
                </Link>
              ))}

              {/* View All Card */}
              <Link
                href="/all-categories"
                className="view-all-card group flex flex-col items-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border relative backdrop-blur-md cursor-pointer w-full transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "rgba(140, 140, 170, 0.4)",
                  boxShadow:
                    "0 2px 4px 0 rgba(124, 58, 237, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(118, 18, 250, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(140, 140, 170, 0.4)";
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="view-all-icon-container w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-gray-900 transition-colors duration-500 mb-2">
                    <ArrowRightIcon
                      size={16}
                      className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-500"
                    />
                  </div>
                  <h3 className="category-title font-bold text-gray-900 text-xs sm:text-sm mb-1 text-center">
                    View all
                  </h3>
                  <p className="category-count text-gray-500 text-xs font-medium text-center">
                    14 categories
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}
