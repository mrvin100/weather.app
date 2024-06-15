import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData() {
    try {
      const response = await fetch();
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSearch() {}
  return (
    <section className="weather container">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      weather
    </section>
  );
}
