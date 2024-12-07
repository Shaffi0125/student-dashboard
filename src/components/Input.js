import { CalendarDays, SquareCheck, Trophy } from 'lucide-react'
import Image from 'next/image'


const Input = ({rank, percentile, score}) => {
  return (
    <div className=' border p-7 mt-4'>
      <p className='font-bold pb-5  '>Quick Statistics</p>
      <div className='flex justify-around w-full'>
        <div className='flex items-center pr-4 gap-2 border-r'>
          <div className=' border rounded-full overflow-hidden p-1.5 bg-gray-300'><Trophy /></div>
          <div>
            <p>{rank}</p>
            <p>Your Rank</p>
          </div>
        </div>
        <div className='flex items-center pr-4 gap-2 border-r'>
          <div className=' border rounded-full overflow-hidden p-1.5 bg-gray-300'><CalendarDays /></div>
          <div>
            <p>{percentile}</p>
            <p>Percentile</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className=' border rounded-full overflow-hidden p-1.5 bg-gray-300'><SquareCheck /></div>
          <div>
            <p>{score}</p>
            <p>Correct Answers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input
