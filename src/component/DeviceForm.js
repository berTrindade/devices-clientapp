import SingleDeviceFilter from "./filters/SingleDeviceFilter";

const FieldNotEmptyMessage = () => <span className="flex text-xs font-bold text-red-600 my-1"> field can not be empty</span>

const DeviceForm = ({
  item = {}, 
  handleChange, 
  handleSave, 
  handleCancel,
}) => {
  const canSubmit = item.type !== '' &&
    item.hdd_capacity !== '' &&
    item.system_name !== '';
  return (
    <div className="flex flex-col space-y-3 w-full justify-between items-center py-6 px-2 bg-white mb-4">
      <div className="relative flex flex-col md:flex-row w-full md:justify-between">
        <label htmlFor="system_name" className="flex w-full md:w-2/5"> System name* </label>
        <div className="flex flex-col w-full md:3/5 ">
          <input 
            type="text" 
            id="system_name"
            name="system_name"
            value={item.system_name || ''}
            placeholder="System Name" 
            className="flex w-full p-1 pl-2 border border-gray-300 rounded text-lg focus:border-gray-200  focus:outline-none" 
            onChange={({target: {name, value}})=>handleChange(name, value)}
          />
          {item.system_name === '' && <FieldNotEmptyMessage/>}
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row w-full md:justify-between">
        <label htmlFor="type"  className="flex w-full md:w-2/5"> Type* </label>
        <div className="flex flex-col w-full md:3/5 ">
          <SingleDeviceFilter
            value={item.type}
            onChange={handleChange}
          />
         {item.type === '' &&  <FieldNotEmptyMessage/>}
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row w-full md:justify-between">
      <label htmlFor="hdd_capacity"  className="flex w-full md:w-2/5"> HDD Capacity (Gb)* </label>
      <div className="flex flex-col w-full md:3/5 ">
        <input 
          type="number" 
          min={0}
          id="hdd_capacity"
          name="hdd_capacity"
          value={item.hdd_capacity || ''}
          placeholder="HDD Capacity" 
          className="flex w-full p-1 pl-2 border border-gray-300 rounded text-lg focus:border-gray-200  focus:outline-none" 
          onChange={({target: {name, value}})=>handleChange(name, value)}
        />
        {item.hdd_capacity === '' &&  <FieldNotEmptyMessage/>}
      </div>
      </div>
      <div className="relative flex w-full space-x-3 justify-end">
          <button 
            disabled = {!canSubmit}
            type="button" 
            className="bg-gray-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-600 transition duration-200 each-in-out disabled:opacity-50"
            onClick={handleSave}
          >
            Save
          </button>
          <button 
            type="button" 
            className="bg-white text-gray-400 px-6 py-2 border rounded border-gray-400 font-medium mx-3 hover:text-gray-600 hover:border-gray-600 transition duration-200 each-in-ou"
            onClick={handleCancel}
          >
            Cancel
          </button>
      </div>
      
    </div>
  );
};

export default DeviceForm;