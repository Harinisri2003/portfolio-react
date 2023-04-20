import React from 'react'
import './contact.css';
export default function Contact() {
  return (
    <div>
      <footer id="contact">
                <h3>CONTACT</h3>
            <form action="">
            <input class="input" type="text" placeholder="Name"/>
            <input class="input" type="text" placeholder="Email"/>
            <input class="input" type="text" placeholder="ENTER YOUR MESSAGE"/>
            <input class="btn" type="submit" value="SEND MESSAGE"/>
            </form>
            <hr/>
            <div>
                <h2 className='follow-me'>Follow me</h2>
                <div>
                  <span className='follow'>
                <a href='https://www.linkedin.com/in/harinisri-k-873930244/'> <span> <acronym title="LINKEDIN"><img src='https://th.bing.com/th/id/R.21fba12531ac377e1642a01921db9fbd?rik=ErbH90Kfy3L6tg&riu=http%3a%2f%2fencomium.ng%2fwp-content%2fuploads%2f2016%2f01%2fLinkedIn-Logo.png&ehk=qo9l10kLERwTTr5WEWyHeVR%2bKIWh4CchVBnnAxyz3ic%3d&risl=&pid=ImgRaw&r=0'/></acronym> </span></a>  
                 <a href='https://github.com/Harinisri2003'><span><acronym title="GITHUB"><img src='https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png'/></acronym> </span> </a> 
                 {/* <span><acronym><img src='https://th.bing.com/th/id/R.b647b32f76354e4a593372318c67e993?rik=jzYDm3B%2fQmjPTA&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2012%2f03%2ffacebook-logo-icon_51202.jpg&ehk=%2fljoNn1qBc2E634AbkKqkK2reKWkDT04nyyJmJ61Fm8%3d&risl=&pid=ImgRaw&r=0'/></acronym> </span>     */}
                  </span>
                </div>
            </div>
            <div className='myinfo'>
                <h2>MY CONTACT INFO</h2>
                <h4 ><span className='connect'><img  src='https://th.bing.com/th/id/OIP.Vo1VgxSdCRTytSppZk-c6gHaFj?pid=ImgDet&rs=1'></img>
                ------harinisrik2003@gmail.com
                </span>
                <h4 className='connect'><span><a href='https://call.whatsapp.com/voice/rKvLqgC5htehBCa3DT0a14'><img src='http://www.clipartbest.com/cliparts/7ca/6z9/7ca6z9qMi.png'/></a>------9042246051(Voice call)</span></h4>

                </h4>
            </div>
            </footer>
    </div>

  )
}
