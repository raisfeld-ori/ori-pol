import Link from "next/link";


export default function socials(){
  
  return <div className="container">
    <h1 className="head">About me</h1>
    <div className="descriptions">
    <div className="aboutme">
     <h1 className="Whoami">Who am i?</h1>
    <p className="description">
        Hi! my name is ori raisfeld, and i'm a student at the highschool chamama.
        I first tried learning how to program first a couple. years ago, but after 
        around a month or so of trying and enjoying HTML, I was stopped by
        things required by school (tests, homework etc). even though i did fail, this gave
        me a passion for programming and started my goal of becoming a programmer.
        when i met this school, I saw this as an opportunity to finaly learn how to program instead
        of doing the same things I learned 2 years ago, with 0 passion. with this, i also have my hobby, 
        Jidokwan, a korean martial art that was made by korea and japan togather, 
        which later became taekwando and karate. this is long to explain, so i just prefer 
        to say i do karate instead. besides this, i also have 2 sisters, noya and naama, noya is 14 years old and 
        is intrested in art, and naama is 9 years old and is intrested in youtube.
    </p>
    </div>
    <div className="CV">
      <h1 className="CV-head">CV</h1>
      <p className="CV-text">
        I started programming last year, with no prior knowlage. In fact, in the start of the first year,
        I started by looking up "python" (the only programming language I knew) into youtube and seeing what could
        I find. Throughout the entire start of my career, I had 0 knowlage of what to do, but I think this is a good
        thing. because I didn't know anything, I ended up using the absulote worse tools for the job, in every job,
        which forced me to spend hours reserching and learning how to solve most issues I come accross. Because of
        this weird path, I ended up as a fullstack developer with the skills to completly make an app from scratch,
        using the languages python, rust, javascript/typescript and whatever tool I thought would fit for the job.
        I also tried to challange myself every once in a while with a difficult challange in something I am not familiar
        with, like game development in c#, making AI models with tensorflow and even made compilers with C, python and rust.
      </p>
    </div>
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