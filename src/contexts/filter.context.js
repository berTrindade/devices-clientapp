import { createContext, useContext, useState } from "react";
import { DIRECTION } from "../constants";

const FilterContext = createContext();

export const FilterProvider = ({children}) => {
  const [deviceTypes, setDeviceTypes] = useState([]);
  const [sortBy, setSortBy] = useState('type');
  const [direction, setDirection] = useState(DIRECTION.SORT_DIRECTION_ASC); 

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
      toggleDirection
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext);