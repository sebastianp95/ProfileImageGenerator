import React from "react";
import ImageUploader from "../../components/ImageUploader";

const Hero = () => {
  return (
    <div className="hero-container flex h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-700 via-blue-800 to-black px-4 lg:flex-row">
      {/* Text Section */}
      <div className="mb-8 flex max-w-lg flex-col items-start justify-center space-y-4 text-left lg:mb-0">
        <h1 className="text-3xl font-semibold leading-snug text-gray-100 md:text-4xl">
          Transform Your LinkedIn Profile Picture
        </h1>
        <p className="text-base text-gray-300 md:text-lg">
          Effortlessly create polished profile pictures with custom backgrounds.
          Simple tools for great results.
        </p>
      </div>

      {/* Image Uploader Section */}
      <div className="upload-area w-full max-w-sm rounded-lg bg-gray-100 p-6 shadow-lg">
        <ImageUploader />
      </div>
    </div>
  );
};

export default Hero;
