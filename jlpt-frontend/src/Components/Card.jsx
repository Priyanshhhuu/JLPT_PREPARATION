import React from "react";
import { BookOpenText } from "lucide-react";

const Card = ({ level, subText }) => {
  return (
    <div className="bg-black-gradient box-shadow p-6 rounded-md flex flex-col justify-between gap-4 shadow-md card-hover  transition">
      {/* Level */}
      <h1
        className={`${
          level === "N1" ? "text-pink-700" : "text-red-600"
        } font-bold text-2xl`}
      >
        {level}
      </h1>

      {/* Subtext */}
      <p className="text-white text-sm">{subText}</p>

      {/* Action Button */}
      <div className="flex items-center justify-between mt-4">
        <BookOpenText
          className={`${
            level === "N1"
              ? "text-pink-500/40 hover:text-pink-600 "
              : "text-red-500/40 hover:text-red-600 "
          }`}
        />
        <button
          className={`px-6 py-2 text-sm font-medium rounded-md transition ${
            level === "N1"
              ? "bg-pink-500/40 hover:bg-pink-600 text-white"
              : "bg-red-500/40 hover:bg-red-600 text-white"
          }`}
        >
          Learn Now
        </button>
      </div>
    </div>
  );
};

export default Card;
