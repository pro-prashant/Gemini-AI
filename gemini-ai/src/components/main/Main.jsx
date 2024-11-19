
import React, { useContext } from 'react'
import './Main.css'
import User  from '../../assets/user_icon.png';
import Compass from '../../assets/compass_icon.png';
import Bulb from '../../assets/bulb_icon.png';
import Message from '../../assets/message_icon.png';
import Code from '../../assets/code_icon.png';
import Gallery from '../../assets/gallery_icon.png';
import Mic from '../../assets/mic_icon.png';
import Send from '../../assets/send_icon.png';
import Gemini from '../../assets/gemini_icon.png';
import { Context } from '../../context/context';


function Main() {

const {onSent, recentPrompt, showResult, loading, resultData, input, setInput,} = useContext(Context);

  return (
    <div className='Main'>
    <div className='Nav'>
        <p>Gemini</p>
        <img src={User}/>

</div>     
      
<div className='Main-Container'>
{!showResult?
<>
<div className='Greet'>
<p><span>Hello, Dev.</span></p>
<p>How can i help you today?</p>

</div>
<div className='Cards'>
<div className='Card'>
<p>Suggested beautiful place to see on an upcoming road trip</p>
<img src={Compass} alt='Compass'/>
</div>
<div className='Card'>
<p>Briefly summarize this concept: urban planning</p>
<img src={Bulb} alt='Bulb'/>
</div>
<div className='Card'>
<p>Brainstorm team bonding activities for our work retreat</p>
<img src={Message} alt='Message'/>
</div>
<div className='Card'>
<p>Imporve the readability of the following code</p>
<img src={Code} alt='Code'/>
</div>
</div>
</>
:<div className='result'>
  <div className='result-title'>
    <img src={User} alt='User'/>
    <p>{recentPrompt}</p>
  </div>
  <div className='result-data'>
    <img src={Gemini} alt='Gemini'/>
    {loading
    ?<div className='loader'>
      <hr />
      <hr />
      <hr />
   </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}

  </div>
</div>

}


<div className='Main-Bottom'>
<div className='Search-Box'>
  <input type='text' placeholder='Enter the prompt here' onChange={(e)=>setInput(e.target.value)} value={input}/>
  <div>
    <img src={Gallery} alt='Gallery'/>
    <img src={Mic} alt='Mic'/>
    {input?<img src={Send} alt='Send' onClick={()=>onSent()}/>:null} 
  </div>
</div>
<p className='Bottom-Info'>
  Gemini may display inaccurate info, including about people, so double-chek its responsbility, Your privacy and GeminiApp
</p>
</div>

</div>
 </div>
  )
}

export default Main
