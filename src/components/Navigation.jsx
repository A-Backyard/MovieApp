import React, { Component } from "react";

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navigation">
        <a className="navbar-brand">MovieApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Search</a>
            </li>
          </ul>
          <div className="my-2 my-lg-0">
            <div className="d-flex align-items-center">
              <img
                width="40px"
                className="rounded-circle mr-2"
                src="https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
                alt=""
              />
              <h6 className="mb-0">User</h6>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
