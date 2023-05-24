import React from "react";
export default ({ name, country, image, gender, DOB, DOD }) => {
  console.log(country);
  return (
    <div className="card">
      <img className="image" src={image} alt={name} />
      <h1 className="cardname">
        {name}({gender ? gender : null})
      </h1>
      <p className="p1">
        country:{country ? `comes from ${country.name}` : "country unknown"}
      </p>
      <div>
        <p className="p">{DOB ? `Born on ${DOB}` : ""}</p>

        <p className="p">{DOD ? `Died on ${DOD}` : "Alive"}</p>
      </div>
    </div>
  );
};
