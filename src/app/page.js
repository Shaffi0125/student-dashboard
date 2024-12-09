import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, ChartNoAxesColumn, StickyNote } from "lucide-react";
import React from 'react'

 //library = shadcn

export default function Home() {
  return (
    <div className=" flex flex-col h-screen">
      <Navbar />
        <Tabs defaultValue="skill" className="w-full h-full flex flex-col sm:flex-row ">
          <TabsList className=' pt-16 pr-4 border-r flex-col h-full items-start justify-start bg-white w-full sm:w-64'>
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-sky-100 gap-3 font-semibold data-[state=active]:text-blue-600 rounded-r-full text-base py-4 w-full justify-start pr-6"><ChartNoAxesColumn/> Dashboard</TabsTrigger>
            <TabsTrigger value="skill" className="data-[state=active]:bg-sky-100 gap-3 font-semibold data-[state=active]:text-blue-600 rounded-r-full text-base py-4 w-full justify-start pr-6"><Award/> Skill Test</TabsTrigger>
            <TabsTrigger value="internship" className="data-[state=active]:bg-sky-100 gap-3 font-semibold data-[state=active]:text-blue-600 rounded-r-full text-base py-4 w-full justify-start pr-6"><StickyNote/> Internship</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className=" flex-grow">Dashboard</TabsContent>
          <TabsContent value="skill" className=" flex-grow"><Skill/></TabsContent>
          <TabsContent value="internship" className=" flex-grow">Internship</TabsContent>
        </Tabs>
    </div>
  );
}
