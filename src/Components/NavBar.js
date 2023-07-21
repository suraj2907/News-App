import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";

const NavBar = () => {
 

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            News App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="buisness">
                  Buisness
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/science">
                  Science
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search" >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
