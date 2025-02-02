import React from "react";
import ReactPlayer from "react-player";

const ReadPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/30 to-black/80 text-white p-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* PDF Viewer Section */}
      <div className="flex-1 max-w-[500px] lg:max-w-[600px] bg-black-800 bg-opacity-75 p-6 rounded-2xl shadow-xl backdrop-blur-lg transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-400">
          📖 PDF Lesson
        </h2>
        <div className="w-full h-[450px] lg:h-[600px] rounded-lg overflow-hidden border border-gray-700 shadow-lg">
          <iframe
            src="https://www.japanvitta.com/storage/lessons-pdf/Minna%20Vocabulary%201%20-%20(japanvitta.com).pdf"
            width="100%"
            height="100%"
            title="PDF Lesson"
            className="border-none rounded-lg"
          />
        </div>
      </div>

      {/* Video Player Section */}
      <div className="flex-1 max-w-[500px] lg:max-w-[600px] bg-gray-800 bg-opacity-75 p-6 rounded-2xl shadow-xl backdrop-blur-lg transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-400">
          🎥 Video Lesson
        </h2>
        <div className="w-full rounded-lg overflow-hidden border border-gray-700 shadow-lg">
          <ReactPlayer
            url="https://youtu.be/1X3dV3D5EJg?feature=shared"
            width="100%"
            height="350px"
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 1, modestbranding: 1 },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadPage;
