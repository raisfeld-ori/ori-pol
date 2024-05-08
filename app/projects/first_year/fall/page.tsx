import example from './example_img.png';
import Image from "next/image"
import Link from "next/link";

export default function Page(){
  return <div className="container">
  <h1 className="head">class classifacation</h1>
  <p className="description">
  I only had 1 week, and I didn't know anything about programming. So for my first project,
  most of it was spent on studying and learning python. However, on the first week, I noticed
  an issue at school. No one known which classes do they have and when, and sometimes they even just
  forget about those classes. so I decided to make "class classifacation", an app to classify which classes
  do you have. This might not seem like a lot, but this was the result of an entire week of learning how to program.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>


  </div>
  </div>
}