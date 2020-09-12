import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital' 
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import{ ExpandMoreOutlined} from '@material-ui/icons'

const Sidebar=(props)=> {
    return (
        <div className="sidebar">
            <SidebarRow src="https://cdn.idntimes.com/content-images/community/2019/10/1570055614033-instasave-b58e06413ecd31b1e0932e6374245076.jpg" title="Azmi Furqon Alaydrus"/>
           <SidebarRow 
           title="Covid-19 Information Center"
           Icon ={LocalHospitalIcon}
           />
           <SidebarRow title="Pages"
           Icon ={EmojiFlagsIcon}  />

           <SidebarRow title="Friends" 
           Icon ={PeopleIcon} />
           <SidebarRow title="Messenger" 
           Icon ={ChatIcon} />
           <SidebarRow title="Marketplalce" 
           Icon ={StoreFrontIcon} />
           <SidebarRow title="Video"
           Icon = {VideoLibraryIcon}  />
           <SidebarRow title="Marketplalce" 
           Icon ={ExpandMoreOutlined} />


         

        </div>
    )
}

export default Sidebar