export default function About(){
  return (
    <div id="about" className="min-h-screen bg-base-100 text-base-content grid grid-cols-2 max-sm:grid-cols-1 justify-items-center content-center p-2">
      <div className='max-w-screen-md text-left'>
        <h3 className="text-4xl max-md:text-2xl font-title font-bold">About me</h3>
        <p className="py-2">
          As a Senior Ruby on Rails Developer, I have extensive experience in software development and a deep understanding of the Ruby on Rails framework. I am passionate about creating high-quality software following the best practices.
        </p>
        <p className="py-2">
          Throughout my career, I have consistently worked in different projects, utilizing agile methodologies to manage projects efficiently. I am a creative problem solver and able to think outside of the box to come up with innovative solutions to complex problems.
        </p>
        <p className="py-2">
          I am highly skilled in working with HTML, CSS, and JavaScript, and have a deep understanding of various databases, including MySQL and PostgreSQL. I am always seeking out the latest trends and technologies in software development, and am constantly looking for new ways to improve my skills and stay ahead of the curve.
        </p>
        <p className="py-2">
          As a developer, I am highly collaborative and thrive in a team environment. I like to do pair programming and mentoring other members of the team. I work effectively with stakeholders communicating technical concepts to non-technical stakeholders.
        </p>
        <p className="py-2">
          Above all, I am passionate about writting code that makes a difference and am committed to using my skills and experience to make a positive impact on the projects I work on.
        </p>
      </div>
      <div className=' card bg-secondary text-secondary-content max-w-screen-md pt-2'>
        <h3 className="text-4xl max-md:text-2xl font-title font-bold px-4">Tech Stack</h3>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 justify-between px-4 text-xl max-md:text-base">
          <div className="flex flex-col p-6 max-md:p-2">
            <span className="font-bold text-primary">DevOps</span>
            <span>AWS</span>
            <span>Heroku</span>
            <span>Docker</span>
            <span>Jenkins</span>
            <span>Gitlab CI/CD</span>
          </div>
          <div className="flex flex-col p-6 max-md:p-2">
            <span className="font-bold text-primary">Backend</span>
            <span>Ruby</span>
            <span>Rails</span>
            <span>Sinatra</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Redis</span>
            <span>DynamoDB</span>
            <span>ElasticSearch</span>
          </div>
          <div className="flex flex-col p-6 max-md:p-2">
            <span className="font-bold text-primary">Frontend</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Stimulus</span>
            <span>Angular</span>
            <span>Bootstrap</span>
            <span>TailwindCSS</span>

          </div>
          <div className="flex flex-col p-6 max-md:p-2">
            <span className="font-bold text-primary">Social</span>
            <span>Collaboration</span>
            <span>Mentoring</span>
            <span>Adaptability</span>
            <span>Conflict Resolution</span>
          </div>
        </div>
        <div className="card lg:card-side bg-neutral shadow-xl card-compact rounded-t-none">
          <div className="card-body text-neutral-content">
            <div className="grid grid-cols-2 py-2 max-lg:text-sm text-xl">
              <h3 className="text-4xl max-md:text-2xl font-title font-bold col-span-2 pb-2">Contact Info</h3>
              <span>Full name:</span>      <span>Cesar Alberto Gomez Carrillo</span>
              <span>Location:</span>       <span>Colima, Mexico</span>
              <span>Phone number:</span>   <a className="underline underline-offset-4" href="tel:+523121245820">+523121245820</a>
              <span>E-mail:</span>         <a className="underline underline-offset-4" href="mailto:cesargomez89@gmail.com">cesargomez89@gmail.com</a>
              <span>Linkedin:</span>       <a className="underline underline-offset-4" href="https://www.linkedin.com/in/cesargomez89/">cesargomez89</a>
              <span>Resume:</span>         <a className="underline underline-offset-4" href="/resume-cesar-gomez.pdf">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
