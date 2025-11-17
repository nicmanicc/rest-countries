export const SearchBar = ({ onSearchCountry, searchedCountry }) => {
  return (
    <input
      placeholder="Search for a country..."
      type="search"
      name="country"
      onChange={onSearchCountry}
      value={searchedCountry}
      className="searchInput"
    />
  );
};
