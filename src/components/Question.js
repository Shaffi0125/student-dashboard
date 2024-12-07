import React from 'react'
import ChartPie from './ChartPie'

const Question = (props) => {
  return (
    <div className='border p-6'>
      <div className=' flex justify-between'>
      <p className=' font-bold mb-4'>Question Analysis</p>
      <p className=' font-bold text-blue-500'>{props.score}/15</p>
      </div>
      <p className=' mb-4'> <b>You scored {props.score} question correct out of 15.</b> However it still needs some improvements</p>
      
      <ChartPie score={props.score}/>
    </div>
  )
}

export default Question
