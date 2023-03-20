import React, { useState, useEffect, Fragment } from "react";
import aboutMe from '../../pages/api/about_me'
import skills from '../../pages/api/skills'
import contactInfo from '../../pages/api/contact_info'

export default function About(){
  return (
    <div id="about" className="min-h-screen bg-base-100 text-base-content grid grid-cols-2 max-sm:grid-cols-1 justify-items-center content-center p-2">
      <div className='max-w-screen-md text-left'>
        <h3 className="text-4xl max-md:text-2xl font-title font-bold">About me</h3>
        {
          aboutMe && aboutMe.map(({paragraph})=> {
            return <p key={paragraph} className="py-2">{paragraph}</p>
          })
        }
      </div>
      <div className=' card bg-secondary text-secondary-content max-w-screen-md pt-2'>
        <h3 className="text-4xl max-md:text-2xl font-title font-bold px-4">Tech Stack</h3>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 justify-between px-4 text-xl max-md:text-base">
          {
            skills && skills.map(({category, skills})=>{
              return <div key={category} className="flex flex-col p-4 max-md:p-2">
                <span className="font-bold text-primary">{category}</span>
                {
                  skills.map((skill)=> <span key={skill}>{skill}</span> )
                }
              </div>
            })
          }
        </div>
        <div className="card lg:card-side bg-neutral shadow-xl card-compact rounded-t-none">
          <div className="card-body text-neutral-content">
            <div className="grid grid-cols-2 py-2 max-lg:text-sm text-xl">
              <h3 className="text-4xl max-md:text-2xl font-title font-bold col-span-2 pb-2">Contact Info</h3>
              {
                contactInfo && contactInfo.map(({title, content, url})=>{

                  return <Fragment key={title}>
                    <span className="pl-4 max-md:pl-2">{title}:</span>
                    <a className={url && "underline underline-offset-4"} href={url && "/resume-cesar-gomez.pdf"}>{content}</a>
                  </Fragment>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
