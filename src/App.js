import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Rightbar from './Rightbar'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Login from './Login'
import { useStateValue } from './StateProvider'

const App = () => {
  const [{user}, dispatch] = useStateValue()
  return(
<div className="app">
  {!user ? (
<Login/>
  ): (
    <>
<Header/>
<div className="app__body">
<Sidebar/>
<Feed/>
<Rightbar/>
</div>
</>
  )
  }

    </div>

  )
}

export default App