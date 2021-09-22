import React from 'react'
import { useState } from 'react'

function Skill({ skill }) {
    const [flip, setFlip] = useState(false)


    // console.log(skill);


    return (
        <div key={skill.id}
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
                <div key={skill.id} className="flash front" >
                    <h1 className="skill">{skill.name}</h1>
                </div>
                <div key={skill.id} className="flash back" >
                    <p className="des-para">Description:  {skill.description}</p>
                    <p className="ben-para">Benefits:  {skill.benefits}</p>
                </div>
        </div>

    )
}

export default Skill
