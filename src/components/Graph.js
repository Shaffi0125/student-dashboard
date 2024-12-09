import { ChartLine } from 'lucide-react'
import React from 'react'
import { Chart } from './Chart'

const Graph = ({percentile}) => {
  return (
    <div className=' border p-7 rounded-md'>
     <p className=' font-bold mb-4'>Comparison Graph</p>
     <div className=' flex items-center gap-4'>
     <p className=' mb-4'> <b>You scored {percentile}% percentile</b> which is lower than the average percentile 72% percentile of all the engineers who took this assessment.</p>
      <div className=' border rounded-full overflow-hidden p-1.5 bg-gray-300 min-h-9 min-w-9'><ChartLine className=' min-h-6 min-w-6'/></div>
     </div>
     <Chart percentile={percentile}/>
    </div>
  )
}

export default Graph
