import React from 'react'
import './Footer.css'
import {HiUserGroup} from 'react-icons/hi'


export default function Footer() {
  return (
    <div className='pt-2 '>
    <div className='bg-dark'id="footBody" >
      <h3 className='text-center text-white'><a href='/' className='text-white text-decoration-none '><span className=''><HiUserGroup className='pb-2' size={35}/></span> Beta Developers </a></h3>
      <hr/>
      <div className='d-flex justify-content-around'>
        <ul id="links" >
        <h4>Developers Profile</h4>
          <li ><a className='text-white text-decoration-none' href='https://www.linkedin.com/in/sai-shashidhar-reddy-katanguri-8a2b42243' target="_blank">Shashidhar</a></li>
          <li><a className='text-white text-decoration-none' href='https://www.linkedin.com/in/sireesha-jangili-660398230' target="_blank">Sireesha</a></li>
          
          <li><a className='text-white text-decoration-none' href='https://www.linkedin.com/in/bhavishya-kolloori-28b725248' target="_blank">Bhavishya</a></li>
          <li><a className='text-white text-decoration-none' href="https://www.linkedin.com/in/sathvik-kunuru-60465b220" target="_blank">Sathvik</a></li>
          <li><a className='text-white text-decoration-none' href="https://www.linkedin.com/in/sylasya-mamidi-8b377625b" target="_blank">Sylasya</a></li>
        </ul>
        <div className=''>
            <h4>Resources</h4>
            <ul>
              <li><a href="https://reactjs.org/" className='text-white text-decoration-none' target="_blank">React</a></li>
              <li><a href="https://react-bootstrap.github.io/" className='text-white text-decoration-none' target="_blank">React-Bootstrap</a></li>
              <li><a href="https://getbootstrap.com/" className='text-white text-decoration-none' target="_blank">Bootstrap</a></li>

            </ul>
      </div>
      </div>
     
      <hr/>

      <div className="d-flex justify-content-between">
        <p>Copyright © </p>
        <p>Students of <a href='http://www.vnrvjiet.ac.in/' className='text-white ' target="_blank">Vnrvjiet</a></p>
        
      </div>
      </div></div>
  )
}
