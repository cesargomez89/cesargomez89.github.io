import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-base-200">
      <div className="grid grid-cols-2 px-4">
        <div className="py-4">
          <h3 className="text-2xl font-bold text-center">About me</h3>
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

        <div className="py-4">
          <h3 className="text-2xl font-bold text-center">Tech Stack</h3>
          <div className="footer footer-center grid grid-cols-3 p-10 bg-base">
            <div>
              <span className="footer-title">Backend</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div>
              <span className="footer-title">Frontend</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div>
              <span className="footer-title">DevOps</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
