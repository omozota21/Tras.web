import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Icon from '@mui/material/Icon';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { PrimerComponente } from './Componentes/PrimerComponente';
import { SegundoComponente } from './Componentes/SegundoComponente';



function App() {


  return (
    <>
      <div>
          <img></img>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim natus non fuga ratione nobis expedita dolorem alias tempora, nemo dignissimos exercitationem quo saepe? Itaque soluta dolor, exercitationem eligendi repudiandae reprehenderit?</p>
          <PrimerComponente></PrimerComponente>
          <SegundoComponente></SegundoComponente>
      </div>

    </>
  )

  
}


export default App;
