import React from "react";
import ReactPlayer from "react-player";

const Twitch = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.twitch.tv/katsugaming_"
        width="400px"
        height="200px"
        controls
      />
    </div>
  );
};

export default Twitch;
