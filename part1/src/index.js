import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  const currDate = new Date()
  return (
    <div>
      <p>Hello {props.name}, the current date is, {currDate.toString()}</p>
      <p>Keep an eye out for {props.weather} weather today.</p>
    </div>
  )
}

const Wack = (vars) => {
  const w = "wiggity"
  const ww = "wiggity wiggity"
  const wa = "wack"
  return (
    <div>
      <p>{vars.first} {w} {vars.second} {ww} {vars.third} {wa}.</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Howdy</h1>
      <Hello name="Bisquick" weather="stormy"/>
      <Wack first="Hella" second="really" third="wat"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))