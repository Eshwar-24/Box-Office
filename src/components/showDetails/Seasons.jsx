import React from "react";
export default ({ sea }) => {
  return (
    <div>
      <p className="detailsp">
        Number of Seasons:<b>{sea.length}</b>
      </p>
      <p className="detailsp">
        Number of Episodes:
        <b>{sea.reduce((pre, cur) => pre + cur.episodeOrder, 0)}</b>
      </p>
      <div>
        {sea.map((cur) => (
          <div key={cur.id} className="season-div">
            <div>
              <p className="detailsp">
                season <b>{cur.number}</b>
              </p>
              {cur.episodeOrder && (
                <p className="detailsp">
                  Episodes: <b>{cur.episodeOrder}</b>
                </p>
              )}
            </div>
            <p className="ai">
              Aired: <b>{cur.premiereDate}</b> - <b>{cur.endDate}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
