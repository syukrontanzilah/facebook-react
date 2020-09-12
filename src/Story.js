import React from 'react'
import './Story.css'
import{Avatar} from '@material-ui/core'

function Story({image, profileSrc, title }) {
    return (
        <div style={{backgroundImage:`url(${image})`}} className="story">
            <Avatar className="story__avatar" src={profileSrc}/>
    <p>{title}</p>
        </div>
    )
}

export default Story
