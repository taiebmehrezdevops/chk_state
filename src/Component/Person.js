import { useState, useEffect } from "react";
import { Component } from "react";


  const Person = () => {
    const [profile, setProfile] = useState({Name:"Jhon",Bio:"test",Profession:"Developper"});
    const [Imgsrc, SetImgsrc] = useState('./Jhon-Doe.jpg');
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

  
    return( 
      <div><p>{profile.Name} { profile.Bio} {profile.Profession}</p>
      <img src={Imgsrc} alt="Jhon"/>
      <p>{seconds}</p>
      </div>
    );
  };
  export default Person;