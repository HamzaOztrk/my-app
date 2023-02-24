import React from 'react'

import LessonCard from '../components/lessoncard/LessonCard'
import { data } from '../helper/data'
import "../components/lessoncard/Lesson.css"
import "../App.css"

const Lesson = () => {
  return (
    <div className='lesson-container'>

        
        
        {data.map((item,index)=><LessonCard {...item} key={index}/> )}
    </div>
  )
}

export default Lesson