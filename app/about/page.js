export default function About(){
  return (
    <div className="min-h-screen bg-base-100 text-base-content grid grid-cols-1 justify-items-center content-center p-4">
      <div className='max-w-screen-md text-center'>
        <h3 className="text-4xl font-title font-bold">About me</h3>
        <p className="py-2">
          As a Senior Ruby on Rails Developer, I have extensive experience in software development and a deep understanding of the Ruby on Rails framework. I am passionate about creating high-quality software and have an unwavering commitment to excellence, which has earned me a reputation as a natural leader and mentor to junior developers.
        </p>
        <p className="py-2">
          Throughout my career, I have consistently delivered complex projects on time and within budget, utilizing agile methodologies to manage projects efficiently. I am a creative problem solver and able to think outside of the box to come up with innovative solutions to complex problems.
        </p>
        <p className="py-2">
          I am highly skilled in working with HTML, CSS, and JavaScript, and have a deep understanding of various databases, including MySQL and PostgreSQL. I am always seeking out the latest trends and technologies in software development, and am constantly looking for new ways to improve my skills and stay ahead of the curve.
        </p>
        <p className="py-2">
          As a Senior Ruby on Rails Developer, I am highly collaborative and thrive in a team environment. I work effectively with stakeholders across different departments and am skilled in communicating technical concepts to non-technical stakeholders.
        </p>
        <p className="py-2">
          Above all, I am passionate about creating software that makes a difference and am committed to using my skills and experience to make a positive impact on the world.
        </p>
      </div>

      <div className='max-w-screen-md text-left pt-2'>
        <h3 className="text-4xl font-title font-bold text-center">Tech Stack</h3>
        <div className="flex flex-row bg-base justify-between px-4 text-xl">
          <div className="flex flex-col p-10">
            <span className="font-bold">DevOps</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div className="flex flex-col p-10">
            <span className="font-bold">Backend</span>
            <a className="link link-hover">Ruby</a>
            <a className="link link-hover">Rails</a>
            <a className="link link-hover">Sinatra</a>
            <a className="link link-hover">PostgreSQL</a>
            <a className="link link-hover">MySQL</a>
            <a className="link link-hover">Redis</a>
            <a className="link link-hover">DynamoDB</a>
          </div>
          <div className="flex flex-col p-10">
            <span className="font-bold">Frontend</span>
            <a className="link link-hover">HTML</a>
            <a className="link link-hover">CSS</a>
            <a className="link link-hover">JavaScript</a>
            <a className="link link-hover">React</a>
            <a className="link link-hover">Angular</a>
          </div>
          <div className="flex flex-col p-10">
            <span className="font-bold">Frontend</span>
            <a className="link link-hover">HTML</a>
            <a className="link link-hover">CSS</a>
            <a className="link link-hover">JavaScript</a>
            <a className="link link-hover">React</a>
            <a className="link link-hover">Angular</a>
          </div>
        </div>
      </div>
    </div>
  )
}
