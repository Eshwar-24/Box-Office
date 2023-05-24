import React from "react";
import { Link } from "react-router-dom";
import SELECT from "../images/select.png";
import UNSELECT from "../images/unselect.png";
export default ({ status, id, name, summary, image, stars }) => {
  let text = summary
    ? `${summary
        .split(" ")
        .slice(0, 10)
        .join(" ")
        .replace(/<.+?>/g, "")}...`
    : "no info";
  return (
    <div className="card">
      <img className="image" src={image} alt={name} />

      <h1 className="cardname" title={name}>
        {name}
      </h1>
      <p className="cardinfo">{text}</p>
      <div className="btn">
        <Link className="readmore" to={`/show/${id}`}>
          Read more
        </Link>
        <button className="star-btn" onClick={stars}>
          <img
            className="star-logo"
            alt="star"
            src={status.includes(id) ? SELECT : UNSELECT}
          ></img>
        </button>
      </div>
    </div>
  );
};
