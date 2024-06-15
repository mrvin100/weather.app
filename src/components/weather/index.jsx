import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const data = await response.json();
      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  useEffect(() => {
    fetchWeatherData("yaounde");
  }, []);

  function handleSearch() {
    fetchWeatherData(search);
  }
  console.log(weatherData);
  return (
    <section className="weather container">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <h3 className="heading">Loading...</h3>
      ) : (
        <div className="content">
          <h3 className="heading">
            {weatherData?.name}, <span>{weatherData?.sys.country}</span>
          </h3>
          <div className="details">
            <span className="date">{getCurrentDate()}</span> <br />
            <span className="temperature">{weatherData?.main?.temp}</span>
            <p className="description">
              {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>
            <div className="infos">
              <span>
                {weatherData?.wind?.speed} <i>wind Speed</i>
              </span>

              <span>
                {weatherData?.main?.humidity}%<i> Humidity</i>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
