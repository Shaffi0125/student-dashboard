"use client"

import React, { useState } from 'react'
import Input from './Input'
import Graph from './Graph'
import Syllabus from './Syllabus'
import Question from './Question'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { MoveRight } from 'lucide-react'
  

const Skill = () => {

    const [rank, setRank] = useState(1);
    const [percentile, setPercentile] = useState(1);
    const [score, setScore] = useState(3);
    const [rankInput, setRankInput] = useState(1);
    const [percentileInput, setPercentileInput] = useState(1);
    const [scoreInput, setScoreInput] = useState(1);
    const [showInput, setShowInput] = useState(false);

    const handleSave = ()=>{
        if(scoreInput > 15){
            alert("Score should be less than or equal to 15");
            return;
        } else if(scoreInput < 0){
            alert("Minimum score is 0");
            return;
        } else if(percentileInput < 0){
            alert("Minimum percentile is 0");
            return;
        } else if(percentileInput > 100){
            alert("Percentile should be less than or equal to 100");
            return;
        } else if(rankInput < 0){
            alert("Minimum Rank is 0");
            return;
        }
        setRank(rankInput);
        setPercentile(percentileInput)
        setScore(scoreInput)
        setShowInput(false)
    }

    return (
        <div className=' pt-6 pl-8 pr-6'>
            <p>Skill Test</p>
            <div className=' flex gap-4 flex-col sm:flex-row'>
                <div className=' flex flex-col gap-4 max-w-[600px]'>
                    <div>
                        <div className=' border flex p-6 items-center gap-4'>
                            <div className='relative h-11 w-11'><Image className=' absolute' src={'/html-logo.png'} alt="html-logo" fill /></div>
                            <div>
                                <p className='font-bold'>Hyper Text Markup Language</p>
                                <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                            </div>
                            <Dialog>
                                <DialogTrigger onClick={()=>setShowInput(true)} className='font-bold bg-blue-700 p-2 rounded-lg text-white'>Update</DialogTrigger>
                                {showInput && <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className=" flex justify-between items-center mb-4">
                                            Update Scores 
                                            <div className='relative h-8 w-8'><Image className=' absolute' src={'/html-logo.png'} alt="html-logo" fill /></div>
                                        </DialogTitle>
                                        <div className=' grid grid-cols-[20px_310px_120px] gap-3'>
                                            <div className='border flex justify-center rounded-full bg-blue-950 text-white'> 1 </div>
                                            <div> Update your <b>Rank</b> </div>
                                            <input className='border border-blue-500 pl-2 rounded-sm' value={rankInput} type='number' onChange={(e)=>{setRankInput(e.target.value)}}></input>
                                            <div className='border flex justify-center rounded-full bg-blue-950 text-white'> 2 </div>
                                            <div> Update your <b>Percentile</b> </div>
                                            <input className='border border-blue-500 pl-2 rounded-sm' type='number' value={percentileInput} onChange={(e)=>{setPercentileInput(e.target.value)}}></input>
                                            <div className='border flex justify-center rounded-full bg-blue-950 text-white'> 3 </div>
                                            <div> Update your <b>current score (out of 15)</b> </div>
                                            <input className='border border-blue-500 pl-2 rounded-sm' type='number'value={scoreInput} onChange={(e)=>{setScoreInput(e.target.value)}}></input>
                                        </div>
                                        <div className='flex justify-end gap-4 pt-4'>
                                        <button onClick={()=>{setShowInput(false)}} className='border p-2 rounded-sm text-blue-950 text-xs font-bold border-black'>Cancel</button>
                                        <button onClick={handleSave} className='border p-3 rounded-sm bg-blue-950 text-white flex gap-5'>Save <MoveRight/> </button>
                                        </div>
                                    </DialogHeader>
                                </DialogContent>}
                            </Dialog>
                        </div>
                        <Input score={score} percentile={percentile} rank={rank} />
                    </div>
                    <Graph percentile={percentile}/>
                </div>
                <div className=' flex flex-col gap-4 flex-grow'>
                    <Syllabus />
                    <Question score={score}/>
                </div>
            </div>
        </div>
    )
}

export default Skill
