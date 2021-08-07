import DeviceFilter from './MultiDeviceFilter';
import SortByFilter from './SortByFilter';
import DirectionFilter from './DirectionFilter';
import { useFilter } from '../../contexts/filter.context';

const FilterForm = () => {
  const {deviceTypes, setDeviceTypes, sortBy, setSortBy, direction, toggleDirection} = useFilter();
  return (
    <div className="flex flex-col md:flex-row w-full my-2 ">
      <div className="mr-4 w-full md:w-1/2"> Device type : 
        <DeviceFilter
          value={deviceTypes}
          onChange={setDeviceTypes}
        />
      </div>
      <div className="mr-4 w-full md:w-1/2"> Sort by :  
        <div className="flex justify-between">
          <SortByFilter
            value={sortBy}
            onChange={setSortBy}
          />
          <DirectionFilter 
            direction={direction}
            changeDirection={toggleDirection}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterForm;