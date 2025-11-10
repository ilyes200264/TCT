"use client";

import {
  LineChart as RechartsLineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LineChartProps<T extends Record<string, unknown>> {
  title: string;
  data: T[];
  xKey: keyof T;
  yKey: keyof T;
  yLabel?: string;
}

export function LineChart<T extends Record<string, unknown>>({
  title,
  data,
  xKey,
  yKey,
  yLabel,
}: LineChartProps<T>) {
  return (
    <Card className="h-[320px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        {data.length ? (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={data}
              margin={{ top: 10, right: 20, bottom: 0, left: -10 }}
            >
              <CartesianGrid stroke="rgba(148, 163, 184, 0.12)" strokeDasharray="4 8" />
              <XAxis
                dataKey={xKey as string}
                stroke="rgba(148, 163, 184, 0.45)"
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="rgba(148, 163, 184, 0.45)"
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) =>
                  typeof value === "number" ? `$${value.toLocaleString()}` : `${value}`
                }
                label={
                  yLabel
                    ? {
                        value: yLabel,
                        angle: -90,
                        position: "insideLeft",
                        fill: "rgba(148, 163, 184, 0.6)",
                      }
                    : undefined
                }
              />
              <Tooltip
                cursor={{ strokeDasharray: "4 4" }}
                contentStyle={{
                  background: "#0f172a",
                  borderRadius: "12px",
                  border: "1px solid rgba(96,165,250,0.2)",
                  color: "#f8fafc",
                }}
              />
              <Line
                type="monotone"
                dataKey={yKey as string}
                stroke="#60a5fa"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No data available.
          </div>
        )}
      </CardContent>
    </Card>
  );
}

