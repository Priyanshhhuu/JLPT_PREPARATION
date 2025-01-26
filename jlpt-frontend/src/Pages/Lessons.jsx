import React from "react";
import { jlpt } from "../data";
import { useParams } from "react-router-dom";
const Lessons = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default Lessons;
