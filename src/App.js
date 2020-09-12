import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'

const App = () => {
  return(
    <div className="app">

{/* HEADER */}
<Header/>
{/* app body */}
<div className="app__body">

  
{/* sidebar */}
<Sidebar/>
{/* feed */}
<Feed/>

{/* widget */}


</div>



    </div>
  )
}

export default App