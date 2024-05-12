import example from './screenshot.png';
import Image from "next/image"
export default function Page(){
  return <div className="container">
  <h1 className="head">PDF editor</h1>
  <p className="description">
    As a smaller project, me and amos nagar made a PDF editor, with me on fullstack, and amos
    on frontend. We created a PDF file editor that can add, remove and edit images, texts etc,
    because we felt adobe was too large in the subject of PDFs, and needed more competition.
    The hardest part about this project was the fact that there is no module for editing PDFS,
    so i manually created one by editing the actual bytes of the file and using a LOT of reserch.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={example} alt=""/>
    </div>
    
    <ul className="linksprj">
  

</ul>
    
  </div>
  </div>

  
}