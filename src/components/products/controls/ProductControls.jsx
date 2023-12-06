import CategoryDropdown from "./CategoryDropdown";
import SortDirection from "./sort/SortDirection";
import SortDropdown from "./sort/SortDropdown";

const ProductControls = ({
  sortBy,
  setSortBy,
  selectedCategory,
  setSelectedCategory,
  sortDirection,
  setSortDirection,
}) => {
  console.log(sortBy);
  return (
    <div className="bg-slate-200 py-2 px-4 mb-5 flex gap-5">
      <CategoryDropdown
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="flex gap-3">
        <SortDropdown setSortBy={setSortBy} sortBy={sortBy} />
        {sortBy && (
          <SortDirection
            setSortDirection={setSortDirection}
            sortDirection={sortDirection}
          />
        )}
      </div>
    </div>
  );
};

export default ProductControls;
