import React from "react";
import Slider from "../Slider/Slider";
import ImageGrid from "../ImageGrid";
import StartLerlingButton from "../StartLerlingButton";
import ImageComp from "../ImgComp/ImageComp";
import "./Home.css"; // Import the custom CSS

function Home() {
  return (
    <div className="h-full w-full">
      {/* Slider Component */}
      <Slider />

      {/* Objectives Section */}
      <div className="w-[88%] h-[2px] bg-black mt-14 mx-auto"></div>
      <div className="objectives-container h-auto w-full flex flex-col justify-center items-center mb-11">
        <div className="flex items-center p-4">
          <h3 className="objectives-title font-bold hover:text-gray-300 transition duration-300 ease-in-out">
            Objectives
          </h3>
        </div>

        <div className="h-auto w-full p-2 gap-1">
          <p className="objectives-text leading-relaxed hover:text-gray-400 transition duration-300 ease-in-out mb-4">
            1. The DAA Virtual Lab helps students understand and experiment with
            algorithm design and performance analysis.
          </p>
          <p className="objectives-text leading-relaxed hover:text-gray-400 transition duration-300 ease-in-out mb-4">
            2. It provides opportunities to explore various algorithmic
            techniques such as sorting, searching, graph traversal, dynamic
            programming, and greedy algorithms.
          </p>
          <p className="objectives-text leading-relaxed hover:text-gray-400 transition duration-300 ease-in-out">
            3. Students can observe the step-by-step execution of algorithms and
            analyze time and space complexity through hands-on testing.
          </p>
        </div>
      </div>

      <ImageComp />
      <StartLerlingButton />
    </div>
  );
}

export default Home;
