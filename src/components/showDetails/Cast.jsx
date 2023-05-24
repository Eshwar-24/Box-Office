import React from "react";
import NOT from "../images/iinf.jpg";
export default ({ c }) => {
  return (
    <div>
      {c.map(({ voice, character, person }, key) => (
        <div className="characters">
          <img
            className="cast-image"
            src={person.image ? person.image.medium : NOT}
          ></img>
          <p>
            <b>{person.name}</b> | {character.name}
            {voice ? " | voice" : ""}
          </p>
        </div>
      ))}
    </div>
  );
};
