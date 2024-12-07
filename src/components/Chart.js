"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"

const chartConfig = {
  noOfStudents: {
    label: "numberOfStudent : ",
    color: "hsl(var(--chart-1))",
  },
}

export function Chart({percentile}) {

  const [chartData, setChartData] = useState([
    { percentile: "0", noOfStudents: 5 },
    { percentile: "25", noOfStudents: 6 },
    { percentile: "50", noOfStudents: 3 },
    { percentile: "75", noOfStudents: 4 },
    { percentile: "100", noOfStudents: 2 },
  ])

  useEffect(()=>{
    addData();
  },[percentile])

  const addData=()=>{
    setChartData((prev)=>{
      let found = false;
      for(let i = 0;i < prev.length;i++){
        if(prev[i].percentile === percentile.toString()){
          prev[i].noOfStudents += 1;
          found = true;
          break;
        }
      }
      if(found){
        return prev;
      } else{
        prev = [{percentile:percentile.toString(), noOfStudents:1},...prev]
        prev = prev.sort((a, b)=>a.percentile-b.percentile)
        return prev;
      }
    })
  }

  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="percentile"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="noOfStudents"
              type="natural"
              stroke="var(--color-noOfStudents)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Chart;