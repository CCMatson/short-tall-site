// import React from 'react'
import ProjectItem from "./ProjectItem"
import B52Img from '../assets/ShortAndTallB52.jpg'
import RumorsImg from '../assets/ShortAndTallRumors.jpg'
import ScissorImg from '../assets/ShortAndTallScissor.jpg'
import RoxanneAndLysol from '../assets/ShortAndTallRoxanneAndLysol.jpg'
// import Logo from '../assets/Logo.jpg'

const Projects = () => {
  return (
    <div id='projects' className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-customBlue">Recent Projects</h1>
      <p className="text-center py-8" >
        This is where we will put some copy to summarize recent work. Who is Short and Tall Productions, and what do they do? Islands in the stream. That is what we are. No one in between.How can we be wrong? Sail away with me. To another world. And we rely on each other, ah ha. From one lover to another, ah ha.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={ScissorImg} title='Scissor Sisters Show'/>
        <ProjectItem img={RumorsImg} title='Rumors Show'/>
        <ProjectItem img={B52Img} title='The B 52s Show'/>
        <ProjectItem img={RoxanneAndLysol} title='The Dream Team'/>
      </div>
    </div>
  )
}

export default Projects