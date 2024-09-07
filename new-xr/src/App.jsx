* {
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter';
}

html, body {
  scroll-behavior: smooth;
  height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
}

/* Navbar styles */
nav {
  background: #ffffff;
  width: 100vw;
  
  z-index: 10;
  top: 0;
  left: 0;
  height: 10vh; /* Navbar height converted */
  padding: 1vh; /* Padding in vh */
  border: white;
  box-shadow: 0 0.5vh 0.25vh -0.25vh gray; /* Optional shadow for better separation */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  height: 100%;
}

.logo {
  width: 5vw;
  height: 8.75vh; /* Converted width and height */
}

.nav-links {
  display: flex;
  align-items: center;
  margin-right: 1.6vw;
}

.nav-links li {
  margin-left: 1vw;
}

.nav-links a {
  color: #000000;
  font-size: 1vw;
  padding: 0.5vw 1vw;
  font-family: 'Inter', sans-serif;
}

.nav-links button {
  background-color: #2C2F5A;
  color: white;
  padding: 0.8vw 2vw;
  border-radius: 2vw;
  font-family: 'Inter', sans-serif;
  border: 0;
  font-size: 1vw;
  cursor: pointer;
}

/* Hamburger styles */
.hamburger {
  font-size: 2.5vw; /* Converted font size */
  display: none;
  cursor: pointer;
  color: black;
  z-index: 11;
  bottom: 0.625vh;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hamburger {
    display: block;
    z-index: 25;
    height: 3.75vh; /* Adjusted height */
  }
  nav {
    background: #ffffff;
    width: 100vw;
    z-index: 10;
    top: 0;
    left: 0;
    height: 6.25vh; /* Adjusted navbar height */
    box-shadow: 0 0.5vh 0.25vh -0.25vh gray;
  }
  .logo {
    width: 5vw;
    height: 5vh;
  }
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 6.25vh;
    right: 0;
    background: #404040;
    width: 100vw;
    height: 22.5vh;
    justify-content: center;
    align-items: flex-start;
    z-index: 20;
  }
  .nav-links a,
  .nav-links button {
    font-size: 2.5vw;
    color: white;
  }
  .nav-links.open {
    display: flex;
    width: 100vw;
    left: 0.125vw;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .hamburger {
    display: block;
    z-index: 25;
    font-size: 3vw;
    height: 4vh; /* Adjusted height for larger tablets */
  }
  nav {
    background: #ffffff;
    width: 100vw;
    z-index: 10;
    top: 0;
    left: 0;
    height: 9vh; /* Slightly larger navbar height */
    box-shadow: 0 0.6vh 0.3vh -0.3vh gray; /* Adjusted shadow */
  }
  .logo {
    width: 7vw;
    height: 7vh; /* Slightly larger logo */
  }
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 7vh;
    right: 0;
    background: #404040;
    width: 100vw;
    height: 25vh; /* Taller nav menu */
    justify-content: center;
    align-items: flex-start;
    z-index: 20;
  }
  .nav-links a,
  .nav-links button {
    font-size: 2vw; /* Adjusted font size */
    color: white;
  }
  .nav-links.open {
    display: flex;
    width: 100vw;
    left: 0.125vw;
  }
}
/* Hackathon image section */
.hackathon-image-section {
  background: white;
  width: 100vw;
  height: 130vh; /* Full viewport height */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}



.upper {
  width:100%;
  height: 99%; /* Adjusted to fit height */
  object-fit: cover;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: -2.5vh;
  transform: translateX(-50%); /* Center the upper image */
}

/* Responsive styling */
@media (max-width: 480px) {
  .hackathon-image-section {
    margin-top: .1vh;
    height: 55vh;
    width:100vw;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
     /* Adjusted section height for small screens */
  }

  .hackathon-image.upper {
    height: 55vh;
    width:100vw;
    object-fit: cover; /* Adjusted height */
  }
}
/* Tablet Breakpoint */
@media (min-width: 481px) and (max-width: 768px) {
  .hackathon-image-section {
    
    height: 65vh; 
    
    background:white;/* Adjusted section height for tablet screens */
  }

  .hackathon-image.lower {
    display: none; /* Keep hidden on tablets */
  }

  .hackathon-image.upper {
    width:100%;
    height:65vh; /* Adjusted height for tablets */
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .hackathon-image-section {
    height: 70vh; /* Slightly taller for larger tablets */
    background: white;
  }

  .hackathon-image.lower {
    display: none; /* Still hidden on larger tablets */
  }

  .hackathon-image.upper {
    width: 100%;
    height: 70vh; /* Adjusted height for larger tablets */
  }
}

/* General page container styles */
.container {
  display: flex;
  padding: 3vh 5vw;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

/* Content box styling */
.content-box {
  border-radius: 1vw; /* Border radius converted */
  padding: 1vw; /* Padding converted */
  max-width: 50vw;
  text-align: left;
  margin-bottom: 2vh;
}
/* Title styles */
.title {
  
  font-size: 3.5vw; /* 2.5rem converted to vw */
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  color: #1a202c; /* Dark gray color */
  margin-bottom: 1vh; /* 1rem converted to vh */
}

/* Description styles */
.description {
  color: #4a5568; /* Medium gray */
  font-size: 2.2vh;
  margin-bottom: 2vh;
  line-height: 1.5;
}

/* Register button styles */
.register-button {
  display: inline-block;
  padding: 2vh 2vw; /* 0.75rem and 1.5rem converted to vh and vw */
  font-size: 1.2vw; /* 1rem converted to vw */
  font-weight: 600;
  color: #ffffff;
  font-family: 'Roboto Condensed', sans-serif;
  border-radius: 0.8vw; /* 6px converted to vw */
  text-decoration: none;
  background: linear-gradient(78.7deg, #FF8B20 -0.84%, #FF5F02 89.34%);
  box-shadow: 0 0.4vh 0.8vw rgba(0, 0, 0, 0.1); /* 2px and 4px converted */
  transition: background-color 0.3s ease;
}


.carousel-container {
  
  display: flex;
  width: 30vw;
  height: 30vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Responsive design */
@media (min-width: 481px) and (max-width:768px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8vh 10vw;
  }
  .content-box{

    max-width: 100%;
  }

  .title {
    font-size: 5.5vh;
  }

  .description {
    font-size: 1.6vh;
  }

  .register-button {

    padding: 1.5vh 2vw;
    font-size: 1.8vh;
  }

  .carousel-container {
    width: 50vw;
    display: flex;
    justify-content: center;
    /* Increase the width to fit more on small screens */
    height: 35vh; /* Adjust the height slightly for better balance */
  }
}
@media (min-width: 769px) and (max-width:1024px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8vh 10vw;
  }
  .content-box{
    max-width: 100%;
  }

  .title {
    font-size: 3.5vh;
  }

  .description {
    font-size: 1.6vh;
  }

  .register-button {
    padding: 1.5vh 2vw;
    font-size: 1.8vh;
  }

  .carousel-container {
    width: 40vw;
    display: flex;
    justify-content: center;
    /* Increase the width to fit more on small screens */
    height: 35vh; /* Adjust the height slightly for better balance */
  }
}

  @media (max-width: 480px) {
    .container {
      display: flex;
      background-color: white;
      flex-direction: column;
      margin-top: -50%;
      justify-content: center;
      align-items: center;
      padding: 6vh 10vw;
    }
    .content-box{
      margin-top:100%;
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  
    .title {
      font-size: 3.5vh;
    }
  
    .description {
      font-size: 1.6vh;
    }
  
    .register-button {
      padding: 1.5vh 2vw;
      font-size: 1.8vh;
    }
  
    .carousel-container {
      width: 50vw;
      display: flex;
      justify-content: center;
      /* Increase the width to fit more on small screens */
      height: 35vh; /* Adjust the height slightly for better balance */
    }
  }

/* General page container styles */
.waves-container {
  display: flex;
  padding: 3vh 5vw;
  justify-content:space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: white;
}

/* Content box styling */
.waves-content-box {
  border-radius: 1vw; /* Border radius converted */
  padding: 1vw; /* Padding converted */
  max-width: 50vw;
  text-align:justify;
  margin-bottom: 5vh;
  margin-left: 0vh;
}

/* Title styles */
.waves-title {
  font-size: 3.5vw; /* 2.5rem converted to vw */
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  color: #1a202c; /* Dark gray color */
  margin-bottom: 1vh; /* 1rem converted to vh */
}

/* Description styles */
.waves-description {
  color: #4a5568; /* Medium gray */
  font-size: 2.2vh;
  margin-bottom: 2vh;
  line-height: 1.5;
}

/* Register button styles */
.waves-button {
  display: inline-block;
  padding: 2vh 2vw; /* 0.75rem and 1.5rem converted to vh and vw */
  font-size: 1.2vw; /* 1rem converted to vw */
  font-weight: 600;
  color: #ffffff;
  font-family: 'Roboto Condensed', sans-serif;
  border-radius: 0.8vw; /* 6px converted to vw */
  text-decoration: none;
  background: linear-gradient(78.7deg,#925EFF -0.84%, #2C2F5A 89.34%);
  box-shadow: 0 0.4vh 0.8vw rgba(0, 0, 0, 0.1); /* 2px and 4px converted */
  transition: background-color 0.3s ease;
}



/* Waves image container */
.waves-image {
  display: flex;
  width: 50vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
  border: 10px solid white;
  margin: 0 auto;
}

.waves-image img {
  width: 100%;
  height: 100%;
  border-radius: 30px solid white;
  object-fit: cover;
}

/* Responsive design */
@media (min-width: 481px) and (max-width:768px) {
  .waves-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8vh 10vw;
  }
  
  .waves-content-box {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left:0;
  }

  .waves-title {
    font-size: 5.5vh;
  }

  .waves-description {
    font-size: 1.6vh;
  }

  .waves-button {
    padding: 2vh 3vw;
    font-size: 1.8vh;
  }

  .waves-image {
    width: 70vw;
    display: flex;
    border: 7px solid white;
    justify-content: center;
    height: 35vh;
    margin-bottom: 2vh;
  }
}

@media (min-width: 769px) and (max-width:1024px) {
  .waves-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8vh 10vw;
  }

  .waves-content-box {
    max-width: 100%;
  }

  .waves-title {
    font-size: 3.5vh;
  }

  .waves-description {
    font-size: 1.6vh;
  }

  .waves-button {
    padding: 2.5vh 4vw;
    font-size: 1.8vh;
  }

  .waves-image {
    width: 40vw;
    display: flex;
    border: 7px solid white;
    justify-content: center;
    height: 35vh;
  }
}

@media (max-width: 480px) {
  .waves-container {
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vh 3vw;
  }

  .waves-content-box {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .waves-title {
    font-size: 3.5vh;
    text-align: center;
  }

  .waves-description {
    font-size: 1.6vh;
  }

  .waves-button {
    color: white;
    padding: 2vh 4vw;
    font-size: 1.8vh;
  }

  .waves-image {
    width: 70vw;
    display: flex;
    
    border: 7px solid white;
    justify-content: center;
    height: 22vh;
    
  }
}


.theme-heading {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 8.93vh;
  font-weight: 700;
  line-height: 6.94vh;
  text-align: center;
  margin-bottom: 3.7vh;
  margin-top: 0;
  top: -5.56vh;
  padding-bottom: 0.93vh;
  padding-top: 4.63vh;
  color: #1a202c;
  background-color: white;
}

.theme-container {
  background: white;
  top: 2.78vh;
  width: 100%;
  
  padding-bottom:20vh;
}

.theme-card-container {
  display: flex;
  background: white;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5vw;
  width: 100%;
  margin: 0 auto;
  padding: 1.04vw;
}

.theme-card-1,
.theme-card-2,
.theme-card-3,
.theme-card-4,
.theme-card-5 {
  width: 30.99vw;
  height: 24.8vw;
  border: 0.42vw solid #FFFFFF;
  border-radius: 4vw;
  display: flex;
  align-items:last baseline;
  justify-content:flex-end;
  padding-inline:4vh;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 0.28vh 0.21vw 0 rgba(0, 0, 0, 0.1);
}

.theme-card-1 { background: rgba(23, 158, 166, 0.3); }
.theme-card-2 { background: rgba(244, 183, 63, 0.3); }
.theme-card-3 { background: rgba(219, 54, 105, 0.3); }
.theme-card-4 { background: rgba(16, 86, 237, 0.3); }
.theme-card-5 { background: rgba(255, 107, 0, 0.3); }

.theme-dot {
  position: absolute;
  left: -0.73vw;
  top: 0;
  width: 1.04vw;
  height: 1.85vh;
  background-color: #3182ce;
  border-radius: 50%;
  box-shadow: 0 0 0 0.16vw white;
}

.theme-content {
  width: 32.20vw; 
  font-size: 5vh;
  color: #000000;
  text-align: justify;
}

.theme-card-1:hover,
.theme-card-2:hover,
.theme-card-3:hover,
.theme-card-4:hover,
.theme-card-5:hover {
  box-shadow: 0 0.56vh 0.63vw rgba(0, 0, 0, 0.15);
}
.theme-content p {
  display: none;
}
.theme-title {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 0.74vh;
}

@media (max-width: 768px) {
  .theme-card-container {
    top: 0.93vh;
  }

  .theme-card-1,
  .theme-card-2,
  .theme-card-3,
  .theme-card-4,
  .theme-card-5 {
    width: 42.56vw;
    height: 30.22vh;
  }

  .theme-content {
    width: 42.85vw;
    font-size: 1.5vh;

  }

  .theme-title {
    font-size: 2vh;
  }
  .theme-container{
    top:-20vh;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .theme-card-container {
    top: 0.05vh;
  }
  .theme-container {
    background: white;
    top: 0.05vh;
  }
  .theme-card-1,
  .theme-card-2,
  .theme-card-3,
  .theme-card-4,
  .theme-card-5 {
    width: 43vw; /* Reduced from 45.06vw */
    height: 36vh; /* Reduced from 40.78vh */
    
  }

  .theme-content {
    width: 38vw; /* Increased from 34.18vw */
    font-size: 1.5vh; /* Increased from 1.68vh */
  }

  .theme-title {
    font-size: 3vh; /* Slightly reduced from 2.58vh */
  }

  .theme-container {
    top: 5vh; /* Reduced from 9.26vh */
  }
}

@media (max-width: 480px) {
  .theme-heading{
    text-align: center;
    font-size: 6vh;
  }
  .theme-card-1,
  .theme-card-2,
  .theme-card-3,
  .theme-card-4,
  .theme-card-5 {
    width: 68.75vw;
    height: 29.37vh;
  }

  .theme-content {
    width: 55.83vw;
    font-size: 1.4vh;
  }
  .theme-title{
    font-size: 2.2vh;
    
  }
  .theme-container{
    padding: 10vh;
    margin-top:-30vh;
  }
}
.timelines-container {
  padding: 2rem;
  display: flex;
  color: #000;
  flex-direction: column;
  
  background-color: white;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-family: Roboto Condensed;
font-size: 10vh;

font-weight: 700;
line-height: 4vh;
text-align: center;
margin-bottom: 20vh;
}

/* Phase styles */
.phase {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  display: flex;
  width:80%;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
.phase-0 {
  background: #F4B73F1A;
}
.phase-1 {
  background: #FF449E1A;
 /* Blue-100 */
}


.phase-2 {
  background: #2FF3FF1A;
 /* Pink-100 */
}

.phase-3 {
  background: #5135FF1A;

   /* Purple-100 */
}
.phase-0 .events .event {
  background: linear-gradient(90deg, #FF8B20 5%, #F4B73F 100%);

}
.phase-1 .events .event {

  background: linear-gradient(90deg, #DB3669 0%, #FF78A2 100%);

}
.phase-2 .events .event {
  background: linear-gradient(90deg, #134C4F 0%, #179EA6 100%);

}
.phase-3 .events .event {
  background: linear-gradient(90deg, #2C2F5A 0%, #626AD0 100%);
}

.phase-title {
  font-size: 5vh;
  font-weight: 700;
  text-align: center;
  margin-bottom:0.25vh;
}

/* Event styles */
.events {
  display: flex;
  color: white;
  flex-wrap: wrap; /* Allow wrapping of items */
  justify-content: center;
  gap: 1.25vh;
}

.event {
  background: linear-gradient(90deg, #FF8B20 5%, #F4B73F 100%);
  padding: 1.6vh;
  border-radius: 0.7vh;
  width: calc(50% - 1rem); /* Each event takes up 50% of the container, minus gap */
  margin-bottom: 1vh;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
font-size: 3vh;
font-weight: 650;
line-height: 24.2px;
text-align: left;

}
.event-date{
  font-size: 2.4vh;
  font-weight: 400;
  line-height: 24.2px;
  text-align: right;
}
/* Center the last item on the next row */
.events .event:nth-child(3) {
  width: 520px;
  height: 68px; /* Make the third item full width */
}

.event:hover {
  background-color: #b2ebf2; /* Darker blue on hover */

}
.final-announcement {
  text-align: center;
  font-size: 1.125rem;
  font-family: Inter;
  font-weight: 600;
  border-radius: 30px;
  height: 11vh;
  width:100vh;
  display:flex;
  color: white;
  justify-content: center;
  align-items: center;
  background: linear-gradient(76.29deg, #253B6B -9.54%, #5285F4 74.91%);

}
@media (max-width:480px) {
  .section-title{
    font-size: 25vh;
    margin-bottom: 5vh;
    margin-top: -7vh;
  }
}
@media (max-width: 768px) {
  .timelines-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .event {
    flex: 1 1 100%; /* Each event will take 100% width */
    min-width: unset; /* Remove the minimum width to make it stack */
  }
  .phase-title {
    font-size: 3vh;
    font-weight: 700;
    text-align: center;
    margin-bottom:0.25vh;
  }
  
  .phase {
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
    display: flex;
    width:100%;
    margin-left: -2rem; /* Remove any left padding from parent */
    margin-right: -1rem; 
    flex-direction: column;
    gap: 1rem;
    margin-top: -1rem;
  }
  .timelines-container {
    display: flex;
    color: #000;
    flex-direction: column;
    width:100%;
    background-color: white;
    justify-content: center;
    align-items: center;
  }
  .section-title{
    font-family: Roboto Condensed;
font-size: 32px;
font-weight: 700;
line-height: 37.5px;
text-align: center;
bottom: 500px;

  }
  .event {
    background: linear-gradient(90deg, #FF8B20 5%, #F4B73F 100%);
    padding: 1rem;
    border-radius: 0.5rem;
    width: calc(50% - 1rem); /* Each event takes up 50% of the container, minus gap */
    margin-bottom: 1rem;
    transition: background-color 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Inter;
  font-size: 2vh;
  font-weight: 800;
  line-height: 24.2px;
  text-align: left;
  
  }
  /* Final announcement styles */
  .final-announcement {
    text-align: center;
    font-size: 3vw;
  
    font-weight: 600;
    border-radius: 3vw;
    height: 86px;
    width:350px;
    display:flex;
    color: white;
    justify-content: center;
    align-items: center;
    background: linear-gradient(76.29deg, #253B6B -9.54%, #5285F4 74.91%);
    padding:1rem;
  }
  
}
@media (min-width: 769px) and (max-width: 1024px) {
  .timelines-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .event {
    flex: 1 1 100%; /* Each event will still take 100% width */
    min-width: unset; /* Remove the minimum width to make it stack */
  }

  .phase-title {
    font-size: 4vh; /* Adjust font size for larger screens */
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5vh;
  }

  .phase {
    padding: 1.5rem; /* Increase padding for larger screens */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    display: flex;
    width: 100%;
    margin-left: -1.5rem; /* Adjust margins */
    margin-right: -1.5rem;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: -0.5rem;
  }

  .timelines-container {
    display: flex;
    color: #000;
    flex-direction: column;
    width: 100%;
    background-color: white;
    justify-content: center;
    align-items: center;
  }

  .section-title {
    font-family: Roboto Condensed;
    font-size: 34px; /* Slightly larger title for mid-range screens */
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    bottom: 400px;
  }

  .event {
    background: linear-gradient(90deg, #FF8B20 5%, #F4B73F 100%);
    padding: 1.5rem; /* Increase padding */
    border-radius: 0.5rem;
    width: calc(45% - 1.5rem); /* Each event takes 45% of the container */
    margin-bottom: 1.5rem;
    transition: background-color 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Inter;
    font-size: 2.5vh; /* Increase font size */
    font-weight: 800;
    line-height: 26px;
    text-align: left;
  }

  /* Final announcement styles */
  .final-announcement {
    text-align: center;
    font-size: 2.5vw; /* Adjust font size */
    font-weight: 600;
    border-radius: 2vw; /* Adjust border radius */
    height: 90px;
    width: 400px; /* Adjust width */
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background: linear-gradient(76.29deg, #253B6B -9.54%, #5285F4 74.91%);
    padding: 1.5rem;
  }
}

/* Prizes container */
.prizes-container {
  text-align: center;
  padding: 5vh 2vw; /* Adjust padding to viewport units */
  background: white;
}

/* Prizes heading */
.prizes-heading {
  font-family: Roboto Condensed;
  font-size: 4vw; /* Adjust font size to viewport units */
  font-weight: 700;
  line-height: 9vw; /* Adjust line height to viewport units */
  text-align: center;
  color: #000000;
  padding-bottom: 1vh; /* Adjust padding-bottom to viewport units */
  background: white;
}

/* Prizes description */
.prizes-description {
  font-size: 1.3vw; /* Adjust font size to viewport units */
  color: #4a4a4a;
  line-height: 2.5vw; /* Adjust line height to viewport units */
  max-width: 90vw; /* Optional: Limits the width of the paragraph to viewport units */
  margin: 0 auto;
  background: white;
}

@media (max-width: 460px) {
  .prizes-heading {
    font-family: Roboto Condensed;
    font-size: 5vw; /* Adjust font size to viewport units */
    font-weight: 700;
    line-height: 6vw; /* Adjust line height to viewport units */
    text-align: center;
  }
}

/* Organizers container */
.organizers-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4vh 2vw; /* Adjust padding to viewport units */
  background-color: white;
  color: black;
}

/* Organizers title */
.organizers-title {
  font-family: Roboto Condensed;
  font-size: 5vw; /* Adjust font size to viewport units */
  font-weight: 700;
  line-height: 9vw; /* Adjust line height to viewport units */
  text-align: center;
  color: #000000;
}

@media (max-width: 460px) {
  .organizers-title {
    font-family: Roboto Condensed;
    font-size: 1vw; /* Adjust font size to viewport units */
    font-weight: 700;
    line-height: 6vw; /* Adjust line height to viewport units */
    text-align: center;
  }
}

/* Organizers logos */
.organizers-logos {
  display: flex;
  background: white;
  gap: 2vw; /* Space between the logos */
}

/* Organizer item */
.organizer-item {
  display: flex;
  background: white;
  flex-direction: column;
  align-items: center;
}

/* Organizer logo */
.organizer-logo {
  width: 13vw; /* Adjust width to viewport units */
  height: 12vw; /* Adjust height to viewport units */
  margin-bottom: 1vw; /* Adjust margin-bottom to viewport units */
  transition: box-shadow 0.3s ease-in-out; /* Smooth shadow transition */
}

.organizer-logo:hover {
  box-shadow: 0px 1vh 2vh rgba(0, 0, 0, 0.3); /* Add shadow on hover, adjusted to viewport units */
}

/* FAQs */


#faqs{
  margin: auto !important;
  display: block;
  background: white;
  
}
.heading{
  font-size: 4vw;
  font-weight: 700;
  text-align: center;
  left:-100px;
  margin-bottom: 2vw;
  color: black;
}
.faq-heading {
  font-family: "Roboto Condensed"; 
  font-weight: bold;
  font-size: 1.65vw;
  -webkit-transition: text-indent 0.2s;
  /* text-indent: 20px; */
  /* padding-left: 2vw; */
  color: #000000;
  margin-block-end:0;
  margin-block-start: 0;
  margin: 1.65vw;
}

.faq-text {
  font-family: "Inter"; 
  font-weight: 400;
  color: #000000;
  background-color: #F2F0F0;
  width:100%;
  padding: 2vw;
  margin-block-end: 0;
  margin-block-start: 0;
  font-size: 1.2vw;
}

.faq {
  width: 90vw;
  margin: 0 auto;
  background: white;
  /* border-radius: 4px; */
  position: relative;
  border: 1px solid #E1E1E1;
  display: flex;
  flex-direction: column;
  row-gap: 0.25vw;
}
.faq label {
  display: block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  max-height: 200px;
  padding-top:1px;
  background-color: #D9D9D9;
  /* background-color: #FAFAFA; */
  border-bottom: 1px solid #E1E1E1;
}

.faq input[type="checkbox"] {
  display: none;
}

.faq .faq-arrow {
  width: 1.2vw;
  height: 1.2vw;
  transition: -webkit-transform 0.8s;
  transition: transform 0.8s;
  transition: transform 0.8s, -webkit-transform 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-top: 0.3vw solid rgba(0, 0, 0, 1);
  border-right: 0.3vw solid rgba(0, 0, 0, 1);
  float: right;
  position: relative;
  top: -3.75vw;
  right: 2vw;
  -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
}

 .faq input[type="checkbox"]:checked + label > .faq-arrow {
  transition: -webkit-transform 0.8s;
  transition: transform 0.8s;
  transition: transform 0.8s, -webkit-transform 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
}
 .faq input[type="checkbox"]:checked + label {
  display: block;
  color: #4f7351;
  max-height: 20vw;
  transition: max-height 0.3s ease-in;
}

 .faq input[type='checkbox']:not(:checked) + label {
  display: block;
  transition: max-height 0.3s ease-in;
  max-height: 5vw;
  
}

::-webkit-scrollbar {
  display: none;
}

@media (max-width: 480px) {
  .faq input[type='checkbox']:not(:checked) + label{
    max-height: 13vw;
  }
  .faq input[type="checkbox"]:checked + label{
    max-height: 60vw;
  }
  .faq-heading{
    font-size: 3vw;
    /* margin: 3vw; */
    height: 10vw;
    align-content: center;
    padding-right: 3vw;
  }
  .faq .faq-arrow{
    top: -7.75vw;
  }
  .faq-text{
    padding: 3vw;
    font-size: 2.5vw;
  }
  #faqs{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
