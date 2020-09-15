import React from 'react'
import './Header.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StoreFrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleOutlined'
import {Avatar, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

// let name ="Azmi Furqon Alaydrus"

function Header() {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="header">
{/* header left */}
            <div className="header__left">
                <img
                src="https://jateng.kemenag.go.id/assets/icon/fb.png"
                alt=""
                />
             <div className="header__input">
            <SearchRoundedIcon className="search__icon"/>
            <input 
            placeholder="Search Facebook"
            type="text" />
             </div>
            </div>

{/* header middle */}
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StoreFrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

{/* header right */}
                <div className="header__right">
                <div className="header__info">
                <Avatar style={{width:30, height:30}} 

                // src= "https://cdn.idntimes.com/content-images/community/2019/10/1570055614033-instasave-b58e06413ecd31b1e0932e6374245076.jpg"
                src={user.photoURL}
                
                />
                {/* <h4 >{name.length < 15 ? `${name}`: `${name.substring(0,10)}...`}</h4> */}
    <h4>{user.displayName.length < 15 ? `${user.displayName}`: `${user.displayName.substring(0,7)}...`}</h4>
                
                </div>
                <IconButton>
                <AddIcon />
                </IconButton>
                <IconButton>
                <ForumIcon />
                </IconButton>
                <IconButton>
                <NotificationsActiveIcon  />
                </IconButton>
                <IconButton>
                <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Header
