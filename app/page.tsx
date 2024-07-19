import React from 'react'
import Header from './header'
import Main from './main'
import ResumeLink from './resume-link'

export default function Page() {
  return (
    <div className="w-full h-full vertical-align-center">
      <div className="flex flex-col gap-12">
        <div>
          <Header></Header>
        </div>
        <div>
          <Main></Main>
        </div>
        <div>
          <ResumeLink></ResumeLink>
        </div>
      </div>
    </div>
  )
}
