import { BookOpenText } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Book = ({ chapters, id }) => {
  return (
    <div className="px-4  grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {chapters?.map((chapter) => (
        <Link to={`/jlpt-level/${id}/chapter/${chapter.chapter}`}>
          <div className="bg-black-gradient box-shadow p-6 rounded-md flex flex-col justify-between gap-4 shadow-md card-hover  transition">
            <h1 className={`text-red-600font-bold text-2xl`}>
              Lesson: {chapter.chapter}
            </h1>

            <p className="text-white text-sm">{chapter.title}</p>

            <div className="flex items-center justify-between mt-4">
              <BookOpenText
                className={`
                   "text-red-500/40 hover:text-red-600 `}
              />
              <button
                className={`px-6 py-2 text-sm font-medium rounded-md transition bg-red-500/40 hover:bg-red-600 text-white
              `}
              >
                Read Now
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Book;
