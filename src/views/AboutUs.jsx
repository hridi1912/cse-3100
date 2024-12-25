import React from 'react'
import boypic from "../assets/boy profile.jpg";
import girl1 from "../assets/girl pic1.jpg";
import girl2 from "../assets/girl pic2.jpg";
import './AboutUs.css'
function AboutUs() {
  return (
    <div>
        <div>
            <h2 style={{fontFamily:'cursive'}}>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cumque harum deleniti itaque ducimus dignissimos cupiditate porro quos officiis adipisci, illo, atque doloribus repellat aperiam numquam nostrum velit ut nulla.</p>
        </div>
        <div>
            <h2 style={{fontFamily:'cursive'}}>Our History</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores aliquam repudiandae quod nisi eos harum autem voluptates repellat tempora dignissimos voluptatum aliquid odit ipsam, illo tenetur mollitia saepe unde.</p>
        </div>
        <section>
            <h2 style={{fontFamily:'cursive'}}>Our Team</h2>
            <div className='team-container'>
            <div className='team'>
              <img src={boypic} alt="" className='pic-container'/>
              <div className='box-cont'>
              <h5>Chandler Bing</h5>
              <p>Director</p>
              </div>
            </div>
            <div className='team'>
              <img src={girl1} alt="" className='pic-container'/>
              <div className='box-cont'>
              <h5>Rachel Green</h5>
              <p>Director</p>
              </div>
            </div>  
            <div className='team'>
              <img src={girl2} alt="" className='pic-container'/>
              <div className="box-cont">
              <h5>Monica Geller</h5>
              <p>Director</p>
              </div>
            </div>
            </div>  
        </section>
    </div>
  )
}

export default AboutUs