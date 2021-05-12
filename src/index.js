import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => (
  <div className="h-screen w-screen flex justify-center items-center bg-white relative">
    <div className="text-xl text-gray-900">
      <div className="text-center">Customize this kit as per your needs !</div>
      <div className="text-base w-96 text-center">
        Use this kit to craft your amazing react application using tailwind css
        framework. Let me know if you have any suggestions to improve this kit.
      </div>
    </div>
    <div className="absolute m-auto w-max bottom-0">
      For Developers, by Devarsh Patel.
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
