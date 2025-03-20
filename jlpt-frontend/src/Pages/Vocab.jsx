import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Vocab = () => {
  const [vocab, setVocab] = useState([]);
  const [offset, setOffset] = useState(
    sessionStorage.getItem("vocab")
      ? JSON.parse(sessionStorage.getItem("vocab")).offset
      : 0
  );
  const [totalVocab, setTotalVocab] = useState(0);
  const { id: level } = useParams();
  const [sNo, setSNo] = useState(
    sessionStorage.getItem("vocab")
      ? JSON.parse(sessionStorage.getItem("vocab")).sNo
      : 1
  );

  const fetchVocab = async () => {
    fetch(
      `https://jlpt-vocab-api.vercel.app/api/words?level=${level[1]}&limit=50&offset=${offset}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVocab(data.words);
        setTotalVocab(data.total);
      });
    sessionStorage.setItem(
      "vocab",
      JSON.stringify({
        sNo: sNo,
        offset: offset,
      })
    );
  };

  useEffect(() => {
    fetchVocab();
  }, [level, offset]);

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12 text-center space-y-6">
          <h1
            className="text-5xl font-bold mb-4 text-transparent bg-clip-text 
            bg-gradient-to-r from-emerald-400 to-cyan-500 animate-text drop-shadow-[0_2px_4px_rgba(34,197,94,0.3)]"
          >
            JLPT N{level} Vocabulary
          </h1>

          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => {
                setOffset(Math.max(0, offset - 1));
                setSNo((prev) => prev - 50);
              }}
              disabled={offset === 0}
              className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl 
                backdrop-blur-sm border-2 border-slate-600/50 hover:from-slate-700 hover:to-slate-600 
                transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-xl
                flex items-center gap-2 hover:scale-[1.02] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-cyan-400"
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

            <div className="text-sm font-mono text-emerald-400/80 px-4 py-2 bg-slate-800/50 rounded-lg">
              Page <span className="text-cyan-400">{offset + 1}</span> of{" "}
              <span className="text-purple-400">
                {Math.ceil(totalVocab / 50)}
              </span>
            </div>

            <button
              onClick={() => {
                setOffset(offset + 1);
                setSNo(sNo + 50);
              }}
              disabled={Math.ceil(totalVocab / 50) - 1 === offset}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-xl 
                hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300 
                shadow-xl hover:shadow-2xl hover:-translate-y-0.5
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-xl
                flex items-center gap-2 hover:scale-[1.02] active:scale-95"
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-400"
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
            ✨ Showing {50 * offset + 1}-
            {Math.min(50 * offset + 50, totalVocab)} of {totalVocab} words
          </div>
        </div>

        <div
          className="bg-slate-800/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border-2 border-slate-700/50 
          hover:shadow-[0_20px_50px_rgba(45,_212,_191,_0.1)] transition-shadow duration-300"
        >
          <table className="w-full">
            <thead className="text-left sticky top-0 bg-slate-900/80 backdrop-blur-sm">
              <tr className="border-b-2 border-slate-600/50">
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-cyan-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  #
                </th>
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-cyan-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  Furigana
                </th>
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-emerald-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  Kanji
                </th>
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-purple-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  Romaji
                </th>
                <th
                  className="pb-4 px-4 font-bold text-sm uppercase text-amber-400/90 tracking-wider 
                  bg-gradient-to-r from-slate-800/50 to-slate-900/50"
                >
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-700/50">
              {vocab.map((word, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-700/20 transition-all duration-200 group
                    even:bg-slate-800/10 hover:even:bg-slate-700/30"
                >
                  <td
                    className="py-4 px-4 font-medium text-cyan-300/90 group-hover:text-cyan-200 
                    transition-colors duration-200 text-center"
                  >
                    <span
                      className="inline-block w-8 h-8 bg-cyan-400/10 rounded-full 
                      flex items-center justify-center"
                    >
                      {idx + sNo}
                    </span>
                  </td>
                  <td
                    className="py-4 px-4 font-medium text-cyan-300/90 group-hover:text-cyan-200 
                    transition-colors duration-200"
                  >
                    {word.furigana}
                  </td>
                  <td
                    className="py-4 px-4 text-lg font-semibold text-slate-100 group-hover:text-white 
                    transition-colors duration-200"
                  >
                    {word.word}
                  </td>
                  <td
                    className="py-4 px-4 italic text-purple-300/90 group-hover:text-purple-200 
                    transition-colors duration-200"
                  >
                    {word.romaji}
                  </td>
                  <td
                    className="py-4 px-4 text-amber-100/90 group-hover:text-amber-50 
                    transition-colors duration-200"
                  >
                    <span className="bg-amber-400/10 px-2 py-1 rounded-md">
                      {word.meaning}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vocab;
