import React, { useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState([
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

  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Cards Section */}
      <div className="mt-12 px-4 w-full flex flex-col items-center">
        {/* Cards for N5 and N4 Centered */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {text
            .filter((item) => item.level !== "N5" || item.level !== "N4")
            .map((item, index) => (
              <Link to={`/jlpt-level/${item.level}`} key={index}>
                <Card {...item} />
              </Link>
            ))}
        </div>

        {/* Remaining Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {text
            .filter((item) => item.level == "N5" && item.level == "N4")
            .map((item, index) => (
              <Link to={`/jlpt-level/${item.level}`} key={index}>
                <Card {...item} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
