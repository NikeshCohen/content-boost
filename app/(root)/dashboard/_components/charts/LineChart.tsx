import { ResponsiveLine } from "@nivo/line";
import React, { ClassAttributes, HTMLAttributes } from "react";

function LineChart(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "23 Nov", y: 20 },
              { x: "24 Nov", y: 32 },
              { x: "25 Nov", y: 40 },
              { x: "26 Nov", y: 87 },
              { x: "27 Nov", y: 120 },
              { x: "28 Nov", y: 156 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#9f75ff"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#808080",
              },
            },
            ticks: {
              line: {
                stroke: "#808080",
              },
              text: {
                fill: "#808080",
              },
            },
          },
          grid: {
            line: {
              stroke: "#333333",
            },
          },
          tooltip: {
            container: {
              background: "#333333",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export default LineChart;
