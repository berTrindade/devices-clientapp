import { useMemo, useState } from "react";
import Device from "./component/Device";
import DeviceForm from "./component/DeviceForm";
import Modal from "./component/Modal";
import {useDevices} from './contexts/devices.context';
import {useFilter} from './contexts/filter.context';
import { DIRECTION, INITIAL_DEVICE_DATA } from './constants';
import TopBar from "./component/TopBar";
import FilterForm from "./component/filters/FilterForm";

function App() {
  const {devices, selectedDevice, updateSelectedDevice, updateDevice, deleteDevice, addDevice} = useDevices();
  const [showForm, setShowForm] = useState(false);
  const {sortBy = '', deviceTypes = [], direction = DIRECTION.SORT_DIRECTION_ASC} = useFilter();

  const filteredDevices = useMemo(()=> devices.filter(
    device =>deviceTypes.length === 0 ? true : deviceTypes.includes(device.type)
    ).sort((a, b)=> {
      if(sortBy === '') return 0; 
      switch (sortBy) {
        case 'hdd_capacity':
          return direction === DIRECTION.SORT_DIRECTION_ASC ? a.hdd_capacity - b.hdd_capacity: b.hdd_capacity - a.hdd_capacity
      
        default:
          if(a[sortBy] < b[sortBy]) { 
            return direction === DIRECTION.SORT_DIRECTION_ASC ? -1 : 1; 
          }
          if(a[sortBy] > b[sortBy]) { 
            return  direction === DIRECTION.SORT_DIRECTION_ASC ? 1 : -1; 
          }
          return 0;
          
      }
    }),[sortBy, deviceTypes, devices, direction]) 

  const handleChange = (name, value) => {
    updateSelectedDevice({
      ...selectedDevice,
      [name]: value,
    })
  }
  const handleCancelForm = () => {
    setShowForm(false);
    updateSelectedDevice(INITIAL_DEVICE_DATA);
  }


  const handleAddDevice = () => {
    updateSelectedDevice(INITIAL_DEVICE_DATA);
    setShowForm(true);
  }

  const handleEditDevice = (device) => {
    updateSelectedDevice(device);
    setShowForm(true);
  }

  const handleSaveDevice = () => {
    if(
      selectedDevice.system_name === '' ||
      selectedDevice.type === '' ||
      selectedDevice.hdd_capacity === ''
    ) {
        return;
      }
    if(selectedDevice.id) {
      // edit device
      updateDevice();
    } else {
      // Add new device
      addDevice();
    }
    handleCancelForm();

  }

  const handleDeleteDevice = (device) => {
    updateSelectedDevice(device);
    deleteDevice();
  }
  

  return (
    <div className="flex w-screen h-screen">
      <TopBar />
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4 pt-8 mt-16 mb-8 h-auto">
        <div className="flex right-0 w-full justify-end">
          <button 
          type="button" 
          className="bg-gray-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-600 transition duration-200 each-in-out"
          onClick={handleAddDevice}
          > Add device</button>
        </div>
        <Modal 
          isOpen={showForm}
          setIsOpen={setShowForm}
          title={selectedDevice.id? 'Edit device' : 'Add device'}
        >
          <DeviceForm
            item={selectedDevice}
            handleChange={handleChange}
            handleSave={handleSaveDevice}
            handleCancel={handleCancelForm}
          />
        </Modal>
        <FilterForm />
        {filteredDevices.map(item => (
          <Device 
            key={item.id}
            item={item} 
            handleEdit={handleEditDevice}
            handleRemove={handleDeleteDevice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
