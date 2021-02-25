import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OAuth_URL } from "../API/api";

export const Header = (): React.ReactElement => {
  return (
    <nav className="navbar justify-content-center">
      <li className="nav-item">
        <a href={OAuth_URL}>Login</a>
      </li>
      <li className="nav-item nav-link">
        <Link to="/">Top Games</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/top-streams">Top Live Streams</Link>
      </li>
    </nav>
  );
};
