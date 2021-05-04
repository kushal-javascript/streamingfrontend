import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "./Card";
import Carousel from "./Carousel";

function Home(props) {
  return (
    <div className="home-page-component">
      <Carousel />
      <Card />
    </div>
  );
}
Home = withRouter(Home);
export default connect()(Home);
