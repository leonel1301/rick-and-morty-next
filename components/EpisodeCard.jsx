import React from "react";

export const EpisodeCard = ({ name, episode, airDate }) => {
  return (
    <div className="flex flex-col justify-start m-2">
      <div>
        <span className="text-green-600">{episode}:</span>
        <span className="ml-1">{name}</span>
      </div>
      <span>Air Date: {airDate}</span>
    </div>
  );
};
