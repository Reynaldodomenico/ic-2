import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center p-12 mb-24 bg-primary rounded-2xl">
      <h1 className="text-white text-3xl font-semibold mb-6">
        Receive all exclusive deals directly in your inbox!
      </h1>
      <div className="w-95 pl-4 flex items-center justify-between bg-white h-16 rounded-full border border-accent">
        <input
          className="flex-1 px-4 text-gray-600 focus:outline-none"
          type="email"
          placeholder="Your email"
        />
        <button className="w-32 h-full rounded-full bg-accent text-white text-lg font-semibold hover:bg-secondary duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
