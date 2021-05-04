import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Streaming Video
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav float-left">
            <li className="nav-item dropdown">
              <a
                aria-expanded="false"
                aria-haspopup="true"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                id="navbarDropdown"
                role="button"
              >
                My Account
              </a>
              <div aria-labelledby="navbarDropdown" className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 float-left">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="d-flex justify-content-end ml-auto">
            <button type="button" className="btn btn-success">
              Login
            </button>
            <button type="button" className="btn btn-success ml-1">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
Header = withRouter(Header);
export default connect()(Header);
