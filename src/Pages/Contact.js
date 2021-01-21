import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/Contact.css";
import Form from "../components/Form";
const Contact = () => {
  return (
    <>
      <div id="contactDiv">
        <div id="contactInfoDiv">
          <div id="contactTextDiv">
            <p>
              <h3>
                Reach Out To Us Sign up below to subscribe to Katsu's monthly
                newsletter! First Issue Postponed.
              </h3>
            </p>
            <p>
              <h3>
                Doing cleanup on the Discord soon. Time to cleanup inactive
                members.
              </h3>
            </p>
          </div>
          <p>
            <FontAwesomeIcon className="contactIcon" icon={faMapMarkerAlt} />
            Philadelphia, PA
          </p>
          <p>
            <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
            Email: katsuinq@gmail.com
          </p>
          <Form />
        </div>
      </div>
    </>
  );
};
export default Contact;
