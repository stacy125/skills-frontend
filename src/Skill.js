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
        <div className="inner-card">
                <h1 key={skill.id} className="flash front" >
                    {skill.name}
                </h1>
            </div>
            <div key={skill.id} className="flash back" >
                    <p>Description:  {skill.description}</p>
                    <p>Benefits:  {skill.benefits}</p>
            </div>
        </div>

    )
}

export default Skill
