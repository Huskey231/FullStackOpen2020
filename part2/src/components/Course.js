import React from 'react'

const Course = ({courses}) => {

    return(
        <div>
            {courses.map(course =>
                <CourseRender key={course.id} course={course} />
            )}
        </div>
    )
}

const Part = ({part}) => {
    return(
        <li>{part.name} {part.exercises}</li>
    )
}

const CourseRender = ({course}) => {
    const totalExercises = course.parts.reduce(function(sum, part) {
        console.log(part.exercises)
        return sum + part.exercises
    }, 0)
    
    return(
        <div>
            <h3>{course.name}</h3>
            <ul>
                {course.parts.map(part =>
                    <Part key={part.id} part={part} />
                )}
            </ul>
            <b>Total of {totalExercises} excersises</b>
        </div>
    )
}

export default Course