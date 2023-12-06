import { useQuery } from "react-query";
import DropdownItem from "./dropdown/DropdownItem";
import fetchProducts from "../api/fetchProducts";
import Dropdown from "./dropdown/Dropdown";

const CategoryDropdown = ({ setSelectedCategory, selectedCategory }) => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: "categories",
    queryFn: ({ signal }) => fetchProducts({ signal, options: "categories" }),
  });

  return (
    <Dropdown
      name={"categories"}
      label={"Category"}
      onChange={setSelectedCategory}
      value={selectedCategory}
      defaultOption={"all"}
      options={categories}
    />
  );
};

export default CategoryDropdown;
