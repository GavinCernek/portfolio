
import React from 'react';
import './Home.css';
import chicagoImage from '../../images/chicago-Image.png';
import spillItImage from "../../images/spillIt-Image.png";
import weatherlyImage from "../../images/weatherly-Image.png";
import blockbusterImage from '../../images/blockbuster-Image.png';
import Project from "../Project/Project";

const Home = () => {

  const spillItDescription = (
    `Spill It is a full stack social media app that utilizes the MERN stack to create a RESTful API where users can 
    sign up to “spill” whatever is on their mind. The app allows users to perform a multitude of actions such as creating 
    accounts and logging in, making new posts, a commenting system, and more. React is used to serve the client-side of the 
    app where users, posts, and comments are stored in state variables in order to provide a fast and responsive view. 
    There are several different components that make up the frontend which provide the markup and logic for many of the actions 
    a user can make while using the app. The Node.js server uses multiple different npm packages such as Express and Mongoose to 
    create the routes and store/return the data required for the app to function. User authentication and authorization were fully 
    implemented into the app by using a combination of JSON Web Tokens and HTTP cookies to protect user data. 
    Bcrypt was also implemented to hash passwords to further protect sensitive user data.`
  );

  const spillItDifficulties = (
    `A project of this size certainly came with an equally large amount of problems. Making a commenting system was an 
    integral part of the app since I wanted it to be interactive and fun to discuss posts or add opinions of all kinds. 
    However, this meant that adding comments to each post was going to require a nested array that would be stored along with 
    the post. Accessing this array and pushing new comments into it proved to be difficult and, even worse, extracting the 
    comment’s unique id to track actions such as liking and unliking. Another difficulty was implementing the JSON Web Tokens 
    and HTTP cookies to protect user data and persist login sessions. Keeping track of them was a lot more complex than I 
    originally thought and knowing where to place them in my server responses. One last problem that was hard to navigate was 
    making sure only the correct user could access powerful requests such as deleting or editing a post.`
  );

  const spillItSolutions = (
    `Solving these difficulties was simultaneously the most stressful and most rewarding part of the development process. 
    Seeing the app finally do what I wanted was something that kept me going with enthusiasm and made me want to sit and code 
    all day long. I solved the commenting issue by utilizing MongoDB’s operators such as $push to push the comment into the array 
    and then used an identifier to increment the comment’s likes. I also added an array to keep track of the users who liked that 
    specific comment in order to determine if they had already liked the comment before or not. For the user authentication problem, 
    I used JSON Web Tokens to create an access token once the user successfully logged in. A refresh token is also created and 
    stored in an HTTP cookie that is sent back to the client along with the access token. These are sent to the server whenever a 
    user accesses a protected route to verify their identity. If the user refreshes the page, the refresh token is read to issue 
    a new access token to the user to persist their session. Lastly, the access token was also used to help solve the final 
    problem by having the server return responses that verified if the user was the author of a post in order to determine if 
    edit and delete functionality should be displayed or not.`
  );

  const weatherlyDescription = (
    `Weatherly is a basic HTML, CSS, and JavaScript application that employs the help of OpenWeather’s Current Weather API 
    to fetch weather data based on location and display it to the user. The project was designed to be responsive so it could 
    be viewed on multiple different devices such as phones, tablets, and desktops. The user must simply enter their desired 
    location into the search bar and then jQuery and JavaScript are used to make the fetch request to the API to return the user 
    their weather data and display it. The response includes some interesting information besides just temperature such as 
    wind speed, highs and lows, and a weather icon.`
  );

  const weatherlyDifficulties = (
    `Some difficulties while making this project included making the responsive properties in order for weatherly to work on 
    smaller and older phones. The search bar and search button would be squished together and practically unclickable and made 
    for an ugly user experience. The containers for the response also needed to be adjusted to fit within the smaller screens 
    while not looking too cramped. Another problem was emptying out the container when the user wanted to make another search. 
    The container would become filled with all the requests the user made and become bloated.`
  );

  const weatherlySolutions = (
    `Much of solving the responsive issue was trial and error. This meant testing out many different values for padding, 
    font size, margins, and display styles until I was satisfied with how it looked. Also, deciding what pixel size to use for 
    the media tags was decided by using iPhone screen resolutions as a reference. To fix my container problem, I decided to just 
    set the html inside to be empty while the next response was being fetched. This allowed the container to only display the 
    weather data for the most recent request.`
  );

  const blockbusterDescription = (
    `This project is a mobile game that was designed using Corona SDK and the Lua language. 
    It's based off of the many popular "ball and paddle" games such as Brick Breaker. The game
    was built using Corona SDK's physics engine to simulate the many different types of collisions 
    that can occur in the game such as ball-paddle, ball-block, ball-boundary, and, on the second level,
    ball-ball. These collision events are what trigger a block being removed or damaged as well as checking 
    to make sure the player hasn't dropped the ball and lost the game. Each block has a different property based
    on its color within the game. A red block means that it will break after the first hit. A blue block is a 
    block that can take two hits so after the first hit, it turns into a red block. The yellow block swaps the 
    color of all red and blue blocks. Gray blocks are indestructible and are solely for getting in the way of the
    ball. Lastly, the green block spwans a second ball that must also be kept from falling to double the difficulty.
    I also utilized Corona SDK's composer library in order to manage the different scenes and levels within the game.
    It's used to create and destroy all the objects required for each level as well as the title and end screens, and
    is what is used to move the player from scene to scene when they lose or win.`
  );

  const blockbusterDifficulties = (
    `There were a lot of difficulties that I faced while creating this project, but the hardest problems were 
    getting all the objects from the previous scene deleted before moving onto the next and having each block's 
    color be randomized so that each time a level is loaded, the blocks are different. The objects from the 
    previous scene would still be on screen but their physics bodies would still remain so the ball would 
    seem to bounce and collide with invisible objects. Also, when a player had lost a level and restarted,
    sometimes the block's previous color properties were being used rather than the new color 
    that it was supposed to be.`
  );

  const blockbusterSolutions = (
    `For the problem where the previous level's objects were appearing in the next level, I needed to reorganize
    my code and make sure I had good comments to keep myself from getting confused. I went back to where I was 
    creating my objects and made sure that there was no mistakes with how they were being assigned their variables
    and positions. Then, I went to where the composer is supposed to bring in the objects for the current scene
    which is the scene:show function. This function is called each time a scene is about to come on screen.
    Previously, I had been using the scene:create function which is only called once at the creation of a scene so
    if the level was restarted, the objects would not be created again. Lastly, I went to the scene:hide function
    which is called when a scene is about to go off screen. I made sure all varaibles were reset and that I was
    properly destroying all of the objects that I wanted gone. Afterwards, I realized this had also helped me solve
    the problem I was having with assigning the color properties to each block, fixing both my problems in one solution.`
  );

  const spillItTechnologies = ["Node.js", "MongoDB", "Express", "React", "npm", "HTML", "CSS", "JavaScript"];
  const weatherlyTechnologies = ["jQuery", "HTML", "CSS", "JavaScript"];
  const blockbusterTechnologies = ["Lua", "Corona SDK"];

  return (
    <div className="home">
      <img src={chicagoImage} className="home_background_img" alt="Chicago"></img>

      <div className="home_projects">
        <div className="home_projects_header">
          <h1>PROJECTS</h1>
        </div>

        <Project projectName={"Spill It"} projectImage={spillItImage} projectURL={"https://github.com/GavinCernek/spill-it"} 
                  projectDescription={spillItDescription} projectDifficulties={spillItDifficulties} 
                  projectSolutions={spillItSolutions} projectTechnologies={spillItTechnologies} isLive={true}
                  liveLink={"https://spill-it.herokuapp.com/"}
        />

        <Project projectName={"Weatherly"} projectImage={weatherlyImage} projectURL={"https://github.com/GavinCernek/weatherly"} 
                  projectDescription={weatherlyDescription} projectDifficulties={weatherlyDifficulties} 
                  projectSolutions={weatherlySolutions} projectTechnologies={weatherlyTechnologies} isLive={true}
                  liveLink={"https://gavincernek.github.io/weatherly/"}
        />

        <Project projectName={"Block Buster"} projectImage={blockbusterImage} projectURL={"https://github.com/GavinCernek/block-buster"} 
                  projectDescription={blockbusterDescription} projectDifficulties={blockbusterDifficulties} 
                  projectSolutions={blockbusterSolutions} projectTechnologies={blockbusterTechnologies} 
        />
      </div>
    </div>
  );
};

export default Home;