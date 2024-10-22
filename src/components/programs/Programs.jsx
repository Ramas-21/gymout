import React from 'react'
import './programs.css'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className='nonFill-text'>Explore our</span>
            <span>Programs</span>
            <span className='nonFill-text'>to shape you</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program) =>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now</span><img src={rightArrow} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs;
