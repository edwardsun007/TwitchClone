import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { client_id } from "../API/api";

import Button from "@material-ui/core/Button";

import "../styles/Games.css";

type IGameDataType = {
  id: string;
  name: string;
  box_art_url: string;
};

export const Games = (): React.ReactElement => {
  const location = useLocation();
  const [games, setGames] = useState<IGameDataType[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (token: string) => {
      const instance = axios.create({
        headers: {
          "Client-ID": client_id,
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await instance.get(
        "https://api.twitch.tv/helix/games/top"
      );
      const originalArr = [...result.data.data];
      originalArr.forEach((game: any) => {
        const newURL = game.box_art_url
          .replace("{width}", "300")
          .replace("{height}", "300");
        game.box_art_url = newURL;
      });

      setGames(originalArr);
    };

    // if not in local storage, run the logic to authenticate
    let token: string | null = localStorage.getItem("accessToken");

    if (!token) {
      if (!location || !location.hash || location.hash.length === 0) return;
      const hashes = location.hash.split("&");
      const isTokenStr = (hash: string) => hash.indexOf("token") >= 0;
      const tokenHashIdx = hashes.findIndex(isTokenStr);
      token = hashes[tokenHashIdx].substring(
        hashes[tokenHashIdx].indexOf("=") + 1
      );
      localStorage.setItem("accessToken", token);
      setAccessToken(token);
    }

    fetchData(token);
  }, []);

  return (
    <div>
      {games.length > 0 ? (
        <div>
          <h1 className="game_title mx-auto" style={{ width: "500px" }}>
            Most popular games
          </h1>
          <div className="container-fluid">
            <div className="row">
              {games.map((game, idx) => (
                <div className="col-4" key={idx}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={game.box_art_url}
                      alt="Not Found Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{game.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>No Games Found</div>
      )}
    </div>
  );
};
