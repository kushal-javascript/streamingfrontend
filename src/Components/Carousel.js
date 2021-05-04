import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Carousel(props) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./carousel/1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./carousel/2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./carousel/3.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./carousel/4.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./carousel/5.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
Carousel = withRouter(Carousel);
export default connect()(Carousel);
