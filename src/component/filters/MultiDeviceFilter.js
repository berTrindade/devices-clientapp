
import Select from "react-select";
import { DEVICES_OPTIONS } from "../../constants";

const deviceOptions = [
  DEVICES_OPTIONS.WINDOWS_WORKSTATION,
  DEVICES_OPTIONS.WINDOWS_SERVER,
  DEVICES_OPTIONS.MAC,
];

const DeviceFilter = ({value, onChange}) => {
 return (
  <Select
    id={'deviceTypes'}
    name={'deviceTypes'}
    value={value}
    options={deviceOptions}
    getOptionLabel={(option) => option}
    getOptionValue={(option) => option}
    onChange={onChange}
    isMulti
  /> 
 )
};

export default DeviceFilter;