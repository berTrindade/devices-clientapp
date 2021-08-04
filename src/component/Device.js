import {FaEdit, FaRem, FaTrashAlt} from 'react-icons/fa'
const Device = ({
  item, 
  handleEdit,
  handleRemove,
}) => {
  return (
    <div className="flex w-full rounded-xl bg-gray-50 border border-gray-150 py-2 my-1 px-4 justify-between">
      <div className="flex w-full flex-col">
        <div className="text-lg text-gray-700 uppercase w-auto">{item.system_name}</div>
        <div className="text-md font-bold text-blue-700 w-auto">{item.type}</div>
        <div className="text-sm font-bold text-gray-700 w-auto">{item.hdd_capacity} Gb</div>
      </div>
      <div className="flex items-center w-20">
        <button
          className="inline-block px-2 py-2 text-xs leading-6 text-center text-gray-600 underline transition bg-transparent rounded ripple hover:text-blue-700 focus:outline-none"
          onClick={()=>handleEdit(item)}
        >
          <FaEdit
            className="h-6 w-8 fill-current"/>
        </button> 
        <button
          className="inline-block px-2 py-2 text-xs leading-6 text-center text-red-600 underline  transition bg-transparent rounded ripple hover:text-red-700 focus:outline-none"
          onClick={()=> handleRemove(item)}
        >
          <FaTrashAlt className="h-6 w-8 fill-current" />
        </button> 
      </div>
    </div>
  );
};

export default Device;