import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/Contact.css";
const Contact = () => {
  return (
    <div id="contactDiv">
      <div id="contactInfoDiv">
        <p>
          <FontAwesomeIcon className="contactIcon" icon={faMapMarkerAlt} />
          Philadelphia, PA
        </p>
        <p>
          <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
          Email: katsuinq@gmail.com
        </p>
      </div>
    </div>
  );
};
export default Contact;
