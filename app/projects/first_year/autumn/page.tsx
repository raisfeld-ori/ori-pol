import example from './blue.png';
import red from './red.png';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">class classifacation</h1>
  <p className="description">
    continuing the mini project, i decided to expand on it by creating a full version of &apos;class classifacation&apos;.
    to me, this version is impressive for 3 reasons, first, I still didn&apos;t know anything about how to program,
    so I ended up using turtle a DRAWING module to create an entire app. secondly, I didn&apos;t know what &apos;hashmaps&apos; 
    (one of the most important data types in programming) so I ended up implementing my own hashmap from scratch, which
    was difficult to say the least. and lastly, because i was still in the start of my learning, every couple of weeks I would
    need to replace the ENTIRE codebase and remake it, every time making it significantly better.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={red} alt=""/>
    </div>
    
    <ul className="linksprj">
  

</ul>
    
  </div>
  </div>

  
}