import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Router>
        <NavBar search={search} setSearch={setSearch} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home key="general" page={4} category="general" search={search} />}
          ></Route>

          <Route
            exact
            path="/buisness"
            element={<Home key="business" page={4} category="business" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <Home key="entertainment" page={4} category="entertainment" />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={<Home key="sports" page={4} category="sports" />}
          ></Route>
          <Route
            exact
            path="/health"
            element={<Home key="health" page={4} category="health" />}
          ></Route>
          <Route
            exact
            path="/science"
            element={<Home key="science" page={4} category="science" />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<Home key="technology" page={4} category="technology" />}
          ></Route>
           <Route
            exact
            path="/search/:search"
            element={<Home key="search" page={1} search={search} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
