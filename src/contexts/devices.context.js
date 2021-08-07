import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { INITIAL_DEVICE_DATA } from "../constants";

const BASE_URL = process.env.REACT_APP_API_URL;

const DeviceContext = createContext();

export const DeviceProvider = ({children}) => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, updateSelectedDevice] = useState(INITIAL_DEVICE_DATA);
  
  useEffect(()=>{
    fetchDevices();
  }, [])

  const fetchDevices = async () => {
    try {
      const {data } = await axios.get(BASE_URL);
      setDevices(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const addDevice = async () => {
    try {
      await axios.post(BASE_URL, {
        ...selectedDevice
      });
      fetchDevices();
      
    } catch (error) {
      console.log(error)
    }

  }

  const updateDevice = async () => {
    try {
      await axios.put(BASE_URL + selectedDevice.id, {
        ...selectedDevice
      });
      fetchDevices();
      
    } catch (error) {
      console.log(error)
    }
  }

  const deleteDevice = async () => {
    try {
      await axios.delete(BASE_URL + selectedDevice.id, {
        id: selectedDevice.id
      });
      fetchDevices();
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <DeviceContext.Provider value={{
      devices,
      selectedDevice,
      updateSelectedDevice,
      setDevices,
      addDevice,
      updateDevice,
      deleteDevice
    }}
    >
      {children}
    </DeviceContext.Provider>
  )
}

export const useDevices = () => useContext(DeviceContext);