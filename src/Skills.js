import React from 'react'
import { useState, useEffect } from 'react'

function Skills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("https://skillsbackend.herokuapp.com/skills")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSkills(data);
        });
    }, []);
    
    if(!skills){
        return null;
    }

    return (
        <div>
        <h1 className="header">MY SKILLS</h1>
        <div className="container">
                <div className="skill">{skills.map((skill, index) => (
                    <div key={index} >
                    <h2>Skill:  {skill.name}</h2>
                    <div className="descript">Description: </div><div>{skill.description}</div>
                    <div className="benefits">Benefits: </div><div> {skill.benefits}</div>
                    </div>
                ))}</div>
        </div>
        </div>
    )
}

export default Skills
