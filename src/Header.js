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

let name ="Azmi Furqon Alaydrus"

function Header() {
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
                <Avatar />
                <h4 >{name.length < 15 ? `${name}`: `${name.substring(0,15)}...`}</h4>
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
