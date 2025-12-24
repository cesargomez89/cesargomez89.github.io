import React, { Fragment } from "react";
import aboutMe from '../../pages/api/about_me'
import skills from '../../pages/api/skills'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* About Text */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </span>
          </h2>

          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            {aboutMe && aboutMe.map(({ paragraph }, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex-1 w-full">
          <div className="glass-card p-8 hover:bg-slate-900/70 transition-colors">
            <h3 className="text-2xl font-bold mb-8 text-white">Technical Arsenal</h3>

            <div className="space-y-8">
              {skills && skills.map(({ category, skills }) => (
                <div key={category}>
                  <h4 className="text-blue-400 font-semibold mb-3 text-sm uppercase tracking-wider">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-800/50 hover:bg-blue-500/20 text-slate-300 hover:text-white rounded-full text-sm transition-all border border-slate-700/50 hover:border-blue-500/50 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
