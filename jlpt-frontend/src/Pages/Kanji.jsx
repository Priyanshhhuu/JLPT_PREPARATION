import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Kanji = () => {
  const { id: level } = useParams();
  const [allKanji, setAllKanji] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [offset, setOffset] = useState(
    sessionStorage.getItem("kanjiPage")
      ? JSON.parse(sessionStorage.getItem("kanjiPage")).offset
      : 0
  );
  const [totalKanji, setTotalKanji] = useState(0);
  const itemsPerPage = 50;

  const fetchKanji = async () => {
    try {
      const response = await fetch(
        "https://jensechu.github.io/kanji/data/kanji.json"
      );
      const data = await response.json();
      setAllKanji(data.kanji || []);
    } catch (error) {
      console.error("Error fetching kanji:", error);
    }
  };

  useEffect(() => {
    fetchKanji();
  }, []);

  useEffect(() => {
    if (allKanji.length > 0) {
      const filtered = allKanji.filter((k) => k.category === `jlpt${level}`);
      setTotalKanji(filtered.length);
      const paginated = filtered.slice(
        offset * itemsPerPage,
        (offset + 1) * itemsPerPage
      );
      setKanji(paginated);
      sessionStorage.setItem("kanjiPage", JSON.stringify({ offset }));
    }
  }, [allKanji, level, offset]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12 text-center space-y-6">
          <h1
            className="text-5xl font-bold mb-4 text-transparent bg-clip-text 
            bg-gradient-to-r from-amber-400 to-orange-500 animate-text drop-shadow-[0_2px_4px_rgba(251,191,36,0.3)]"
          >
            JLPT {level.toUpperCase()} Kanji
          </h1>

          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => setOffset(Math.max(0, offset - 1))}
              disabled={offset === 0}
              className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl 
                backdrop-blur-sm border-2 border-slate-600/50 hover:from-slate-700 hover:to-slate-600 
                transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-xl
                flex items-center gap-2 hover:scale-[1.02] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </button>

            <div className="text-sm font-mono text-amber-400/80 px-4 py-2 bg-slate-800/50 rounded-lg">
              Page <span className="text-orange-400">{offset + 1}</span> of{" "}
              <span className="text-purple-400">
                {Math.ceil(totalKanji / itemsPerPage)}
              </span>
            </div>

            <button
              onClick={() => setOffset(offset + 1)}
              disabled={offset >= Math.ceil(totalKanji / itemsPerPage) - 1}
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl 
                hover:from-orange-500 hover:to-amber-500 transition-all duration-300 
                shadow-xl hover:shadow-2xl hover:-translate-y-0.5
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-xl
                flex items-center gap-2 hover:scale-[1.02] active:scale-95"
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="text-sm text-slate-400 font-mono animate-pulse">
            ✨ Showing {offset * itemsPerPage + 1}-
            {Math.min((offset + 1) * itemsPerPage, totalKanji)} of {totalKanji}{" "}
            kanji
          </div>
        </div>

        <div
          className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border-2 border-slate-700/50 
          hover:shadow-[0_20px_50px_rgba(251,191,36,0.1)] transition-shadow duration-300"
        >
          <table className="w-full">
            <thead className="text-left sticky top-0 bg-slate-900/80 backdrop-blur-sm">
              <tr className="border-b-2 border-slate-600/50">
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-amber-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  Kanji
                </th>
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-orange-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  Onyomi
                </th>
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-purple-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  Kunyomi
                </th>
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-cyan-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-700/50">
              {kanji.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-700/20 transition-all duration-200 group
                    even:bg-slate-800/10 hover:even:bg-slate-700/30"
                >
                  <td
                    className="py-4 px-4 text-2xl font-bold text-amber-200 group-hover:text-amber-100 
                    transition-colors duration-200 text-center"
                  >
                    <span
                      className="inline-block w-12 h-12 bg-amber-400/10 rounded-lg 
                      flex items-center justify-center border border-amber-400/20"
                    >
                      {item.character}
                    </span>
                  </td>
                  <td
                    className="py-4 px-4 font-medium text-orange-300/90 group-hover:text-orange-200 
                    transition-colors duration-200"
                  >
                    {item.onyomi}
                  </td>
                  <td
                    className="py-4 px-4 font-medium text-purple-300/90 group-hover:text-purple-200 
                    transition-colors duration-200"
                  >
                    {item.kunyomi}
                  </td>
                  <td
                    className="py-4 px-4 text-cyan-100/90 group-hover:text-cyan-50 
                    transition-colors duration-200"
                  >
                    <span className="bg-cyan-400/10 px-3 py-2 rounded-md">
                      {item.meaning}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="mt-8 text-center text-sm text-slate-400/70 font-mono 
          animate-bounce hover:animate-none"
        >
          ▼ Scroll to explore more kanji ▼
        </div>
      </div>
    </div>
  );
};

export default Kanji;
