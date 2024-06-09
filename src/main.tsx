import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppContainer from "./AppContainer";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
)
