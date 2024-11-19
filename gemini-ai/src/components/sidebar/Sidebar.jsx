import React, { useContext, useState } from 'react'
import './Sidebar.css'
import Menu from '../../assets/menu_icon.png';
import Plus from '../../assets/plus_icon.png';
import Message from '../../assets/message_icon.png';
import Question from '../../assets/question_icon.png';
import History from '../../assets/history_icon.png';
import Setting from '../../assets/setting_icon.png';
import { Context } from '../../context/context';

function Sidebar() {

  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompts, setRecentPrompt,newChat} = useContext(Context);
  const loadPrompt = async(prompt)=>{
          setRecentPrompt(prompt);
          await onSent(prompt);
  }
  return (

    <div className='sidebar'>
    <div className='top'>
     <img onClick={()=>setExtended(prev=>!prev)}   src={Menu} alt="Menu" className='Menu'/>   
     <div className='New-Chat' onClick={()=>newChat()}>
        <img src={Plus} alt='Plus'className='w-5'/>
       {extended?<p>New Chat</p>:null} 
     </div>
   {extended? 
   <div className='Recent'>
   <p className='Recent-Title'>Recent</p>
   {prevPrompts.map((item,index)=>{
     return(
      <div className='Recent-Entery' onClick={()=>loadPrompt(item)}>
      <img src={Message} alt='Message'className='w-5'/>
      <p>{item.slice(0,18)}...</p>
     </div>
     )       
   }

)}

</div>
:null
   }  
  
  </div>
  <div className='Bottom'>
<div className='Bottom-item  Recent-Entery'>
    <img src={Question} alt='Question' className='w-5'/>
        {extended?<p>Help</p>:null}
</div>
<div className='Bottom-item  Recent-Entery'>
    <img src={History} alt='History' className='w-5'/>
        {extended?<p>Activity</p>:null}
</div>
<div className='Bottom-item  Recent-Entery'>
    <img src={Setting} alt='Setting' className='w-5'/>
        {extended?<p>Settings</p>:null} 
</div>

  </div>
  </div>
  )
}

export default Sidebar
