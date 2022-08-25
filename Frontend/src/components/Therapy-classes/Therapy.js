import React, { Fragment } from "react";
import "./Therapy.css";

const Therapy = () => {
  return (
    <Fragment>
      <div className="therapy">
        <div className="therapyHeading">
          <h3>Meditation Therapy Courses</h3>
          <p>
            INDIVIDUAL TRANSFORMATION FOR CONTEMPORARY PEOPLE <br /> Time to
            Turn up for Your Own Life
          </p>
        </div>
        <div className="therapyContent">
          <div className="therapyImg">
            <img
              src="https://cdn.myshopmatic.com/images/XQN8WN/WKoOKBNk1X.webp"
              alt=""
            />
          </div>

          <div className="therapyContent-1">
            <h3>
              OSHO Reminding Yourself of the Forgotten Language of Talking to
              Your BodyMind{" "}
            </h3>
            <p className="therapyP">
              May 15 to 21 , 2022 - 8pm (India time) Online Zoom
            </p>
            <p className="therapyP-1">
              A chance to remember a vital, forgotten language - how to speak to
              your bodymind and to interpret its responses. <br />
              Learn to cooperate with the healing that arises when your energies
              relax into a natural harmony. <br />A guided process that can be
              used to address specific issues - smoking, eating disorders,
              insomnia, body pain, unhealthy behavior patterns.
            </p>
            <a href="/osho-course" className="Btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="therapyContent therapyContent2">
          <div className="therapyContent-1">
            <h3>Tibetan Sound Healing Meditation</h3>
            <p className="therapyP">
              Sound Healing Private and Group Session in Dubai and India
            </p>
            <p className="therapyP-1">
              Music can heal, literally. Studies have revealed that music
              releases endorphins, which can ease pain, or even improve health
              outcomes. <br /> <br />
              When the bodies systems become stressed or compromised certain
              frequencies become out of tune and everything can become affected.
              With sound healing, utilising various instruments and tones, the
              body is gently brought back to its natural state of harmony.
            </p>
            <a href="/osho-course" className="Btn">
              Learn More
            </a>
          </div>
          <div className="therapyImg">
            <img
              src="https://cdn.myshopmatic.com/images/XQN8WN/K7zY580wzr.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Therapy;
