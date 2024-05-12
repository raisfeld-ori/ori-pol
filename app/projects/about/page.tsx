import Link from "next/link";


export default function socials(){
  
  return <div className="container">
    <h1 className="head">Quick CV:</h1>
    <p className="description">My name is Ori, I live in hacarmel 70 kfar sava, and I focus on the subject of fullstack, and I have been programming for 2 years</p>
    <div className="aboutme">
     <h1 className="Whoami">Who am I?</h1>
    <p className="description">
        I&apos;m a student at the highschool chamama.
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
      <h2 className="CV-minor">skills:</h2>
      <p className="CV-text">fullstack (5/5), rust (4/5), python (5/5), react (4/5), react native (3/5), html/css/javascript (4/5), 
      game development (2/5), data science (3/5), computer science (2/5), frontend (3/5), backend (4/5), databases (5/5), servers (3/5),
      Sveltekit (2/5), Figma/UX (3/5), Qt (3/5), leading a team (4/5)
      </p>
      <h2 className="CV-minor">Education:</h2>
      <p className="CV-text">I learned using the Open-university, free code camp and youtube channels. 
      I also finished CS-50, Campus-il courses  (in C, cyber security and computer science), 
      I&apos;m also doing a degree at the Open university in computer science. But, most of my learning has been self taught,
      meaning I found something that I consider interesting, learn the basics of how it works, and then spend a long time
      </p>
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