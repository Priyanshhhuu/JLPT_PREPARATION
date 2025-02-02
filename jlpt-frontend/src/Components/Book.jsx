// Book.jsx
import { BookOpenText, CheckCircle, Lock } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Book = ({ chapters, id }) => {
  const completedLessons = [1, 3, 5]; // Mock completed lessons
  const lockedLessons = [4, 6]; // Mock locked lessons

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {chapters?.map((chapter, index) => {
        const isCompleted = completedLessons.includes(chapter.chapter);
        const isLocked = lockedLessons.includes(chapter.chapter);

        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div
              className={`p-1 rounded-2xl ${
                isCompleted
                  ? "bg-gradient-to-br from-gray-400 to-blue-500"
                  : "bg-gradient-to-br from-gray-500 to-violet-500"
              }`}
            >
              <div className="bg-gray-900 rounded-xl p-6 h-full">
                {/* Lesson Status */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {isCompleted && (
                    <CheckCircle className="text-green-400" size={24} />
                  )}
                  {isLocked && <Lock className="text-yellow-400" size={24} />}
                </div>

                {/* Lesson Number */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="font-bold text-blue-400">
                      {chapter.chapter}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold">{chapter.title}</h2>
                </div>

                {/* Action Button */}
                <Link to={`/jlpt-level/${id}/chapter/${chapter.chapter}`}>
                  <motion.button
                    className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 bg-gray-700 text-gray-400 cursor-pointer
                       
                    `}
                    whileHover={!isLocked ? { scale: 1.05 } : {}}
                    whileTap={!isLocked ? { scale: 0.95 } : {}}
                  >
                    <BookOpenText size={16} />
                    Start Lesson
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Book;
