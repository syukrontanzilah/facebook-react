import React from 'react'
import './SidebarRow.css'
import {Avatar, IconButton} from '@material-ui/core'


function SidebarRow({title, src, Icon}) {
    return (
        <div className="sidebarRow">
        {src && <Avatar src={src}/>} 
        {Icon && <Icon/>}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
