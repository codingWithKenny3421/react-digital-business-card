import React from 'react'
import Profile from '../src/Profile.png'
import { FaDiscord } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Info = () => {
  return (
   <div className = 'info--container'>
   <img src = {Profile} className = 'info--profile'/>
   <h2 className = 'info--name'>Kenny Malis</h2>
   <p className = 'info--occupation'>Rising Sophmore Student</p>
  
   <br/>
   <div className = 'info-button_container'>
   <button className = 'info--email_button'><AiOutlineMail className = 'icon info--email_icon'/>Email</button>
   
   <a href = 'https://discord.com/invite/5xEuGpXtTW' target = '_blank'><button className = 'info--discord_button'><FaDiscord className = 'icon info--discord_icon'/>Discord</button></a>
   </div>
   
   </div>
  )
}

export default Info