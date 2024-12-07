"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { ChartPieIcon } from "lucide-react"


export function ChartPie({score}) {

  const chartData = [
    { main: "correct", value: parseInt(score), fill: "#2353b9" },
    { main: "wrong", value: 15-parseInt(score), fill: "#929db4" },
  ]
  const chartConfig = {
    value: {
      label: "Value",
    },
    "correct": {
      label: "Correct answers",
      color: "hsl(var(--chart-1))",
    },
    "wrong": {
      label: "Wrong answers",
      color: "hsl(var(--chart-2))",
    },
  }

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, []);

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0 relative">
        <div className=" absolute flex items-center top-0 left-0 h-full w-full justify-center">
          <ChartPieIcon/>
        </div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="main"
              innerRadius={60}
              strokeWidth={5}
            >
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}

export default ChartPie;