import React from "react";
import "./App.css";
import BandsList from "./components/BandsList";
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      <div
        className="d-flex justify-content-between align-items-center w-100 px-5 py-4"
        style={{ backgroundColor: "#A6C8CD" }}
      >
        <img
          src="https://pngimg.com/uploads/rock_music/rock_music_PNG61.png"
          alt="Music"
          style={{ width: "50px" }}
        />
        <h2 className="font-weight-bold">
          <FormattedMessage id="MusicalBands" />
        </h2>
        <div></div>
      </div>
      <BandsList />
    </div>
  );
}

export default App;
