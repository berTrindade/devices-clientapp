import { createContext, useContext, useState } from "react";
import { SORT_DIRECTION_ASC } from "../constants";

const FilterContext = createContext();

export const FilterProvider = ({children}) => {
  const [deviceTypes, setDeviceTypes] = useState([]);
  const [sortBy, setSortBy] = useState('type');
  const [direction, setDirection] = useState(SORT_DIRECTION_ASC); 
  return (
    <FilterContext.Provider value={{
      deviceTypes, 
      setDeviceTypes,
      sortBy,
      setSortBy,
      direction,
      setDirection
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext);