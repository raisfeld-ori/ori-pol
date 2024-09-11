import Image from "next/image"
import Link from "next/link"
import Hibori from './Hibori.jpg';
import icon from './icon.png';


export default function Page(){
    return <div className="container">
        <h1 className="head">Hibori</h1>
        <p className="description">
            Remember Tiod? we completed it! the new name is Hibroi and this is a full android
            app that you can install Right now. The entire backend is in firebase and handled by me,
            and the frontend was made by me and another student together. We spent the entire summer
            creating this, and I am fairly happy with how this came out.
        </p>
        <div className="images">
    <div className="image-container">
      <Image className="image" src={Hibori} alt=""/>
    </div>
    <div className="image-container">
      <Image className="image" src={icon} alt=""/>
    </div>
    
    <div className="images">
    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"https://expo.dev/accounts/hibori/projects/hibori/builds/2db75fd2-62f7-435b-9977-23eebab54951"} target='_blank'>Download Hibori here (android only for now)</Link>
  </li>
</ul>
    
  </div>
    
  </div>
    </div>
}