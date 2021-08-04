import { useMemo, useState } from "react";
import Device from "./component/Device";
import DeviceFilter from "./component/DeviceFilter";
import DeviceForm from "./component/DeviceForm";
import Modal from "./component/Modal";
import {useDevices} from './contexts/devices.context';
import {useFilter} from './contexts/filter.context';
import {SORT_DIRECTION_ASC} from './constants';
import TopBar from "./component/TopBar";

const INITIAL_FORM_DATA = {
  "id": "",
  "system_name": "",
  "type": "",
  "hdd_capacity": "0"
}
 

function App() {
  const {devices, updateDevice, deleteDevice, addDevice} = useDevices();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [showForm, setShowForm] = useState(false);
  const {sortBy = '', deviceTypes = [], direction = SORT_DIRECTION_ASC} = useFilter();

  const filteredDevices = useMemo(()=> devices.filter(
    device =>deviceTypes.length === 0 ? true : deviceTypes.includes(device.type)
    ).sort((a, b)=> {
      if(sortBy === '') return 0; 
      switch (sortBy) {
        case 'hdd_capacity':
          return direction === SORT_DIRECTION_ASC ? a.hdd_capacity - b.hdd_capacity: b.hdd_capacity - a.hdd_capacity
      
        default:
          if(a[sortBy] < b[sortBy]) { 
            return direction === SORT_DIRECTION_ASC ? -1 : 1; 
          }
          if(a[sortBy] > b[sortBy]) { 
            return  direction === SORT_DIRECTION_ASC ? 1 : -1; 
          }
          return 0;
          
      }
    }),[sortBy, deviceTypes, devices, direction]) 

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleCancelForm = () => {
    setShowForm(false);
    setFormData(INITIAL_FORM_DATA);
  }


  const handleAddDevice = () => {
    setFormData(INITIAL_FORM_DATA);
    setShowForm(true);
  }

  const handleEditDevice = (device) => {
    setFormData(device);
    setShowForm(true);
  }

  const handleSaveDevice = () => {
    if(formData.id) {
      // edit device
      updateDevice(formData);
    } else {
      addDevice(formData);
      // Add new device
    }
    handleCancelForm();

  }

  const handleDeleteDevice = (device) => {
    deleteDevice(device);
  }
  

  return (
    <div className="flex w-screen h-screen">
      <TopBar />
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4 pt-8 mt-16">
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
          title={formData.id? 'Edit device' : 'Add device'}
        >
          <DeviceForm
            item={formData}
            handleChange={handleChange}
            handleSave={handleSaveDevice}
            handleCancel={handleCancelForm}
          />
        </Modal>
        <DeviceFilter />
        {filteredDevices.map(item => (
          <Device 
            key={item.id}
            item={item} 
            handleEdit={handleEditDevice}
            handleRemove={handleDeleteDevice}
            handleSave={handleSaveDevice} />
        ))}
      </div>
    </div>
  );
}

export default App;
