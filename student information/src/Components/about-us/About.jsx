import React from 'react'
import '../about-us/about.css'
import wave from '../../assets/wave.svg'
import Header from '../Header/Header'

function About() {
  return (
    <>
    <Header/>
    <div className='about_us'>
      <div className="about_title">
        <h2 className="abt_t">About Us</h2>
      </div>
      <div className="about_content">
        <h3 id='abt_story'>
          
        </h3>
        <h3 id='abt_story1'>
        
        </h3>
        <h3 id='purpose'>
          
        </h3>
      </div>
      <div className="about_creators">
        <h3 id="samrat">
        
        </h3>
      <div className="about_team">
        <h3 id='list'>For more information :
          <ol className='ol-li'>
          <li>Karpagam college of engineering Covai-641032</li>
            <li>email-id:kabilgkabaddi@gmail.com</li>
            <li>Mobile Number:6369600191</li>
          </ol>
        </h3>
      </div>
      </div>
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>
    </div>
    </>
  )
}

export default About