import Twitter from "../components/twitter";
import Twitch from "../components/Twitch";
import Spotify from "../components/Spotify";
import "../stylesheets/Content.css";

const Content = () => {
  return (
    <div id="socialStreams">
      <div>
        <div id="youtube">
          <iframe
            width="400px"
            height="200px"
            src="https://www.youtube-nocookie.com/embed/OoLtkoLJj8w"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="youtubeMain"
          ></iframe>
        </div>

        <div id="twitterFeed">
          <Twitter />
        </div>
        <div id="twitchFeed">
          <Twitch />
        </div>
        <div id="Podcast">
          <Spotify />
        </div>
      </div>
    </div>
  );
};
export default Content;
