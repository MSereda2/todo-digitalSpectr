// Packages
import React from 'react';

// Style
import style from './app.module.scss';

// Components
import Top from './components/top/top.component';
import ToDo from './components/to-do/to-do.component';

function App() {
  return (
   <div className={style.container}>
     <div className={style.app}>
        <Top />
        <ToDo />
     </div>
   </div>
  )
}

export default App;
