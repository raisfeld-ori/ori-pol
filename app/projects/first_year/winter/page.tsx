import example from './example.png';
import shabat from './shabat.png';
import Image from "next/image";
export default function Page(){
  return <div className="container">
  <h1 className="head">calender | website</h1>
  <p className="description">
    After realizing turtle is meant for drawing and not for apps, I decided to try and make a small, actual
    app. so I made a small calander to compliment class classifacation, and also learn how to really make an app,
    using real tools. Unlike what I expected, it took far less time, and I actually finished it in less than half a month.
    So I also learned HTML/CSS/JS, and I ended up also making a small website as well. sadly the website was lost, but
    It's important to mention, since i used this knowlage to make a website for my new apps.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={shabat} alt=""/>
    </div>
    
  </div>
  </div>

  
}