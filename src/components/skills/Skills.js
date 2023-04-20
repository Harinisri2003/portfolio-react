import React from 'react'
import './skills.css';


export default function Skills() {
  return (
    <div className='skills'>
    <div className='container'>
      <img className='skillimg' src='https://cdn.dribbble.com/users/2921285/screenshots/5932365/web_designing_4x.jpg?compress=1&resize=800x600'></img>
    <h1 className='sk'>My skills -</h1>
      
      <div className='card'>
       <div className='percent' >
       <div className='num'><h2>85<span>%</span></h2>
        <p>HTML</p></div>
        <svg><circle cx={70} cy={70} r={70}></circle></svg>
        
       </div>
       <a href='https://github.com/Harinisri2003'><p id='work'>view my work</p></a>
      </div>


      <div className='card2'>
       <div className='percent' >
       <div className='num'><h2>75<span>%</span></h2>
        <p>CSS</p></div>
        <svg><circle cx={70} cy={70} r={70}></circle></svg>
       </div>
       <a href='https://github.com/Harinisri2003'><p id='work'>view my work</p></a>
      </div>


      <div className='card3'>
       <div className='percent' >
       <div className='num'><h2>65<span>%</span></h2>
        <p>JAVASCRIPT</p></div>
        <svg><circle cx={70} cy={70} r={70}></circle></svg>
        
       </div>
       <a href='https://github.com/Harinisri2003'><p id='work'>view my work</p></a>
      </div>

      <div className='card4'>
       <div className='percent' >
       <div className='num'><h2>65<span>%</span></h2>
        <p>REACT</p></div>
        <svg><circle cx={70} cy={70} r={70}></circle></svg>
        
       </div>
      <a href='https://github.com/Harinisri2003'><p id='work'>view my work</p></a>
      </div>

      <div className='card5'>
       <div className='percent' >
       <div className='num'><h2>70<span>%</span></h2>
        <p>C++</p></div>
        <svg><circle cx={70} cy={70} r={70}></circle></svg>
       </div>
      <a href='https://leetcode.com/harinisrik2003/'><p id='work'>view my work</p></a>
      </div>

      <div className='card6'>
       <div className='percent' >
       <div className='num'><h2>30<span>%</span></h2>
        <p>IOT</p></div>
        <svg><circle cx={70} cy={70} r={70}></circle></svg>
        
       </div>
      <a href='https://drive.google.com/file/d/1dZ19OPLuTSukTzDB63h04oib1JXHwGvj/view?usp=share_link'><p id='work'>view my work</p></a>
      </div>

      <div className='card7'>
       <div className='percent' >
       <div className='num'><h2>50<span>%</span></h2>
        <p>RDBMS</p></div>
        <svg><circle cx={70} cy={70} r={70}></circle></svg>
        
       </div>
       <a href='https://www.hackerrank.com/727721euec048'><p id='work'>view my work</p></a>
      </div>
      
    </div>
    </div>
  )
}
