import React from "react";

import "./BgIntroVideo.scss";
import introVideo from "../../videos/intro-video.mp4";

const BgIntroVideo = props => {
  return (
    <div className="intro-video">
      {/* <div class="overlay" /> */}
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={introVideo} type="video/mp4" />
      </video>
    </div>
  );
};
export default BgIntroVideo;
