import logo from './logo.png';
import game from './gameplay.jpg';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">How far can I go?</h1>
  <p className="description">
    During the first year, there was a HUGE rise in unity, and I decided to just on the bandwagon. after 30 days,
    I made a game with unity, called &apos;how far can I go&apos;, about falling into a cave and trying to reach as far as possible.
    the game contains 3 levels, with the final level having a final boss. I also added random map genaration, multiple items,
    weapons, settings and menus, and even a tutorial level. It&apos;s a full game that you can download online using the link at
    the bottom of the page! sadly, I did decide to use an existing publishing website instead of creating my own website.
    This was mostly for fun, so I didn&apos;t learn as much as in the other apps, but I did learn how to design UI better,
    which helped me with the final project.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={logo} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={game} alt=""/>
    </div>
    
    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"https://pretro.itch.io/how-far-can-i-go"} target='_blank'>how far can I go?</Link>
  </li>
</ul>
    
  </div>
  </div>

  
}