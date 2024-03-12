import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Icon from '@mui/material/Icon';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Div from "./Componentes/Div";
import DisabledAccordion from "./Componentes/Acordeon"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

    <AccessAlarmsIcon>
    </AccessAlarmsIcon>
    
    <Div></Div>

    <DisabledAccordion></DisabledAccordion>


    </>
  )
}

export default App
