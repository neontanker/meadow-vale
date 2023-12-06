import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SortDirection = ({ setSortDirection, sortDirection }) => {
  return (
    <button
      onClick={setSortDirection}
      className="capitalize flex gap-1 items-center"
    >
      {sortDirection}
      <FontAwesomeIcon
        className="text-xs"
        icon={sortDirection === "asc" ? faChevronUp : faChevronDown}
      />
    </button>
  );
};

export default SortDirection;
