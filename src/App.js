import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      {/* Start header */}
      <div className="header" id="header">
        <div className="container">
          <a href="#" className="logo">
            EldeSha
          </a>
          <ul className="main-nav">
            <li>
              <a href="#article">Article</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End header */}
      {/* Start landing */}
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcome, To Elzero World</h1>
            <p>
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="image">
            <img src={require("./photo/Header.png")} alt="Team" />
          </div>
        </div>
        <a href="#article" className="go-down">
          <i className="fas fa-angle-double-down fa-2x" />
        </a>
      </div>
      {/* End landing */}
    </>
  );
}

export default App;
