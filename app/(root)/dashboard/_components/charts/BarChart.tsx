import { ResponsiveBar } from "@nivo/bar";
import { ClassAttributes, HTMLAttributes } from "react";

export default function BarChart(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", traffic: 111 },
          { name: "Feb", traffic: 157 },
          { name: "Mar", traffic: 129 },
          { name: "Apr", traffic: 187 },
          { name: "May", traffic: 119 },
          { name: "Jun", traffic: 20 },
        ]}
        keys={["traffic"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#9f75ff"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
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
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A grouped bar chart"
      />
    </div>
  );
}
