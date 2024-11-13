"use client";

import { countByDistrict, countByType } from "@/api/TreeApis";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Summary } from "@/model/Summary";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export const SummaryComponent = () => {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [diagram, setDiagram] = useState<string>("type");

  useEffect(() => {
    if (diagram == "type") {
      countByDistrict().then((res) => {
        setSummaries(res);
      });
    } else {
      countByType().then((res) => {
        setSummaries(res);
      });
    }
  }, [diagram]);

  const handleDiagramChange = (value: string) => {
    setDiagram(value);
  };
  return (
    <Card className="mx-auto max-w-8xl">
      <CardHeader>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value={diagram}
              onValueChange={handleDiagramChange}
            >
              <DropdownMenuRadioItem value="type">Type</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="district">
                District
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={summaries}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="entity"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 9)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default SummaryComponent;
