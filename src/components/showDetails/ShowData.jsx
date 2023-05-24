import React from "react";
import NOT_FOUNF from "../images/iinf.jpg";
import UN from "../images/unselect.png";
import SELECT from "../images/select.png";
import { reducer } from "../functions/customHooks";
export default ({ id, image, name, rating, summary, tags }) => {
  const [state, dispatcher] = reducer();
  const star = () => {
    let a = state.includes(id);
    if (a) dispatcher({ type: "REMOVE", showId: id });
    else dispatcher({ type: "ADD", showId: id });
  };

  return (
    <div className="data">
      <div>
        <img
          className="ima"
          src={image ? image.medium : NOT_FOUNF}
          alt={name}
        ></img>
      </div>
      <div>
        <div className="rate">
          <h2>
            {name} <span>|</span>{" "}
            <button className="star-btn" onClick={star}>
              <img
                className="star-logo"
                src={state.includes(id) ? SELECT : UN}
              ></img>
            </button>
          </h2>
          <p className="ok"> {rating.average}</p>
        </div>
        <p className="k" dangerouslySetInnerHTML={{ __html: summary }}></p>
        <div className="rate1">
          <p className="kkk">Tags:</p>
          {tags.map((gen) => (
            <p className="cont" key={gen}>
              {gen}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
