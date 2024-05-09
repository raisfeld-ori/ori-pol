import ori from './ori.png';
import joe from './joe.png';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Raisfeld encryption</h1>
  <p className="description">
    After finishing RD-security and realizing the potential of what I found, I decided to make a sequel
    and this time solving the basic issues that people found. The main issues were that it was
    too complex and too slow, which are great issues for me, since i just now worked on a project
    that required me to work a LOT on speed and simplicity. The final app is a simplified version
    of rd-security, that instead of creating databases, takes in files and hides them in a &apos;vault&apos;.
    Most of my work in this project had a lot more work on the backend than rd-security, which
    gave it more security and better speed. and unlike the previous project, that failed from a spesific
    size, this one could scale infinitly and seemingly dealt with every file given just fine, even up to 3 2gb
    files at the same time! This project was more meant to be a demo app to allow me to create the final app, made
    from what I learned from this app and rd-security, my largest project: Ksed.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={ori} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={joe} alt=""/>
    </div>
    
    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"https://raisfeld.netlify.app/"}>Raisfeld encrypter</Link>
  </li>
  <li className="linkprj"><Link href={"https://github.com/raisfeld-ori/Raisfeld_Encrypter"}>the source code</Link></li>
</ul>
    
  </div>
  </div>

  
}