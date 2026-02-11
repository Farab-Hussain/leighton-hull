"use client";
import React from "react";
import AboutHull from "@/features/home/components/about-hull";
import Book from "@/features/home/components/book";
import HullAdvisory from "@/features/home/components/hull-advisory";
import Info from "@/features/home/components/info";
import Lessons from "@/features/home/components/lessons";
import HomeHero from "@/features/home/components/hero/hero";
import HeroQuote from "@/features/home/components/hero/quote";

const HomePageScreenView = () => {
  return (
    <>
      <HomeHero />
      <HeroQuote />
      <Book />
      <AboutHull />
      <Lessons />
      <Info />
      <HullAdvisory />
    </>
  );
};

export default HomePageScreenView;
