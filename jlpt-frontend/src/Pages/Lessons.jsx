// Lessons.jsx
import React, { useState } from "react";
import { jlpt } from "../data";
import { useParams } from "react-router-dom";
import { Notebook, Flame, Trophy, Star } from "lucide-react";
import Book from "../Components/Book";
import { motion } from "framer-motion";

const Lessons = () => {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState("Genki");
  const [xp] = useState(1245);
  const [streak] = useState(7);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white min-h-screen bg-gradient-to-b from-black/30 to-gray-950"
    >
      {/* Header Section */}
      <motion.div
        className="container mx-auto px-4 py-6"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Notebook className="text-yellow-400" size={32} />
            <h1 className="text-2xl font-bold">{id} Lessons</h1>
          </div>

          <div className="flex gap-6">
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <Flame className="text-orange-400" size={20} />
              <span className="font-bold">{streak}</span>
              <span className="text-sm text-gray-400">Day Streak</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <Star className="text-yellow-400" size={20} />
              <span className="font-bold">{xp}</span>
              <span className="text-sm text-gray-400">XP</span>
            </div>
          </div>
        </div>

        {/* Book Selection */}
        <div className="flex justify-center gap-4 mb-12">
          {["Genki", "Minna"].map((book) => (
            <motion.button
              key={book}
              onClick={() => setSelectedBook(book)}
              className={`px-6 py-2 rounded-full text-lg font-medium ${
                selectedBook === book
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {book} Textbook
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Lessons Grid */}
      <div className="container mx-auto px-4 pb-12">
        {jlpt.map(
          (item, index) =>
            item.grade === id && (
              <Book key={index} chapters={item.chapters} id={id} />
            )
        )}
      </div>
    </motion.div>
  );
};

export default Lessons;
