import example from './example_img.jpg';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Lang-py</h1>
  <p className="description">
    During the summer, I became very intrested in interperters and compilers, and I even did a course by harverd on
    compilers and interperters. Due to my interests, I ended up using the summer and start of the year for Lang-py,
    a python module that can parse python code, turn it into IR, and also compile it, but instead of being 1 function,
    it allows other people to program between every step and make changes to the code, in order to make a compiler or interperter
    that you have 100% control. Sadly, during the start of the year, I realized that the project was getting too big, so
    with a very heart, I decided to archive it, and instead remake a smaller version that does less. This was a great
    lesson to me about how to set expectations and not raise them too high. still when I look back, this is a very,
    very impressive project for someone with around 1 year of experience, especially considering this version was pure,
    meaning i used 0 modules (in another words, I didn't use any external tools to make the app).
  </p>
  <div className="images">
    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"https://github.com/raisfeld-ori/lang-py"} target='_blank'>lang-py</Link>
  </li>
</ul>
    
  </div>
  </div>

  
}