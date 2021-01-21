import "./App.css";
import Content from "./Pages/Content";
import Nav from "./components/Nav";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitter,
  faYoutube,
  faTwitch,
  faDiscord,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <nav id="navBar">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Content">
              <Content />
            </Route>
          </Switch>
        </nav>
      </div>
      <footer>
        <a
          href="https://www.facebook.com/katsugg"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="footerIcon" icon={faFacebookSquare} />
        </a>
        <a
          href="https://www.twitter.com/cutletgg"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="footerIcon" icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/katsu.gg"
          target="_blank "
          rel="noreferrer"
        >
          <FontAwesomeIcon className="footerIcon" icon={faInstagramSquare} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCNnfG-upnF3USXzfuAOMnRw"
          target="_blank "
          rel="noreferrer"
        >
          <FontAwesomeIcon className="footerIcon" icon={faYoutube} />
        </a>
        <a
          href="https://www.twitch.tv/katsugg"
          target="_blank "
          rel="noreferrer"
        >
          <FontAwesomeIcon className="footerIcon" icon={faTwitch} />
        </a>
        <a
          href="https://discordapp.com/invite/gF7CsVy"
          target="_blank "
          rel="noreferrer"
        >
          <FontAwesomeIcon className="footerIcon" icon={faDiscord} />
        </a>
        <a
          href="https://www.patreon.com/katsugg"
          target="_blank "
          rel="noreferrer"
        >
          <FontAwesomeIcon className="footerIcon" icon={faPatreon} />
        </a>
      </footer>
    </>
  );
}

export default App;
