import React from "react";
export default ({ status, network, premiered }) => {
  return (
    <div>
      <p className="detailsp">
        status:<b>{status ? status : ""}</b>
      </p>
      <p className="detailsp">
        premiered {premiered}
        {network ? ` on ${network.name}` : ""}
      </p>
    </div>
  );
};
