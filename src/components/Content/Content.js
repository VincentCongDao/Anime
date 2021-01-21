import React from "react";
import AnimeCard from "../Animecard/AnimeCard";
import "./Content.css";
export default function Content(props) {
  return (
    <div className="search">
      <main>
        <div className="main-head">
          <form className="search-box" onSubmit={props.HandleSearch}>
            <input
              type="search"
              placeholder="Search For An Anime"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
              required
            />
          </form>
        </div>
        <div className="anime-list">
          {props.animeList.map((anime) => (
            <AnimeCard className="anime-card" anime={anime} key={anime.mal_id}>
              {anime.title}
            </AnimeCard>
          ))}
        </div>
      </main>
    </div>
  );
}
