import React from "react";
import "./Animecard.css";
export default function AnimeCard({ anime }) {
  return (
    <div>
      <article className="anime-card">
        <a href={anime.url} target="_blank" rel="noreferrer">
          <figure>
            <img src={anime.image_url} alt="Anime Image" />
          </figure>
          <h3 className="anime-title">{anime.title}</h3>
        </a>
      </article>
    </div>
  );
}
