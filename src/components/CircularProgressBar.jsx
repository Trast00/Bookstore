import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/* Create a cirlcular progress bar
install : npm i react-circular-progressbar */
function CircularProgressBar(props) {
  let { progress } = props
  if (!progress) {
    progress = defaultProgress[defaultIndex]
    if(defaultIndex === defaultProgress.length-1){
      defaultIndex = 0
    }
    defaultIndex+=1
  }
  return (
    <div className="flex-center row">
      <div  style={{ width: 100, marginRight: 12}}>
        <CircularProgressbar value={progress} 
        styles={ buildStyles({ /* buildStyle is imported */
          /* to make the border of the progrss round or not round (butt)*/
          strokeLinecap: 'butt',

          pathTransitionDuration: 0.5,

          /* color of the active bar of the progress */
          pathColor: `rgba(3, 77, 133, 0.8)`,
        })
        } />
      </div>
      
      <div className='flex-center column'>
          <p className='completed-rate'>{progress}%</p>
          <p>Completed</p>
        </div>
    </div>
  )
}
/* Generate random value for progress bar */
let defaultIndex = 0
const defaultProgress = [82, 21, 64, 94, 7, 16, 73, 0, 50]

export default CircularProgressBar