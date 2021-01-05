import "./App.css";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./Pages/Home";

import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <nav id="navBar">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Content">
            <Content />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </nav>
    </div>
  );
}

export default App;
