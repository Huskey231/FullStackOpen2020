import React from 'react'

const Course = ({course}) => {
    const courseTitle = course.name
    const courseParts = course.parts
    console.log(course.parts)
    return(
        <div>
            <h3>{course.name}</h3>
            <ul>
                {courseParts.map(part => 
                    <Part key={part.id} part={part} />
                )}
            </ul>
        </div>
    )
}

const Part = ({part}) => {
    console.log({part})
    return(
        <li>{part.name} {part.exercises}</li>
    )
}

export default Course