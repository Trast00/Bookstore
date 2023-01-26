import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/* Create a cirlcular progress bar
install : npm i react-circular-progressbar */
function CircularProgressBar(props) {
  const { progress } = props
  return (
    <div style={{ width: 80, marginRight: 12}}>
      <CircularProgressbar value={progress}/>
    </div>
  )
}

export default CircularProgressBar