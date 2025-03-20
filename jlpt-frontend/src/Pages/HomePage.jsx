import React, { useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [levels] = useState([
    {
      level: "N5",
      subText: "Beginner level: Learn foundational vocabulary and grammar.",
    },
    {
      level: "N4",
      subText: "Elementary level: Enhance your basic sentence structure.",
    },
    {
      level: "N3",
      subText: "Intermediate level: Learn complex grammar and vocabulary.",
    },
    {
      level: "N2",
      subText: "Advanced level: Refine your Japanese for professional use.",
    },
    {
      level: "N1",
      subText: "Expert level: Achieve near-native fluency in Japanese.",
    },
  ]);

  const [exam, setExam] = useState("jlpt");

  const renderExamDetails = () => {
    switch (exam) {
      case "jlpt":
        return {
          imgLink:
            "https://www.japanvitta.com/homepage/assets/images/JLPT.jpeg",
          title: "JLPT Registration",
          description:
            "The JLPT is an internationally recognized test for non-native speakers of Japanese, with five levels that measure reading, writing, listening, and speaking abilities. The test is used for employment and education purposes, and has grown in popularity since its inception in 1984, with over 1.3 million people taking the test worldwide as of 2021.",
        };
      case "jlct":
        return {
          imgLink:
            "https://th.bing.com/th/id/R.ec4b963f587e576190c1480e4030571a?rik=4ckLx8quJ52muw&riu=http%3a%2f%2fjlct.jp%2fimages%2fsample1.jpg&ehk=gGvApfhQZ1aXoP1eMgFTjBEK2QxnljBi%2boZiaweotfk%3d&risl=&pid=ImgRaw&r=0",
          title: "JLCT Registration",
          description:
            "Principally this test is conducted to measure the Japanese language communication skill of non-native Japanese speakers. It has 5 levels: JCT1, JCT2, JCT3, JCT4, JCT5. JLCT evaluates Japanese-language communication skills through character, vocabulary, grammar, reading comprehension, and listening.",
        };
      case "nat-test":
        return {
          imgLink:
            "https://sakurasakunihongo.files.wordpress.com/2022/07/image-4.png",
          title: "NAT-Test Registration",
          description:
            "The Japanese Language NAT-TEST measures the Japanese language ability of non-native speakers. The test is divided into five levels, evaluating grammar/vocabulary, listening, and reading comprehension. The format is equivalent to the JLPT.",
        };
      default:
        return { title: "", description: "" };
    }
  };

  const { title, description, imgLink } = renderExamDetails();

  return (
    <div className="text-white bg-black/60 min-h-screen">
      {/* Banner Section */}
      <Banner />

      {/* Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Choose Your Japanese Proficiency Level
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((item, index) => (
            <Link to={`/jlpt-level/${item.level}`} key={index}>
              <Card
                {...item}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* About Japan Section */}
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              Learn Everything About{" "}
              <span className="text-yellow-500">Japan</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Japan is an island nation located in East Asia, with Tokyo as its
              capital city. It is known for its rich cultural heritage, advanced
              technology, delicious cuisine, and beautiful landmarks. With a
              population of over 125 million people, Japan is one of the most
              populous countries in the world.
            </p>
            <p className="text-gray-400">
              Despite being a modern and developed country, Japan has managed to
              preserve its traditional culture and practices, making it a unique
              and fascinating destination for visitors from around the world.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://th.bing.com/th/id/OIP.oJwIIsJXLC0tGHXsBZUObgHaEK?rs=1&pid=ImgDetMain"
              alt="Japan"
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full ">
          <img
            src="https://th.bing.com/th/id/OIP.SoB-33soClxQOoyD4b5tFwHaEh?rs=1&pid=ImgDetMain"
            alt=""
            className="h-full w-full object-cover opacity-10"
          />
        </div>
      </div>

      {/* Exam Registration Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Register For Exam
        </h2>
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => setExam("jlpt")}
            className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              exam === "jlpt"
                ? "bg-yellow-500 text-black scale-110"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            JLPT
          </button>
          <button
            onClick={() => setExam("jlct")}
            className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              exam === "jlct"
                ? "bg-yellow-500 text-black scale-110"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            JLCT
          </button>
          <button
            onClick={() => setExam("nat-test")}
            className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              exam === "nat-test"
                ? "bg-yellow-500 text-black scale-110"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            NAT-TEST
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={imgLink}
            alt="Exam"
            className="rounded-lg shadow-lg w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400 mb-6">{description}</p>
            <button className="bg-yellow-500 cursor-pointer text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
