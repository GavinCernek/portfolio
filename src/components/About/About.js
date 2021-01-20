
import React from 'react';

import AboutItem from "../AboutItem/AboutItem";
import './About.css';
import education_image from '../../images/northCentral-Image.jpg';
import athletic_image from '../../images/championshipTrophy-Image.jpg';
import hobby_image from '../../images/mustang-Image.jpg';

const About = () => {

  const educationText = (
    `I graduated from North Central College in Naperville, IL in May of 2020 with a B.S. in Computer Science. 
    While I attended North Central, I was on an Honors Scholarship and achieved multiple Dean's List awards.`
  );

  const athleticsText = (
    `I was on the track and field team all four years and was a team captain my Junior and Senior seasons. 
    While on the team, we achieved two national championship titles during the 2017 and 2019 Indoor seasons. 
    I also obtained an All-American award for the 4x400m relay by placing 7th in the nation.`
  );

  const hobbiesText = (
    `In my free time, I enjoy being outdoors with friends and doing activities like running, lifting, or playing basketball. 
    I also am constantly working on one of my many hobbies such as working on my car, building PCs, 
    and learning how to make my own games.`
  );

  return (
    <div className="about">
      <div className="about_header">
        <h1>About Me</h1>
      </div>

      <AboutItem header={"EDUCATION"} image={education_image} text={educationText} />
      <AboutItem header={"ATHLETICS and LEADERSHIP"} image={athletic_image} text={athleticsText} />
      <AboutItem header={"HOBBIES and INTERESTS"} image={hobby_image} text={hobbiesText} />

    </div>
  );
};

export default About;
