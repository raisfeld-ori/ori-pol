import Link from "next/link";


export default function socials(){
  return <div className="container">
    <h1 className="head"> </h1>
    <div className="aboutme">
     <h1 className="Whoami">Who am I?</h1>
    <p className="description">
        My name is Ori raisfeld and I&apos;m a student at the highschool chamama.
        I first tried learning how to program first a couple years ago. but I soon realized 1 thing,
        school itself was holding me back from actually doing so. Even though I knew this was a good idea,
        and that I should continue doing so, it felt nearly impossible to both learn how to program and be able
        to finish homework and get good grades, so eventually I had to give up on programming despite liking it so much.
        the same thing happend again with things like learning math, getting a better english accent. I eventually
        was about to just give up on trying new things, but at that time I also saw the highschool chamama, here I could
        focus on doing those sorts of things instead. Using this place I started my professional career in programming,
        which led me to where I am today.
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