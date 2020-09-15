import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideoCamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase'


function MessageSender() {
    const [{user}, dispatch]= useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl]= useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

db.collection("posts").add({
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    profilePic: user.photoURL,
    username: user.displayName,
    image: imageUrl,
})

        setInput("");
        setImageUrl("")
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar 
            src= "https://cdn.idntimes.com/content-images/community/2019/10/1570055614033-instasave-b58e06413ecd31b1e0932e6374245076.jpg" 
            src = {user.photoURL}
            />
            <form>
                <input 
                value={input}
                onChange={(e)=> setInput(e.target.value)}
               className="messageSender__input"
                placeholder={`What's on your mind ${user.displayName.length < 15 ? `${user.displayName}`: `${user.displayName.substring(0,7)}...`} ?`}/>
                <input
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder="image URL (Optional)"
                />
                <button type="submit" onClick={handleSubmit}>
                    Hidden Submit
                </button>

            </form>
            </div>

            {/* sender options */}
            <div className="messageSender__bottom">

            <div className="messageSender__option">
            <VideoCamIcon style={{color:'red'}}/>
            <h4>Live Video</h4>
            </div>

            <div className="messageSender__option">
            <PhotoLibraryIcon style={{color:'green'}}/>
            <h4>Photo/Video</h4>
            </div>

            <div className="messageSender__option">
            <InsertEmoticonIcon style={{color:'orange'}}/>
            <h4>Feeling/Activity</h4>
            </div>

            </div>
        </div>
    )
}

export default MessageSender
