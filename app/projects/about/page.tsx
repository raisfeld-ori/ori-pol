import Link from "next/link";


export default function socials(){
  return <div className="container">
    <h1 className="head"> </h1>
    <div className="aboutme">
     <h1 className="Whoami">Who am I?</h1>
    <p className="description">
        My name is ori raisfeld, I am a computer science student at the highschool chamama.
        <br></br>
        <br></br>
        <h2>Skills</h2>Fullstack, Data science, Web Scraping, Game development
        <br></br>
        <br></br>
        <h2>Programming Languages</h2>Rust, Python, C, C++, React / Typescript / Jacascript, React Native
        <br></br>
        <br></br>
        <br></br>
    </p>
    </div>
    <div className="CV">
      <h1 className="head resume"><Link href={"/Ori.pdf"}>My Resume</Link></h1>
    </div>
    <ul className="links">
  
      <li className="link">
        <Link href={"https://www.linkedin.com/in/ori-raisfeld-422392264/"}>LinkedIn</Link>
      </li>
      <li className="link"><Link href={"https://github.com/raisfeld-ori"}>Github</Link></li>
      <li className="link"><Link href={"discordapp.com/users/668885967607955487"}>Discord</Link></li>
    </ul>
    </div>
}