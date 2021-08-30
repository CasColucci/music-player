import React from "react";

export default function TrackSearchResults({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px" }}
        alt="noimg"
      />
      <div className="m-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
}
