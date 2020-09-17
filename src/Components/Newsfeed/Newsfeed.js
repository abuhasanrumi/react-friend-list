import React, { useState } from 'react';
import Friend from '../Friend/Friend';
import './Newsfeed.css'
import fakeData from '../../FakeData/index'
import Team from '../Team/Team';

const Newsfeed = () => {
    const data = fakeData.slice(0, 15)
    const [friend, setFriend] = useState(data)

    const [team, setTeam] = useState([])

    const handleClick = (friend) => {
        const newTeam = [...team, friend]
        setTeam(newTeam)
    }

    console.log(friend.salary)
    return (
        <div style={{display: "flex"}}>

            <div className="friends-area">
                <h1 style={{textAlign: 'center'}}>This is newsfeed</h1>
                {
                    friend.map(fnd => <Friend handleClick={handleClick} friend={fnd}></Friend>)
                }
            </div>


            <div className="counter-area">
                <h1>This is counter</h1>
                <Team team={team}></Team>
                
            </div>

        </div>
        
    );
};

export default Newsfeed;