import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.linkedin.com/in/harinisri-k-873930244/"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://instagram.com/_harinisri_krishnamoorthy?igshid=ZDdkNTZiNTM="><i className="topIcon fab fa-instagram-square"></i></a>
       <a href="https://in.pinterest.com/harinisrik2003/"> <i className="topIcon fab fa-pinterest-square"></i></a>
        <a href="https://www.linkedin.com/in/harinisri-k-873930244/"><i className="topIcon fab fa-google-plus-square"></i></a>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link className="link" to="/">
              HOME
            </Link>
          </li>
          
          <li className="topListItem">    
          <Link className="link" to="/aboutme">
              ABOUT
            </Link>
          </li>
          <li className="topListItem"><Link className="link" to="/skill">SKILLS</Link></li>
          <li className="topListItem"><Link className="link" to="/project">PROJECTS</Link></li>
          <li className="topListItem"><Link className="link" to="/cont">
              CONTACT
            </Link></li>
          
        </ul>
      </div>

      
      <div className="topRight">
        
           <Link className="link" to="/about"><img
              className="topImg"
              src="https://th.bing.com/th/id/R.fd68e854272c79284039122853b45eab?rik=0yOVfMnsFHv8MA&riu=http%3a%2f%2ffeverishthoughts.com%2fphoto%2fwp-content%2fuploads%2f2012%2f04%2f1462695842_83fef1a684_b.jpg&ehk=MdEVaBVdwtnvLdSgEG7t%2bxj19%2fEOmkb22j2PveZBUO8%3d&risl=&pid=ImgRaw&r=0"
              alt=""
          /></Link> 
      
      
      </div>
    </div>
  );
}