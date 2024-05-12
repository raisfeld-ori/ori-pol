import Link from "next/link";


export default function socials(){
  
  return <div className="container">
    <h1 className="head">About me</h1>
    <div className="aboutme">
     <h1 className="Whoami">Who am i?</h1>
    <p className="description">
        Hi! my name is ori raisfeld, and i&apos;m a student at the highschool chamama.
        I first tried learning how to program first a couple. years ago, but after 
        around a month or so of trying and enjoying HTML, I was stopped by
        things required by school (tests, homework etc). even though i did fail, this gave
        me a passion for programming and started my goal of becoming a programmer.
        when i met this school, I saw this as an opportunity to finaly learn how to program instead
        of doing the same things I learned 2 years ago, with 0 passion. with this, i also have my hobby, 
        Jidokwan, a korean martial art that was made by korea and japan togather, 
        which later became taekwando and karate.
    </p>
    </div>
    <div className="CV">
      <h1 className="CV-head">CV:</h1>
      <h2 className="CV-minor">example</h2>
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