import SkillList from "./SkillList"
import { useState, useEffect } from 'react'
import './App.css';


function App() {

  const [skills, setSkills] = useState([]);


  useEffect(() => {
    fetch("https://skillsbackend.herokuapp.com/skills")
      .then(response => response.json())
      .then(skills => {
        // console.log(skills);
        setSkills(skills);
      });
  }, []);

  return (
    <div className="App">
      <div>
      <h1 className="header">MY TECH SKILLS</h1>
      </div>
        <div className="container">
          <SkillList skills={skills} />
        </div>
    </div>
  );
}

export default App;

