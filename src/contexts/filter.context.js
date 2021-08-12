import { createContext, useContext, useState } from "react";
import { DIRECTION } from "../constants";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [deviceTypes, setDeviceTypes] = useState(props.deviceTypes || []);
  const [sortBy, setSortBy] = useState(props.sortBy || 'type');
  const [direction, setDirection] = useState(props.direction || DIRECTION.SORT_DIRECTION_ASC); 

  const toggleDirection = () => {
    setDirection(direction === DIRECTION.SORT_DIRECTION_ASC ?
      DIRECTION.SORT_DIRECTION_DESC : DIRECTION.SORT_DIRECTION_ASC);
  }
  return (
    <FilterContext.Provider value={{
      deviceTypes, 
      setDeviceTypes,
      sortBy,
      setSortBy,
      direction,
      toggleDirection,
    }}
    {...props}
    />
  )
}

export const useFilter = () => useContext(FilterContext);