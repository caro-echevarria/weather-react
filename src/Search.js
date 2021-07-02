import React, { useState } from "react";

export default function Search() {
  return (
    <form>
      <input type="search" placeholder="Enter a city..." />
      <button type="Submit" id="search-button">
        <i className="fa fa-search"></i>
      </button>
      <button type="submit" id="current-button">
        <i className="fas fa-map-marker-alt"></i>
      </button>
    </form>
  );
}
