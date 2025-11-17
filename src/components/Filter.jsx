export const Filter = ({ onFilteredCountry, filteredCountry }) => {
  return (
    <select
      className="regionInput"
      name="region"
      onChange={onFilteredCountry}
      value={filteredCountry}
    >
      <option value="" selected>
        Filter by region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
