import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Icon from '@mui/material/Icon';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import Div from "./Componentes/Div";
import DisabledAccordion from "./Componentes/Acordeon";
import Carrusel  from './Componentes/Carrusel.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <AccessAlarmsIcon>
    </AccessAlarmsIcon>
    
    <Div></Div>

    <DisabledAccordion></DisabledAccordion>

    <div><Carrusel></Carrusel></div>

    </>
  )
}

export default App
