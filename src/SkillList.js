import React from 'react'
import Skill from './Skill'

export default function SkillList({skills}) {


    return (
      <div>
         <div className="card-grid">
             {skills.map(skill =>  {
        //   console.log(skill);
        return <Skill skill={skill} key={skill.id} />
      })}
    </div>

      </div>
    )
}
