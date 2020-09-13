import React from 'react'
import './Rightbar.css'
import {Avatar} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';

function Rightbar() {
    return (
        <div className="rightbar">
          
            <div className="sponsor">
                  <p>Bersponsor</p>
                     <div className="rightbar__sponsor">
            <img src="https://www.labnol.org/static/41a2a93360aaf78e1c456154c06d0aa6/4dc5d/udemy-user.png"/>
            <div className="rightbar__sponsorInfo">
            <p>React Native Course</p>
            <p className="email__info">udemy.com</p>
            </div>
            </div>
            <div className="rightbar__sponsor">
            <img src="https://lelogama.go-jek.com/post_featured_image/gojek-promo-1.jpg"/>
            <div className="rightbar__sponsorInfo">
            <p>Promo Gojek terbaru bikin heppi!!</p>
            <p className="email__info">aplikasi.com</p>
            </div>
            </div>
            </div>
         
         <div className="halaman">
             <div className="halaman__header">
                  <p>Halaman Anda</p>
                  <MoreHorizIcon/>
             </div>
       
        <div className="halaman__list">
        <Avatar style={{width:30, height:30}} src="https://lh3.googleusercontent.com/VyIvp4Wl7DOFnIcsxrIw0pq43zUd8Yb4n96DpDRDrSsBkxIodDMMDfQk4XunNT5oDJ7Z"/>
        <p>Udemy Course</p>
        </div>
        <div className="halaman__list">
        <Avatar style={{width:30, height:30}} src="https://pbs.twimg.com/profile_images/873441734209945600/5rAAvbGJ_400x400.jpg"/>
        <p>Course-Net Indonesia</p>
        </div>
         </div>

         <div className="sub__menu">
             <NotificationsOutlinedIcon/>
             <p>9 Notifications</p>
         </div>
         <div className="sub__menu">
            <PublicOutlinedIcon/>
             <p>Make Promotion</p>
         </div>
           


        </div>
    )
}

export default Rightbar
