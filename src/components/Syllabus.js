import React from 'react'
import { Progress } from "@/components/ui/progress"


const Syllabus = () => {
    return (
        <div className=' border p-6 rounded-md'>
            <p className=' font-bold mb-6'>Syllabus Wise Analysis</p>
            <p className=' mb-2'>HTML Tools, Forms, History</p>
            <div className=' flex gap-2 items-center'>
            <Progress className="bg-blue-200 mb-6" classNameMain="bg-blue-400" value={80} />
            <p>80%</p>
            </div>
            <p className=' mb-2'>Tags & References in HTML</p>
            <div className=' flex gap-2 items-center'>
            <Progress className="bg-orange-200 mb-6" classNameMain="bg-orange-400" value={60} />
            <p>60%</p>
            </div>
            <p className=' mb-2'>Tables & References in HTML</p>
            <div className=' flex gap-2 items-center'>
            <Progress className="bg-red-200 mb-6" classNameMain="bg-red-400" value={24} />
            <p>24%</p>
            </div>
            <p className=' mb-2'>Tables & CSS Basics</p>
            <div className=' flex gap-2 items-center'>
            <Progress className="bg-green-200 mb-6" classNameMain="bg-green-400" value={96} />
            <p>96%</p>
            </div>

        </div>
    )
}

export default Syllabus
