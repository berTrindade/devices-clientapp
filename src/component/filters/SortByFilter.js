import Select from "react-select";
import { SORTING_OPTIONS } from "../../constants";

const SortByFilter = ({value, onChange}) => {
  const selected = SORTING_OPTIONS.find(option => option.value === value)
  return (
    <Select
      id={'sortBy'}
      name={'sortBy'}
      className="w-full"
      value={selected}
      options={SORTING_OPTIONS}
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      onChange={(option) =>onChange(option.value)}
    />
  );
};

export default SortByFilter;