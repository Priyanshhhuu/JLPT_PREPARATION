import React from "react";

const ReadPage = () => {
  return (
    <div className="text-white">
      <iframe src="" frameborder="0"></iframe>
      <video controls download={false} autoPlay>
        <source src="/01.mp4" />
      </video>
    </div>
  );
};

export default ReadPage;
