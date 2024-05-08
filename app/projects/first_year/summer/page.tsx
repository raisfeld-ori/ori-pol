import dark from './dark.png';
import light from './light.png';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">rd-security</h1>
  <p className="description">
    Using everything I learned so far, I decided to make the best app possible in the time left.
    I realized I have a lot of keys for APIs that are being saved unsecurly, so how can I still
    have easy access for the keys without them being unsecure? the answer I came up with was
    "rd-security", to make my own databases, that instead of being meant for programming,
    they will be meant for non programmers. I now know that this isn't as original as I thought,
    but this was a very important and useful project, that I ended up using, alongside other people.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={dark} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={light} alt=""/>
    </div>
    
    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"https://rd-security.netlify.app/"} target='_blank'>rd-security</Link>
  </li>
</ul>
    
  </div>
  </div>

  
}