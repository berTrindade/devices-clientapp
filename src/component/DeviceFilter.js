import {FaChevronDown, FaChevronUp, FaSortAmountDown, FaSortAmountDownAlt, FaSortAmountUp, FaSortAmountUpAlt, FaSortDown, FaSortUp} from 'react-icons/fa';
import Select from "react-select";
import { 
  SORT_DIRECTION_ASC, 
  SORT_DIRECTION_DESC, MAC, 
  WINDOWS_SERVER, 
  WINDOWS_WORKSTATION 
} from "../constants";
import { useFilter } from "../contexts/filter.context";

const deviceOptions = [
  WINDOWS_WORKSTATION,
  WINDOWS_SERVER,
  MAC,
];

const sortingOptions = [
  {label: 'System Name', value: 'system_name'},
  {label: 'HDD Capacity', value: 'hdd_capacity'},
  {label: 'type', value: 'type'},
];

const DeviceFilter = () => {
  const {deviceTypes, setDeviceTypes, sortBy, setSortBy, direction, setDirection} = useFilter();

  const selected = sortingOptions.find(option => option.value === sortBy)
  const changeDirection = () => {
    setDirection(direction === SORT_DIRECTION_ASC ? SORT_DIRECTION_DESC : SORT_DIRECTION_ASC);
  }

  return (
    <div className="flex flex-col md:flex-row w-full my-2 ">

      <div className="mr-4 w-full md:w-1/2"> Device type : 
        <Select
          id={deviceTypes}
          name={'deviceTypes'}
          value={deviceTypes}
          options={deviceOptions}
          getOptionLabel={(option) => option}
          getOptionValue={(option) => option}
          onChange={setDeviceTypes}
          isMulti
        />  
      </div>
      <div className="mr-4 w-full md:w-1/2"> Sort by :  
        <div className="flex justify-between">
          <Select
            id={'sortBy'}
            name={'sortBy'}
            className="w-full"
            value={selected}
            options={sortingOptions}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            onChange={(option) =>setSortBy(option.value)}
          />
          <button 
            className="border border-gray-400 ml-1 rounded w-10 text-gray-600 font-bold"
            onClick={changeDirection}
          >
            {direction === SORT_DIRECTION_DESC && (
              <FaSortAmountDown
                className="h-6 w-8 fill-current"
              />
            )}
            {direction === SORT_DIRECTION_ASC && (
              <FaSortAmountUp
                className="h-6 w-8 fill-current"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceFilter;