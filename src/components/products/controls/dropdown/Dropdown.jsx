import DropdownItem from "./DropdownItem";

const Dropdown = ({ name, label, onChange, value, defaultOption, options }) => {
  const onChangeHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col border border-solid border-gray-600 p-1 w-40 bg-slate-100">
      <label
        htmlFor={name}
        className="text-xs uppercase text-gray-600 px-1 py-1"
      >
        {label}
      </label>
      <select
        className="capitalize border-none bg-slate-100"
        onChange={onChangeHandler}
        value={value}
        id={name}
        name={name}
      >
        <option value="">{defaultOption}</option>
        {options &&
          options.map((category) => (
            <DropdownItem key={category} category={category} />
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
