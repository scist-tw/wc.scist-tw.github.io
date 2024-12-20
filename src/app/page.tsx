"use client";
import React, { useState, useEffect } from "react";

import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";
import Timetable from "./components/Timetable";
import Lead from "./components/Lead";
import Lecturer from "./components/Lecturer";
import Clubs from "./components/Clubs";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";
import Test from "./components/Test";
export default function Main() {
  const [, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTotal: number =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress: number = window.scrollY / scrollTotal;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-black text-indigo-400 font-mono overflow-hidden">
      <main className="relative z-10">
        {/* <Hero /> */}
		<Test/>
		<EventInfo />
        <Timetable />
        <Lead />
        <Lecturer />
        <Clubs />
        <Sponsor />
        <Footer />
      </main>
    </div>
  );
}
