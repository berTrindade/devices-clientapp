# Devices-clientapp

Front end application for code challenge

Front end application build on [React](https://reactjs.com). and styled using [TailwindCSS](https://tailwindcss.com/).

Features include:

- The main view is a dashboard where user can see all devices listed.
- Styled using  [TailwindCSS](https://tailwindcss.com/)
- Filters using [React-Select](https://react-select.com/upgrade-guide)
- Multiple device type filter
- Sorting and Acendent and Descendent
- Server application used: [devicesTask_serverApp](https://github.com/NinjaRMM/devicesTask_serverApp)

# Installation and usage

1. Clone or download the repo

```
git clone https://github.com/emdavidmoreno/devices-clientapp
```
2. Install dependencies: 

```
npm install or yarn install
```
3. Set up environment variables

```
cp .env.local.example .env.local
```
Then set your backend server URL
```
REACT_APP_API_URL = 'http://your-backend-server-url'
```

4. Start the application
```
npm start
```
