// import React,{ useRef, useEffect }  from 'react'
import React  from 'react'
import {BiRightArrow,BiLeftArrow} from "react-icons/bi"
// import home from './home.svg'
import Carousel from 'react-bootstrap/Carousel'
import "./Home.css"
import Cards from './Cards.jsx';

function Home() {
  
  let first={
    title : "Entrepreneurship",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae temporibus nemo quo sequi cum odit numquam dolores amet cumque dolorem.numquam dolores amet cumque dolorem.numquam dolores amet cumque dolorem." 
  }
  let second={
    title : "Mentorship",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae temporibus nemo quo sequi cum odit numquam dolores amet cumque dolorem.numquam dolores amet cumque dolorem.numquam dolores amet cumque dolorem." 
  }
  let third={
    title : "sponsorship",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae temporibus nemo quo sequi cum odit numquam dolores amet cumque dolorem.numquam dolores amet cumque dolorem.numquam dolores amet cumque dolorem." 
  }
  return (
    <div>

    <Carousel className="co" style={{ margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Carousel.Item interval={1000}>
        <img
          className="overlay co-img"
          src="images/collage.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="caption p-5"  >
            <h1> <span  className='start'>E</span>ntrepreneurship <br/> <span  className='start'>M</span>entorship <br /> <span  className='start'>S</span>ponsorship </h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item interval={500}>
        <img
          className="overlay co-img"
          src="images/entrep.jpg "
          alt="Second slide" 
        />
        <Carousel.Caption>
        <div className="caption p-5">
            <h1>Launch a Startup</h1>
            <i className='quote'>-"Think big. Start small."</i>
            <button className='btn1 btn-white'>Register </button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="overlay co-img"
          src="images/mentor.jpg "
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="caption p-5">
            <h1>Be a Mentor</h1><i className='quote'>-"Make a difference"</i>
            <button className='btn1 btn-white '>Register </button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="overlay co-img" 
          src="images/investors.jpg "
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="caption p-5">
            <h1>Become a Sponsor </h1>
            <i className='quote'>-"Invest in success"</i>
            <button className='btn1 btn-white'>Register </button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      {/* <div id='name'>
        <div className='display-1 d-flex flex-column' id='main-text'>
          <h1 id='e1' className='text-Black display-1 fst-italic fw-bolder'>
            <span className='text-primary'>E</span>ntrepreneurship
          </h1>
          <h1 id='e2' className='text-Black display-1 fst-italic fw-bolder'>
            <span className='text-primary'>M</span>entorship
          </h1>
          <h1 id='e3' className='text-Black display-1 fst-italic fw-bolder'>
            <span className='text-primary'>I</span>nvestors
          </h1>
          <span id='img'> <img src={home} width="500px"/> </span>
        </div>        
      </div> */}

      <div className="card-container">
        {/* <img className='bgforpgm' width="100%" height="550px" src="images/bgforpgm.jpg" alt="" /> */}       
        <Cards data={first}/>
        <Cards data={second}/>
        <Cards data={third}/>     
      </div>

      <h1 className='roadmaph' > Kick start your Startup Journey </h1>

      <div id="routemap" >

        <h2 className='rh text-center  fs-1 mb-5'>Road Map</h2>

        <div id='cont' className='d-flex flex-column'>
        <div id='b1' className='bg-white rounded d-block m-1 p-5 fs-5 fst-italic'>
          <p><span className='me-3'></span>Create Your Profile</p>
        </div> <BiRightArrow className='arrow1'size="2rem"/>

        <div id='b2' className='bg-white rounded d-block m-1 p-5 fs-4 fst-italic'><p>Present Your Idea</p></div>
        <div id='line'></div>
        <BiLeftArrow className='arrow2'size="2rem"/>
        <div id='b3' className='bg-white rounded m-1 p-5 fs-4 fst-italic '><p>Get Approved</p></div>
        <BiRightArrow className='arrow1'size="2rem"/>
        <div id='b4' className='bg-white rounded m-1 p-5 fs-4 fst-italic'><p>Funding</p></div>
        <BiLeftArrow className='arrow2 mb-5' size="2rem"/>
        <br className='mt-5 mb-5'/>
        <br className='mt-5 mb-5'/>
        <br className='mb-5'/>
 
        </div>
      </div>

    </div>
  )
}

export default Home;