import React, { useState } from "react";
import { jlpt } from "../data";
import { useParams } from "react-router-dom";
import { Notebook } from "lucide-react";
import Book from "../Components/Book";
const Lessons = () => {
  const { id } = useParams();
  const [setbook, setSetbook] = useState("Genki");

  return (
    <div className="text-white mt-5">
      <div>
        <form className="flex flex-col gap-5 items-center justify-center">
          <div className="flex text-center space-x-4 text-4xl font-semibold">
            <Notebook className="text-red-700 " size={40} />
            <h1>Select Book for {id}</h1>
          </div>
          <div className="flex gap-1 text-2xl">
            <input
              type="radio"
              id="Genki"
              name="book"
              onChange={(e) => setSetbook("minna")}
            />
            <label for="Genki">Genki</label>
            <input
              type="radio"
              id="Minna"
              name="book"
              defaultChecked
              className="ml-5"
              onChange={(e) => setSetbook("genki")}
            />
            <label for="Minna">Minna</label>
          </div>
        </form>
        <div className="">
          <h1 className="text-xl font-bold px-4 mb-3">Lessons for {setbook}</h1>
          {jlpt.map(
            (item, index) =>
              item.grade === id && (
                <div>
                  <Book chapters={item.chapters} id={id} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Lessons;
