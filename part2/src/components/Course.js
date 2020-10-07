import React from 'react'

const Course = ({course}) => {
    const courseTitle = course.name
    return(
        <div>
            <h3>{course.name}</h3>
        </div>
    )
}

const Part = () => {

}

export default Course