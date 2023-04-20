import React from 'react'
import './home.css';
// import Typical from 'react';
export default function Home() {
  return (
    
    <div className="home">
      <div className="sidebarI">
        {/* <img src='https://i.pinimg.com/originals/5f/cf/cb/5fcfcb3dbd6ae7ba8ef0be13865f726a.gif'></img> */}
        <p className="desc">
        Welcome!<br/>This is Harinisri,<br/>

         I'm a frontend developer
        
        who brings designs to life, one pixel at a time!!
       <div><a href='https://drive.google.com/file/d/1HDhn0zuGk3uacZ_YRDuG00i8Qk_tLBFK/view?usp=share_link'><button id='resume'>view my resume</button> </a></div> 
        </p>
      </div>
      
    </div>
  )
}
