import Select from "react-select";
import { MAC, WINDOWS_SERVER, WINDOWS_WORKSTATION } from "../constants";

const deviceOptions = [
  {label:WINDOWS_WORKSTATION,value:WINDOWS_WORKSTATION},
  { label:WINDOWS_SERVER,value:WINDOWS_SERVER},
  {label: MAC,value: MAC}
];

const DeviceForm = ({
  item = {}, 
  handleChange, 
  handleSave, 
  handleCancel,
}) => {
  return (
    <div className="flex flex-col space-y-3 w-full justify-between items-center py-6 px-2 bg-white mb-4">
      <div className="relative flex flex-col md:flex-row w-full md:justify-between">
        <label htmlFor="system_name"> System name* </label>
        <input 
          type="text" 
          id="system_name"
          name="system_name"
          value={item.system_name || ''}
          placeholder="Product URL" 
          className="flex w-full md:w-2/3 p-1 pl-2 border border-gray-300 rounded text-lg focus:border-gray-200  focus:outline-none" 
          onChange={({target: {name, value}})=>handleChange(name, value)}
        />
      </div>
      <div className="relative flex flex-col md:flex-row w-full md:justify-between">
        <label htmlFor="type"> Type* </label>
        <Select
          id={'type'}
          name={'type'}
          options={deviceOptions}
          getOptionValue={option=> option.value}
          getOptionLabel={option=> option.label}
          className="w-full md:w-2/3"
          value={deviceOptions.find(option => option.value === item.type)}
          onChange={option=>handleChange('type', option.value)}
        /> 
      </div>
      <div className="relative flex flex-col md:flex-row w-full md:justify-between">
        <label htmlFor="hdd_capacity"> HDD Capacity* </label>
        <input 
          type="number" 
          id="hdd_capacity"
          name="hdd_capacity"
          value={item.hdd_capacity || ''}
          placeholder="Target price" 
          className="flex w-full md:w-2/3 p-1 pl-2 border border-gray-300 rounded text-lg focus:border-gray-200  focus:outline-none" 
          onChange={({target: {name, value}})=>handleChange(name, value)}
        />
      </div>
      <div className="relative flex w-full space-x-3 justify-end">
          <button 
            type="button" 
            className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out"
            onClick={handleSave}
          >
           
            Save
          </button>
          <button 
            type="button" 
            className="bg-white text-gray-400 px-6 py-2 border rounded border-gray-400 font-medium mx-3 hover:text-gray-400 hover:border-gray-400 transition duration-200 each-in-ou"
            onClick={handleCancel}
          >
           
            Cancel
          </button>
      </div>
      
    </div>
  );
};

export default DeviceForm;