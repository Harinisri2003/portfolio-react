
import { Link } from "react-router-dom";
import './about.css';
import me from '../about/me.jpg'
// import Typewriter from 'typewriter-effect/dist/core';

export default function About() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img id="aboutme"
          src={me}
          alt="google"
        />
        <p className="des">
        I am pursuing my BE degree in Electronic and Communication Engineering<br/> at Sri Krishna College of
Engineering and Technology. I am an eager teenager<br/> to explore the world using knowledge.I believe in myself that 
I am a good team<br/>player and out of box thinker😎. 

        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Known_languages and Achievements</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link">
              TAMIL
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" >
             Skillup certification
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" >
              ENGLISH
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link">
             Salzer intern certification
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link">
             
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link">
              Enthu intern certification
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"><a href="https://drive.google.com/file/d/1dZ19OPLuTSukTzDB63h04oib1JXHwGvj/view?usp=share_link"><button className="vc">View certifications</button></a></span>
        {/* <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div> */}
      </div>
    </div>
  );
}