import example from './example.png';
import login from './login.png';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Ksed | Tiod</h1>
  <p className="description">
    Unlike what I expected, the summer project was very small. So what did we do? well, we did 2 things,
    the first, more small thing, was to add settings to Ksed, so you can actually edit things like the
    background image or the volume. The larger thing started in a hackathon, we made a concept for an app 
    named Tiod that won the hackathon and earned 3,000₪ for the project! we decided to continue the project
    this summer and our goal is to hopefully, but the start of the next year, already release a demo.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={login} alt=""/>
    </div>
    
    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"https://drive.google.com/file/d/1XEKrJXFnhgQBMH5KW_xrKkur3gqrpLje/view?usp=sharing"}>tiod's video</Link>
  </li>
</ul>
    
  </div>
  </div>

  
}