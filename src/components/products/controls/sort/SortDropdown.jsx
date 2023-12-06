import Dropdown from "../dropdown/Dropdown";

const SortDropdown = ({ setSortBy, sortBy }) => {
  const options = ["price", "title", "rating"];

  return (
    <Dropdown
      name={"sort"}
      label={"Sort by"}
      onChange={setSortBy}
      value={sortBy}
      defaultOption={"none"}
      options={options}
    />
  );
};

export default SortDropdown;
