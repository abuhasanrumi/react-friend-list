import React from 'react';
import './Friend.css'

const Friend = (props) => {

    const {picture, gender, name, email, phone, salary} = props.friend.user;
    const handleClick = props.handleClick;
    return (
        <div className="section">
            <div className="container">
                <div className="profile-picture">
                    <img src={picture.large} alt=""/>
                </div>
                <div className="description">
                    <h2 style={{margin: '0'}}>{name.first} {name.last}</h2>
                    <p>Gender: {gender}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <h4>Salary: {salary}</h4>
                    <button onClick={ () => handleClick(props.friend.user)} className="friendButton">Add to team</button>
                </div>
            </div>
        </div>
    );
};

export default Friend;