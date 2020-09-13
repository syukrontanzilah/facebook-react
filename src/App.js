import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Rightbar from './Rightbar'

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

<Rightbar/>
</div>
    </div>
  )
}

export default App