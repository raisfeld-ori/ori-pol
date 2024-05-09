import menu from './menu.png';
import example from './example.png';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Ksed</h1>
  <p className="description">
    Using all of the skills I had learned so far, I decided to make an app based on
    rd-security and raisfeld encrypter called "Ksed". Ksed is an app with a
    desktop environment feel that allows you to have a hidden, alternative
    desktop that is more secure. I worked on both the frontend and the backend
    of the app, and I created most of the main page and almost all of the backend.
    This is my biggest project so far, and I hope to advance it further and turn it into
    a full on business.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={menu} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>
    
    <ul className="linksprj">
</ul>
    
  </div>
  </div>

  
}