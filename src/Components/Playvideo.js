import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Playvideo(props) {
  return (
    <div className="play-video-page-component mt-2 mb-2 mr-5 ml-5">
      <video
        height="100%"
        width="100%"
        loop="true"
        autoplay="autoplay"
        controls="controls"
        id="vid"
        muted
      >
        <source
          src={
            "http://localhost:5000/api/playvideo?filename=" +
            props.match.params.id
          }
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}
Playvideo = withRouter(Playvideo);
export default connect()(Playvideo);
