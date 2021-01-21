import React from "react";
import "./Sidebar.css";
export default function Sidebar({ topAnime }) {
  return (
    <div className="Sidebar">
      <h3>Top Anime</h3>
      <nav>
        {topAnime.map((anime) => (
          <a
            className="sidebar-nav"
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
