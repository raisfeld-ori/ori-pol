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
        is intrested in art, and naama is 9 years old and is intrested in youtube. most of my work in the last 2 years
        has mostly dealt with programming, so most of it is in the CV.
    </p>
    </div>
    <div className="CV">
      <h1 className="CV-head">CV</h1>
      <p className="CV-text">
        during the first year, I started by almost not knowing anything about programming. I first started by
        just looking up "python" on youtube and finding a 4 hour course on how to program in python. from there
        I realized that I'm annoyed at the fact that everything is done manually, since now that I know how to program,
        it feels like everything can be done better by programming it. so i looked up "python app", and found turtle,
        which is NOT a module to make apps, but a module to draw using code. I didn't know this, so i spent months developing
        the project "class classifacation" (which is the mini project and autumn project of the first year). after I realized
        that turtle isn't a drawing module, i moved on to Qt, which is an actual GUI module AND my now favorite company/group.
        I later used Qt for the demo app "visual databases" (summer project) which later became the insparation for Ksed, which
        is my biggest project ever, and something I am very proud of. In the second year I moved on to compilers and interperters,
        which you can basically think of as "programming languages". I made 2 of my own programming languages, 1 interperter that 
        was pure  (meaning it used no external module), and another compiler that used some modules for everything. 
        the first one is on my github, and the second one was lost when I accidentally installed debian wrong. 
        because I lost the project I worked on for so long, I gave up on compilers and didn't know where to continue, so I
        looked back and realized the potential of "visual databases", a project that many people told me they needed for their
        personal lives, and even used a couple times. So I turned it into my biggest project ever "Ksed" (spring / summer project),
        which like i said before, I am very proud of. alongside those proejcts, i also participated in the schools hackathons,
        where, in one of them, we (me, aviv segal, ariel elkalasi, and eshel nagar) ended up winning 3,000₪! it's a project
        called "Tiod" that we are going to work on this summer break and are planning to kickstart in the start of this year.
        And that is every large thing I achived in the last 2 years, but alongside that, i also have some other failed/small projects
        that I worked on. there were 2 plans for updating the schools website from wix, the first one was with tio yoshihara, the 
        second one was with ariel elkalasi. both of those projects helped me learn how to work in a team and how to design websites.
        and I also learned how to create vanila, sveltekit and react websites. which later became crucial in making my own projects
        and making a website to them (like Ksed, tiod, and visual databases).
      </p>
    </div>
    </div>
    <ul className="links">
  
      <li className="link">
        <Link href={"#"}>LinkedIn</Link>
      </li>
      <li className="link"><Link href={"#"}>Github</Link></li>
      <li className="link"><Link href={"#"}>Facebook</Link></li>
    </ul>
    </div>
}