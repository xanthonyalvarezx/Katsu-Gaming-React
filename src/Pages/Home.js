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
        <div id="backgroundDiv"></div>
        <h2 id="bannerTabText">Bridging the gap between fans and members!</h2>
        <div id="homeBanner">
          <h3 id="homeBannerText">Our Mission</h3>
          <p>
            We made Katsu Gaming on a whim but our desire to improve the state of esports by making an organization and
            creating a brand that people can not only show off but be able to represent and become a part of is pushing
            us to make it official.
          </p>
        </div>
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
