export const DEVICES_OPTIONS = {
  WINDOWS_WORKSTATION: 'WINDOWS_WORKSTATION',
  WINDOWS_SERVER: 'WINDOWS_SERVER',
  MAC: 'MAC',
};

export const SORTING_OPTIONS = [
  {label: 'System Name', value: 'system_name'},
  {label: 'HDD Capacity', value: 'hdd_capacity'},
  {label: 'type', value: 'type'},
];
export const DIRECTION = {
  SORT_DIRECTION_ASC: 'ASC',
  SORT_DIRECTION_DESC: 'DESC',
};

export const INITIAL_DEVICE_DATA = {
  id: '',
  system_name: '',
  type: '',
  hdd_capacity: '0'
}
