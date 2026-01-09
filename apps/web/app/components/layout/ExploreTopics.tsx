"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Import the fonts
import localFont from "next/font/local";

import { ArrowRightIcon, ArrowLeftIcon, VisibleIcon } from "../icons";

import cloudImage2 from "../common/images/cloud6.jpg";

const fuzzyBubblesBoldFont = localFont({
  src: "../../fonts/FuzzyBubbles-Bold.ttf",
  display: "swap",
  variable: "--font-fuzzy-bubbles-bold",
});

const ExploreTopics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const router = useRouter();
  const carouselRef = useRef(null);

  const topics = [
    {
      title: "Generative AI",
      description:
        "Discover how AI creates artificial intelligence, enabling systems to generate content, art, and solutions autonomously. This includes usage like ChatGPT, MidJourney, and more.",
      views: "1K Views",
      tag: "#AI",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      link: "/topics/generative-ai",
    },
    {
      title: "Digital Marketing",
      description:
        "Dive into social and digital marketing, learning to promote brands and products online. Use familiar creator social tools to expand reach and revenue insights.",
      views: "1K Views",
      tag: "#Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: "/topics/digital-marketing",
    },
    {
      title: "AWS (Server)",
      description:
        "Learn how to set up and manage cloud infrastructure with Amazon Web Services. Dive into cloud computing, storage, and architecture for modern applications.",
      views: "1K Views",
      tag: "#AWS",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      link: "/topics/aws-server",
    },
    {
      title: "Meta Platform",
      description:
        "Learning AI Technology not new a great and advance technology in our system with deep learning. This robust tools makes AI Facebook, WhatsApp, and Instagram's digital ecosystems.",
      views: "1K Views",
      tag: "#Meta Platform",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      link: "/topics/meta-platform",
    },
  ];

  const floatingTags = [
    {
      text: "#AI",
      id: "tag-1",
      className: "floating-tag-1",
    },
    {
      text: "#AWS",
      id: "tag-2",
      className: "floating-tag-2",
    },
    {
      text: "#Digital Marketing",
      id: "tag-3",
      className: "floating-tag-3",
    },
    {
      text: "#Vibe Coding",
      id: "tag-4",
      className: "floating-tag-4",
    },
    {
      text: "#R&D",
      id: "tag-5",
      className: "floating-tag-5",
    },
    {
      text: "#Meta Platform",
      id: "tag-6",
      className: "floating-tag-6",
    },
  ];

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 cards
      } else {
        setItemsPerPage(3); // Desktop: 3 cards
      }
      setCurrentIndex(0); // Reset to first item on resize
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, topics.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleExploreMore = () => {
    router.push("/explore");
  };

  const handleCardClick = (link) => {
    router.push(link);
  };

  return (
    <div className="jakarta-font w-full bg-white relative overflow-hidden">
      {/* Floating Tags - Responsive for all screen sizes */}
      <div className="floating-tags-container">
        {floatingTags.map((tag, index) => (
          <div
            key={tag.id}
            className={`${tag.className} absolute bg-white rounded-full shadow-lg font-bold text-gray-900 hover:shadow-xl transition-shadow duration-300 border border-gray-100 z-20
                       px-3 py-1.5 text-xs
                       sm:px-4 sm:py-2 sm:text-sm
                       md:px-4 md:py-2 md:text-sm
                       lg:px-5 lg:py-2.5 lg:text-base
                       xl:px-6 xl:py-3`}
          >
            {tag.text}
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-12 lg:py-16 xl:py-20">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <span
            className={`${fuzzyBubblesBoldFont.className} heading-learning`}
            style={{
              // clamp(min, preferred, max) - automatically adjusts size
              fontSize: "clamp(18px, 5vw, 30px)",
              lineHeight: "1.4", // Reduced slightly for better mobile look
              background: "linear-gradient(90deg, #7a12fa, #b614ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              padding: "10px 0",
              textAlign: "center", // Optional: centers text on small screens
              width: "100%", // Optional: ensures the gradient spans correctly
            }}
          >
            Discover & Learn
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-2 md:mb-3 lg:mb-4 px-4">
            Explore <span className="text-purple-600">Topics</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal mt-0 mb-10 px-2">
            Learn key technology skills for students, professionals, and
            businesses in today's connected world.
          </p>
        </div>

        {/* Carousel Container with Navigation */}
        <div className="relative px-1">
          {/* Navigation Arrows - Desktop Only (lg and above) */}
          <div className="hidden lg:flex absolute -top-12 md:-top-16 lg:-top-20 right-0 gap-2 md:gap-3 z-30">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                currentIndex === 0
                  ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                  : "bg-gray-50 border-gray-200 hover:bg-white"
              }`}
            >
              {/* Use the new Streamline PNG Left Arrow from Registry */}
              <ArrowLeftIcon
                size={20}
                className={`transition-opacity duration-200 ${
                  currentIndex === 0 ? "opacity-30" : "opacity-100"
                }`}
              />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                currentIndex === maxIndex
                  ? "bg-gray-50 border-gray-200 cursor-not-allowed"
                  : "bg-gray-50 border-gray-200 hover:bg-white"
              }`}
            >
              {/* Use the new Streamline PNG Right Arrow from Registry */}
              <ArrowRightIcon
                size={20}
                className={`transition-opacity duration-200 ${
                  currentIndex === maxIndex ? "opacity-30" : "opacity-100"
                }`}
              />
            </button>
          </div>

          {/* Desktop View - Sliding carousel with arrows */}
          <div className="hidden lg:block overflow-hidden mt-4 md:mt-6 lg:mt-8">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage + 2)}%)`,
              }}
            >
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerPage}% - ${((itemsPerPage - 1) * 24) / itemsPerPage}px)`,
                  }}
                >
                  <div
                    onClick={() => handleCardClick(topic.link)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white overflow-hidden cursor-pointer h-full flex flex-col"
                    style={{
                      borderRadius: "12px",
                      border:
                        hoveredCard === index
                          ? "1px solid rgba(90, 90, 190, 0.5)"
                          : "1px solid rgba(75, 75, 174, 0.3)",
                      boxShadow: "0 3px 3px -1.5px rgba(18, 43, 165, 0.05)",
                      transition: "border 0.3s ease",
                    }}
                  >
                    {/* Image */}
                    <div className="w-full p-4 sm:p-5 md:p-6">
                      <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 bg-gray-100 overflow-hidden rounded-lg">
                        <img
                          src={topic.image}
                          alt={topic.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {topic.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3 leading-relaxed flex-grow">
                        {topic.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
                          <VisibleIcon />
                          <span className="font-medium">{topic.views}</span>
                        </div>
                        <button className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300">
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View - Horizontal Scroll */}
          <div
            ref={carouselRef}
            className="lg:hidden overflow-x-auto scrollbar-hide mt-4 md:mt-6"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-4 md:gap-6 px-1">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] sm:w-[80vw] md:w-[45vw]"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <div
                    onClick={() => handleCardClick(topic.link)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white overflow-hidden cursor-pointer h-full flex flex-col"
                    style={{
                      borderRadius: "12px",
                      border:
                        hoveredCard === index
                          ? "1px solid rgba(90, 90, 190, 0.5)"
                          : "1px solid rgba(75, 75, 174, 0.3)",
                      boxShadow: "0 3px 3px -1.5px rgba(18, 43, 165, 0.05)",
                      transition: "border 0.3s ease",
                    }}
                  >
                    {/* Image */}
                    <div className="w-full p-4 sm:p-5 md:p-6">
                      <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-100 overflow-hidden rounded-lg">
                        <img
                          src={topic.image}
                          alt={topic.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {topic.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3 leading-relaxed flex-grow">
                        {topic.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
                          <VisibleIcon />
                          <span className="font-medium">{topic.views}</span>
                        </div>
                        <button className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300">
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center relative z-20 pb-8 mt-10 md:mt-14 lg:mt-16">
          <button
            onClick={handleExploreMore}
            className="px-10 py-4 text-base md:text-lg font-black text-white rounded-xl shadow-lg relative overflow-hidden border-2 gradient-wave transition-transform min-w-[200px]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #7a12fa, #b614ef, #7a12fa)",
              borderColor: "#9513f4",
              backgroundSize: "200% 100%", // Ensures the gradient has room to "wave"
            }}
          >
            EXPLORE MORE
          </button>
        </div>
      </div>

      {/* ULTRA ENHANCED CLOUD TRANSITION SECTION - MAXIMUM DENSITY ON EDGES */}
      <div className="w-full relative h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 overflow-hidden">
        {/* Cloud Images - Multi-layered with ULTRA HEAVY left and right emphasis */}
        <div className="absolute inset-0 w-full h-full">
          {/* ========== BACKGROUND LAYER (Very Faint) ========== */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/4 left-1/3 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto opacity-20 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/3 right-1/3 w-28 sm:w-40 md:w-56 lg:w-72 xl:w-80 h-auto opacity-20 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-36 sm:w-52 md:w-72 lg:w-88 xl:w-96 h-auto opacity-15 mix-blend-multiply"
          />

          {/* ========== MIDDLE LAYER (Medium Opacity) ========== */}
          {/* Main Central Clouds */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 sm:w-64 md:w-88 lg:w-[28rem] xl:w-[32rem] h-auto opacity-50 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 left-4 sm:left-8 md:left-16 lg:left-20 w-40 sm:w-56 md:w-72 lg:w-88 xl:w-96 h-auto opacity-55 mix-blend-multiply"
            style={{ transform: "translateY(-20%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 right-4 sm:right-8 md:right-16 lg:right-20 w-40 sm:w-56 md:w-72 lg:w-88 xl:w-96 h-auto opacity-55 mix-blend-multiply"
            style={{ transform: "translateY(-15%)" }}
          />

          {/* Mid-Level Fill Clouds */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/3 left-1/4 w-32 sm:w-44 md:w-60 lg:w-72 xl:w-80 h-auto opacity-40 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/3 right-1/4 w-32 sm:w-44 md:w-60 lg:w-72 xl:w-80 h-auto opacity-40 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-1/3 left-1/5 w-28 sm:w-40 md:w-56 lg:w-68 xl:w-76 h-auto opacity-45 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-1/3 right-1/5 w-28 sm:w-40 md:w-56 lg:w-68 xl:w-76 h-auto opacity-45 mix-blend-multiply"
          />

          {/* ========== FOREGROUND LAYER (Higher Opacity) ========== */}
          {/* Bottom Clouds */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 left-1/4 w-36 sm:w-52 md:w-68 lg:w-80 xl:w-88 h-auto opacity-60 mix-blend-multiply"
            style={{ transform: "translateY(10%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 right-1/4 w-36 sm:w-52 md:w-68 lg:w-80 xl:w-88 h-auto opacity-60 mix-blend-multiply"
            style={{ transform: "translateY(15%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 md:w-64 lg:w-76 xl:w-84 h-auto opacity-50 mix-blend-multiply"
            style={{ transform: "translateY(20%)" }}
          />

          {/* ========== ULTRA DENSE LEFT SIDE CLOUDS ========== */}
          {/* Far Left Edge - Primary Layer - Every 7% */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 left-0 w-24 sm:w-36 md:w-48 lg:w-60 xl:w-72 h-auto opacity-45 mix-blend-multiply"
            style={{ transform: "translateX(-30%) translateY(-10%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[7%] left-0 w-28 sm:w-40 md:w-52 lg:w-64 xl:w-76 h-auto opacity-50 mix-blend-multiply"
            style={{ transform: "translateX(-25%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[14%] left-0 w-22 sm:w-32 md:w-44 lg:w-56 xl:w-68 h-auto opacity-40 mix-blend-multiply"
            style={{ transform: "translateX(-35%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[21%] left-0 w-26 sm:w-38 md:w-50 lg:w-62 xl:w-74 h-auto opacity-48 mix-blend-multiply"
            style={{ transform: "translateX(-28%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[28%] left-0 w-20 sm:w-30 md:w-42 lg:w-54 xl:w-66 h-auto opacity-42 mix-blend-multiply"
            style={{ transform: "translateX(-32%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[35%] left-0 w-24 sm:w-34 md:w-46 lg:w-58 xl:w-70 h-auto opacity-46 mix-blend-multiply"
            style={{ transform: "translateX(-26%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[42%] left-0 w-28 sm:w-38 md:w-50 lg:w-62 xl:w-74 h-auto opacity-44 mix-blend-multiply"
            style={{ transform: "translateX(-30%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[49%] left-0 w-22 sm:w-32 md:w-44 lg:w-56 xl:w-68 h-auto opacity-38 mix-blend-multiply"
            style={{ transform: "translateX(-33%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[56%] left-0 w-26 sm:w-36 md:w-48 lg:w-60 xl:w-72 h-auto opacity-42 mix-blend-multiply"
            style={{ transform: "translateX(-27%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[63%] left-0 w-24 sm:w-34 md:w-46 lg:w-58 xl:w-70 h-auto opacity-40 mix-blend-multiply"
            style={{ transform: "translateX(-29%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[70%] left-0 w-28 sm:w-40 md:w-52 lg:w-64 xl:w-76 h-auto opacity-48 mix-blend-multiply"
            style={{ transform: "translateX(-25%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[77%] left-0 w-26 sm:w-38 md:w-50 lg:w-62 xl:w-74 h-auto opacity-45 mix-blend-multiply"
            style={{ transform: "translateX(-32%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[84%] left-0 w-24 sm:w-36 md:w-48 lg:w-60 xl:w-72 h-auto opacity-43 mix-blend-multiply"
            style={{ transform: "translateX(-28%) translateY(5%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[91%] left-0 w-22 sm:w-34 md:w-46 lg:w-58 xl:w-70 h-auto opacity-47 mix-blend-multiply"
            style={{ transform: "translateX(-31%) translateY(8%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 left-0 w-26 sm:w-38 md:w-50 lg:w-62 xl:w-74 h-auto opacity-45 mix-blend-multiply"
            style={{ transform: "translateX(-32%) translateY(15%)" }}
          />

          {/* Far Left Edge - TINY FILLER CLOUDS - Every 3-4% */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[3%] left-0 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto opacity-25 mix-blend-multiply"
            style={{ transform: "translateX(-38%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[10%] left-0 w-16 sm:w-22 md:w-30 lg:w-38 xl:w-46 h-auto opacity-28 mix-blend-multiply"
            style={{ transform: "translateX(-36%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[17%] left-0 w-15 sm:w-21 md:w-29 lg:w-37 xl:w-45 h-auto opacity-26 mix-blend-multiply"
            style={{ transform: "translateX(-40%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[24%] left-0 w-17 sm:w-23 md:w-31 lg:w-39 xl:w-47 h-auto opacity-29 mix-blend-multiply"
            style={{ transform: "translateX(-37%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[31%] left-0 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto opacity-27 mix-blend-multiply"
            style={{ transform: "translateX(-39%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[38%] left-0 w-16 sm:w-22 md:w-30 lg:w-38 xl:w-46 h-auto opacity-24 mix-blend-multiply"
            style={{ transform: "translateX(-41%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[45%] left-0 w-15 sm:w-21 md:w-29 lg:w-37 xl:w-45 h-auto opacity-26 mix-blend-multiply"
            style={{ transform: "translateX(-38%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[52%] left-0 w-17 sm:w-23 md:w-31 lg:w-39 xl:w-47 h-auto opacity-28 mix-blend-multiply"
            style={{ transform: "translateX(-36%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[59%] left-0 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto opacity-25 mix-blend-multiply"
            style={{ transform: "translateX(-40%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[66%] left-0 w-16 sm:w-22 md:w-30 lg:w-38 xl:w-46 h-auto opacity-27 mix-blend-multiply"
            style={{ transform: "translateX(-37%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[73%] left-0 w-15 sm:w-21 md:w-29 lg:w-37 xl:w-45 h-auto opacity-29 mix-blend-multiply"
            style={{ transform: "translateX(-39%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[80%] left-0 w-17 sm:w-23 md:w-31 lg:w-39 xl:w-47 h-auto opacity-26 mix-blend-multiply"
            style={{ transform: "translateX(-36%) translateY(3%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[87%] left-0 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto opacity-28 mix-blend-multiply"
            style={{ transform: "translateX(-38%) translateY(6%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[94%] left-0 w-16 sm:w-22 md:w-30 lg:w-38 xl:w-46 h-auto opacity-24 mix-blend-multiply"
            style={{ transform: "translateX(-40%) translateY(10%)" }}
          />

          {/* Near Left Side - Inner Layer */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[5%] left-[2%] w-18 sm:w-26 md:w-36 lg:w-46 xl:w-56 h-auto opacity-35 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[18%] left-[3%] w-20 sm:w-30 md:w-40 lg:w-50 xl:w-60 h-auto opacity-38 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[32%] left-[2.5%] w-22 sm:w-32 md:w-42 lg:w-52 xl:w-62 h-auto opacity-36 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[45%] left-[3.5%] w-19 sm:w-28 md:w-38 lg:w-48 xl:w-58 h-auto opacity-40 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[58%] left-[2%] w-21 sm:w-31 md:w-41 lg:w-51 xl:w-61 h-auto opacity-37 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[72%] left-[3%] w-23 sm:w-33 md:w-43 lg:w-53 xl:w-63 h-auto opacity-39 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-[5%] left-[2.5%] w-20 sm:w-30 md:w-40 lg:w-50 xl:w-60 h-auto opacity-41 mix-blend-multiply"
          />

          {/* Additional Left Side Fill Clouds */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[10%] left-[6%] w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto opacity-28 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[25%] left-[7%] w-18 sm:w-26 md:w-34 lg:w-42 xl:w-50 h-auto opacity-30 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[40%] left-[5.5%] w-17 sm:w-25 md:w-33 lg:w-41 xl:w-49 h-auto opacity-32 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[55%] left-[6.5%] w-19 sm:w-27 md:w-35 lg:w-43 xl:w-51 h-auto opacity-29 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[68%] left-[7.5%] w-18 sm:w-26 md:w-34 lg:w-42 xl:w-50 h-auto opacity-31 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-[8%] left-[6%] w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 h-auto opacity-33 mix-blend-multiply"
          />

          {/* ========== ULTRA DENSE RIGHT SIDE CLOUDS ========== */}
          {/* Far Right Edge - Primary Layer - Every 7% */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 right-0 w-24 sm:w-36 md:w-48 lg:w-60 xl:w-72 h-auto opacity-45 mix-blend-multiply"
            style={{ transform: "translateX(30%) translateY(-10%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[7%] right-0 w-28 sm:w-40 md:w-52 lg:w-64 xl:w-76 h-auto opacity-50 mix-blend-multiply"
            style={{ transform: "translateX(25%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[14%] right-0 w-22 sm:w-32 md:w-44 lg:w-56 xl:w-68 h-auto opacity-40 mix-blend-multiply"
            style={{ transform: "translateX(35%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[21%] right-0 w-26 sm:w-38 md:w-50 lg:w-62 xl:w-74 h-auto opacity-48 mix-blend-multiply"
            style={{ transform: "translateX(28%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[28%] right-0 w-20 sm:w-30 md:w-42 lg:w-54 xl:w-66 h-auto opacity-42 mix-blend-multiply"
            style={{ transform: "translateX(32%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[35%] right-0 w-24 sm:w-34 md:w-46 lg:w-58 xl:w-70 h-auto opacity-46 mix-blend-multiply"
            style={{ transform: "translateX(26%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[42%] right-0 w-28 sm:w-38 md:w-50 lg:w-62 xl:w-74 h-auto opacity-44 mix-blend-multiply"
            style={{ transform: "translateX(30%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[49%] right-0 w-22 sm:w-32 md:w-44 lg:w-56 xl:w-68 h-auto opacity-38 mix-blend-multiply"
            style={{ transform: "translateX(33%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[56%] right-0 w-26 sm:w-36 md:w-48 lg:w-60 xl:w-72 h-auto opacity-42 mix-blend-multiply"
            style={{ transform: "translateX(27%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[63%] right-0 w-24 sm:w-34 md:w-46 lg:w-58 xl:w-70 h-auto opacity-40 mix-blend-multiply"
            style={{ transform: "translateX(29%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[70%] right-0 w-28 sm:w-40 md:w-52 lg:w-64 xl:w-76 h-auto opacity-48 mix-blend-multiply"
            style={{ transform: "translateX(25%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[77%] right-0 w-26 sm:w-38 md:w-50 lg:w-62 xl:w-74 h-auto opacity-45 mix-blend-multiply"
            style={{ transform: "translateX(32%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[84%] right-0 w-24 sm:w-36 md:w-48 lg:w-60 xl:w-72 h-auto opacity-43 mix-blend-multiply"
            style={{ transform: "translateX(28%) translateY(5%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[91%] right-0 w-22 sm:w-34 md:w-46 lg:w-58 xl:w-70 h-auto opacity-47 mix-blend-multiply"
            style={{ transform: "translateX(31%) translateY(8%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-0 right-0 w-26 sm:w-38 md:w-50 lg:w-62 xl:w-74 h-auto opacity-45 mix-blend-multiply"
            style={{ transform: "translateX(32%) translateY(15%)" }}
          />

          {/* Far Right Edge - TINY FILLER CLOUDS - Every 3-4% */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[3%] right-0 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto opacity-25 mix-blend-multiply"
            style={{ transform: "translateX(38%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[10%] right-0 w-16 sm:w-22 md:w-30 lg:w-38 xl:w-46 h-auto opacity-28 mix-blend-multiply"
            style={{ transform: "translateX(36%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[17%] right-0 w-15 sm:w-21 md:w-29 lg:w-37 xl:w-45 h-auto opacity-26 mix-blend-multiply"
            style={{ transform: "translateX(40%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[24%] right-0 w-17 sm:w-23 md:w-31 lg:w-39 xl:w-47 h-auto opacity-29 mix-blend-multiply"
            style={{ transform: "translateX(37%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[31%] right-0 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto opacity-27 mix-blend-multiply"
            style={{ transform: "translateX(39%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[38%] right-0 w-16 sm:w-22 md:w-30 lg:w-38 xl:w-46 h-auto opacity-24 mix-blend-multiply"
            style={{ transform: "translateX(41%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[45%] right-0 w-15 sm:w-21 md:w-29 lg:w-37 xl:w-45 h-auto opacity-26 mix-blend-multiply"
            style={{ transform: "translateX(38%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[52%] right-0 w-17 sm:w-23 md:w-31 lg:w-39 xl:w-47 h-auto opacity-28 mix-blend-multiply"
            style={{ transform: "translateX(36%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[59%] right-0 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto opacity-25 mix-blend-multiply"
            style={{ transform: "translateX(40%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[66%] right-0 w-16 sm:w-22 md:w-30 lg:w-38 xl:w-46 h-auto opacity-27 mix-blend-multiply"
            style={{ transform: "translateX(37%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[73%] right-0 w-15 sm:w-21 md:w-29 lg:w-37 xl:w-45 h-auto opacity-29 mix-blend-multiply"
            style={{ transform: "translateX(39%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[80%] right-0 w-17 sm:w-23 md:w-31 lg:w-39 xl:w-47 h-auto opacity-26 mix-blend-multiply"
            style={{ transform: "translateX(36%) translateY(3%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[87%] right-0 w-14 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto opacity-28 mix-blend-multiply"
            style={{ transform: "translateX(38%) translateY(6%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[94%] right-0 w-16 sm:w-22 md:w-30 lg:w-38 xl:w-46 h-auto opacity-24 mix-blend-multiply"
            style={{ transform: "translateX(40%) translateY(10%)" }}
          />

          {/* Near Right Side - Inner Layer */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[5%] right-[2%] w-18 sm:w-26 md:w-36 lg:w-46 xl:w-56 h-auto opacity-35 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[18%] right-[3%] w-20 sm:w-30 md:w-40 lg:w-50 xl:w-60 h-auto opacity-38 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[32%] right-[2.5%] w-22 sm:w-32 md:w-42 lg:w-52 xl:w-62 h-auto opacity-36 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[45%] right-[3.5%] w-19 sm:w-28 md:w-38 lg:w-48 xl:w-58 h-auto opacity-40 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[58%] right-[2%] w-21 sm:w-31 md:w-41 lg:w-51 xl:w-61 h-auto opacity-37 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[72%] right-[3%] w-23 sm:w-33 md:w-43 lg:w-53 xl:w-63 h-auto opacity-39 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-[5%] right-[2.5%] w-20 sm:w-30 md:w-40 lg:w-50 xl:w-60 h-auto opacity-41 mix-blend-multiply"
          />

          {/* Additional Right Side Fill Clouds */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[10%] right-[6%] w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto opacity-28 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[25%] right-[7%] w-18 sm:w-26 md:w-34 lg:w-42 xl:w-50 h-auto opacity-30 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[40%] right-[5.5%] w-17 sm:w-25 md:w-33 lg:w-41 xl:w-49 h-auto opacity-32 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[55%] right-[6.5%] w-19 sm:w-27 md:w-35 lg:w-43 xl:w-51 h-auto opacity-29 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-[68%] right-[7.5%] w-18 sm:w-26 md:w-34 lg:w-42 xl:w-50 h-auto opacity-31 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-[8%] right-[6%] w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 h-auto opacity-33 mix-blend-multiply"
          />

          {/* ========== TOP FILL CLOUDS ========== */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 left-1/4 -translate-x-1/2 w-24 sm:w-32 md:w-44 lg:w-52 xl:w-60 h-auto opacity-25 mix-blend-multiply"
            style={{ transform: "translateY(-35%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 right-1/4 translate-x-1/2 w-24 sm:w-32 md:w-44 lg:w-52 xl:w-60 h-auto opacity-25 mix-blend-multiply"
            style={{ transform: "translateY(-35%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 left-1/3 w-20 sm:w-28 md:w-40 lg:w-48 xl:w-56 h-auto opacity-30 mix-blend-multiply"
            style={{ transform: "translateY(-40%)" }}
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-0 right-1/3 w-20 sm:w-28 md:w-40 lg:w-48 xl:w-56 h-auto opacity-30 mix-blend-multiply"
            style={{ transform: "translateY(-40%)" }}
          />

          {/* ========== SCATTERED DETAIL CLOUDS ========== */}
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-1/5 left-2/5 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto opacity-25 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute top-2/5 right-2/5 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto opacity-25 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-1/5 left-3/5 w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 h-auto opacity-30 mix-blend-multiply"
          />
          <img
            src={cloudImage2.src}
            alt=""
            className="absolute bottom-2/5 right-3/5 w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 h-auto opacity-30 mix-blend-multiply"
          />
        </div>

        {/* Enhanced Gradient Overlays for Smooth Blending */}
        {/* Top gradient - stronger */}
        <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>

        {/* Bottom gradient - stronger */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>

        {/* Left gradient - ULTRA STRONG for ultra-dense clouds */}
        <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 bg-gradient-to-r from-white via-white/50 to-transparent z-10"></div>

        {/* Right gradient - ULTRA STRONG for ultra-dense clouds */}
        <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 bg-gradient-to-r from-transparent via-white/50 to-white z-10"></div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16 lg:py-20">
          <span
            className={`${fuzzyBubblesBoldFont.className} heading-learning`}
            style={{
              // clamp(min, preferred, max) - automatically adjusts size
              fontSize: "clamp(18px, 5vw, 30px)",
              lineHeight: "1.4", // Reduced slightly for better mobile look
              background: "linear-gradient(90deg, #7a12fa, #b614ef)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              padding: "10px 0",
              textAlign: "center", // Optional: centers text on small screens
              width: "100%", // Optional: ensures the gradient spans correctly
            }}
          >
            Step into a smarter way to learn
          </span>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight px-4">
            Build Real{" "}
            <span className="relative inline-block mx-1 md:mx-2">
              <span className="relative z-10 text-purple-600">
                Understanding
              </span>
              {/* Oval border using SVG - responsive */}
              <svg
                className="absolute top-1/2 left-1/2 pointer-events-none w-full h-full"
                style={{
                  transform: "translate(-50%, -50%)",
                  width: "105%",
                  height: "140%",
                }}
                viewBox="0 0 320 70"
                preserveAspectRatio="none"
              >
                <ellipse
                  cx="160"
                  cy="35"
                  rx="155"
                  ry="30"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2.5"
                />
              </svg>
            </span>{" "}
            In Every Subject You{" "}
            <span className="text-purple-600">Explore</span>
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal mt-0 mb-10 px-2">
            We bring you the clarity and smart tools that transform how you
            learn, helping you grasp concepts deeper and remember them longer.
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Floating Tags Responsive Positioning */
        /* Mobile View - Only 2 tags (1 left, 1 right) */
        .floating-tag-1 {
          top: 1%;
          left: 3%;
          transform: rotate(-5deg);
        }
        .floating-tag-2 {
          display: none;
        }
        .floating-tag-3 {
          display: none;
        }
        .floating-tag-4 {
          top: 1%;
          right: 3%;
          transform: rotate(8deg);
        }
        .floating-tag-5 {
          display: none;
        }
        .floating-tag-6 {
          display: none;
        }

        /* Tablet View - 4 tags (2 left, 2 right) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .floating-tag-1 {
            top: 1%;
            left: 3%;
            transform: rotate(-5deg);
          }
          .floating-tag-2 {
            display: block;
            top: 6%;
            left: 1%;
            transform: rotate(3deg);
          }
          .floating-tag-3 {
            display: none;
          }
          .floating-tag-4 {
            top: 1%;
            right: 3%;
            transform: rotate(8deg);
          }
          .floating-tag-5 {
            display: block;
            top: 6%;
            right: 1%;
            transform: rotate(12deg);
          }
          .floating-tag-6 {
            display: none;
          }
        }

        /* Desktop View - All 6 tags */
        @media (min-width: 1024px) {
          .floating-tag-1 {
            top: 5%;
            left: 8%;
            transform: rotate(-5deg);
          }
          .floating-tag-2 {
            display: block;
            top: 10%;
            left: 4%;
            transform: rotate(3deg);
          }
          .floating-tag-3 {
            display: block;
            top: 10%;
            left: 12%;
            transform: rotate(-8deg);
          }
          .floating-tag-4 {
            top: 5%;
            right: 8%;
            transform: rotate(8deg);
          }
          .floating-tag-5 {
            display: block;
            top: 12%;
            right: 4%;
            transform: rotate(12deg);
          }
          .floating-tag-6 {
            display: block;
            top: 10%;
            right: 12%;
            left: auto;
            transform: rotate(-10deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ExploreTopics;
