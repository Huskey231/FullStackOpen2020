import React from 'react'

const Course = ({course}) => {
    const courseParts = course.parts
    const totalExercises = courseParts.reduce(function(sum, coursePart) {
        console.log(sum)
        return sum + coursePart.exercises
    }, 0)
    console.log(totalExercises)

    return(
        <div>
            <h3>{course.name}</h3>
            <ul>
                {courseParts.map(part => 
                    <Part key={part.id} part={part} />
                )}
            </ul>
            <b>Total of {totalExercises} excersises</b>
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