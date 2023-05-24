import React from "react";
import ActorCard from "./ActorCard";
import NOT_FOUND from "../images/iinf.jpg";
export default ({ person }) => {
  return (
    <div className="cardgrid">
      {" "}
      {person.map(({ person }) => (
        <ActorCard
          key={person.id}
          image={person.image ? person.image.medium : NOT_FOUND}
          name={person.name}
          gender={person.gender}
          country={person.country}
          DOB={person.birthday}
          DOD={person.deathday}
        />
      ))}
    </div>
  );
};

/*
[{"score":0.5,
"person":{"id":71814,
"url":"https://www.tvmaze.com/people/71814/euphoria-girls",
"name":"Euphoria Girls",
"country":null,
"birthday":null,
"deathday":null,
"gender":null,
"image":null,
"updated":1434888421,
"_links":{"self":{"href":"https://api.tvmaze.com/people/71814"}}}}
*/
