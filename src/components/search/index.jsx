export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search_engine">
      <input
        type="text"
        placeholder="Enter city name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="btn" onClick={handleSearch}>
        search
      </button>
    </div>
  );
}
