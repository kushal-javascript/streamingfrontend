import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

function Card(props) {
  useEffect(() => {
    props.dispatch({
      type: "GET_MOVIES_DETAIL",
    });
  }, []);
  return (
    <div className="play-list-section mt-3 ml-5 mr-5 container">
      <div className="row">
        {props.getMoviesDetail?.length > 0 &&
          props.getMoviesDetail.map((each, index) => {
            return (
              <div className="card mr-auto mt-5">
                <img
                  src={"./video_banner/" + each.replace(".mp4", "") + ".jpg"}
                  className="card-img-top"
                  alt={each.replace(".mp4", "")}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {each.replace(".mp4", "").replace("-", " ")}
                  </h5>
                  <p className="card-text">
                    Enjoy Watching {each.replace(".mp4", "").replace("-", " ")}
                  </p>
                  <Link to={"/playvideo/" + each}>
                    <button className="btn btn-primary">Play</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
Card = withRouter(Card);
export default connect(function (state, action) {
  return {
    getMoviesDetail: state?.get_detail,
  };
})(Card);
