import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideoCamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl]= useState("")
    const handleSubmit = (e) => {
        console.log(input)
        console.log(imageUrl)
        e.preventDefault()
        setInput("");
        setImageUrl("")
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar/>
            <form>
                <input 
                value={input}
                onChange={(e)=> setInput(e.target.value)}
               className="messageSender__input"
                placeholder="What's on your mind ?"/>
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
