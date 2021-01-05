import homeComponent from "../components/Home";
import "../stylesheets/Home.css";
import { library } from "@fortawesome/fontawesome-svg-core";
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

const Home = () => {
  return (
    <>
      <main>
        <homeComponent />
      </main>
      <footer>
        <a href="https://www.facebook.com/katsugg" target="_blank">
          <FontAwesomeIcon className="footerIcon" icon={faFacebookSquare} />
        </a>
        <a href="https://www.twitter.com/cutletgg" target="_blank">
          <FontAwesomeIcon className="footerIcon" icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/katsu.gg" target="_blank ">
          <FontAwesomeIcon className="footerIcon" icon={faInstagramSquare} />
        </a>
        <a href="https://www.youtube.com/channel/UCNnfG-upnF3USXzfuAOMnRw" target="_blank ">
          <FontAwesomeIcon className="footerIcon" icon={faYoutube} />
        </a>
        <a href="https://www.twitch.tv/katsugg" target="_blank ">
          <FontAwesomeIcon className="footerIcon" icon={faTwitch} />
        </a>
        <a href="https://discordapp.com/invite/gF7CsVy" target="_blank ">
          <FontAwesomeIcon className="footerIcon" icon={faDiscord} />
        </a>
        <a href="https://www.patreon.com/katsugg" target="_blank ">
          <FontAwesomeIcon className="footerIcon" icon={faPatreon} />
        </a>
      </footer>
    </>
  );
};

export default Home;
