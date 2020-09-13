import React from 'react'
import './Feed.css'
import StoryReal from './StoryReal'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReal/>
            <MessageSender/>

            <Post
            profilePic= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqW_1JBO9VnbZOUoBBJ4NFp0_bnRv7K1zB22OzGxn1Rm5Ls70f4RMzKWNOVPi9UjO7gN9sBXi4DAnnvC1m1N2fdt2LUyCsG2POzA&usqp=CAU&ec=45699844"
            message ="Hallo Assalamualaiku sobat facebook!"
            timestamp="1 menit yang lalu"
            username= "Alwi Hamid"
            image="https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg"
            />

            <Post
            profilePic= "https://i.pinimg.com/originals/2b/cf/f7/2bcff706c59ae76ed81da7377564b72d.jpg"
            message ="I believe i can fly :D :D :D"
            timestamp="24 menit yang lalu"
            username= "Shadiqah sidqia"
            image="https://cdn.elearningindustry.com/wp-content/uploads/2018/05/how-animation-is-helpful-in-enhancing-enterprise-learning-1024x574.jpg"
            />
          
          <Post
            profilePic= "https://i.pinimg.com/originals/06/71/d4/0671d4865797250e322d658aebbe4dea.jpg"
            message ="Do you want to master React JS & learn how to make an income with your new skills? Click here & enroll NOW: https://facebook.com..."
            timestamp="24 menit yang lalu"
            username= "Zulaikha Tahir"
            image="https://www.picknlearn.net/wp-content/uploads/2019/10/e-learning.jpg"
            />


            {/*  */}
        </div>
    )
}

export default Feed
