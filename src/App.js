import Header from "./components/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    SetTopAnime(temp.top.slice(0, 5));
  };

  const HandleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    SetAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Sidebar topAnime={topAnime} />
        <div className="space-empty"></div>
        <Content
          HandleSearch={HandleSearch}
          search={search}
          animeList={animeList}
          setSearch={SetSearch}
        />
      </div>
    </div>
  );
}

export default App;
