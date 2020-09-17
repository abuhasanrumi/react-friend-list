import React from 'react';

const Team = (props) => {
    const team = props.team
    

    let totalSalary = 0
    team.map((friend) => {
            totalSalary = totalSalary + friend.salary
    })

    // const totalSalary = team.reduce( (sum, friend) => sum + friend.salary, 0)

    
    return (
        <div>
            <h3>Friends Added: {team.length}</h3>
            
            <h4>Total Salary: {totalSalary}</h4>
        </div>
    );
};

export default Team;