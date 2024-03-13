"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-24 padding-x">
        <a href="/" className="hero__title hover:text-pink-200">
          MotorFinder
        </a>

        <p className="hero__subtitle">
          Browse the latest and newest vehicles and find details about them!
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="justify-center text-white rounded-full mt-10 hover:bg-pink-200 hover:text-black"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
