'use client'
import { useState } from "react";
import './page.css';
import { useRouter } from "next/navigation";
function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}

export default function Home() {
  const [opacity, set_opacity] = useState(1);
  const router = useRouter();
  let transition = 600;
  async function next_page(){
    set_opacity(0);
    await timeout(transition);
    //@ts-expect-error
    router.push(location, undefined, { shallow: true });
    router.replace('/projects/about');
    await timeout(400);
    window.location.reload();
  }
  return (
    <main>
      <div 
      style={{transition: transition + "ms", opacity: opacity.toString()}}
      onClick={next_page}>


        <h1 className="header">Ori&apos;s</h1>
        <h1 className="header2">Portfilio</h1>


    <div className="animation-container">
      <div className="lightning-container">
        <div className="lightning white"></div>
        <div className="lightning red"></div>
      </div>
      <div className="boom-container">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape triangle big yellow"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      <div className="boom-container second">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
    </div>
        <p className="clicktomain">Click Anywhere to begin!</p>
      </div>
    </main>
  );
}
