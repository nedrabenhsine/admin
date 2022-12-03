// import { ResponsiveLine } from "@nivo/line";
// import { ResponsivePie } from "@nivo/pie";
// import { ResponsiveBar } from "@nivo/bar";
// import { ResponsiveStream } from "@nivo/stream";

// const data1 = [
//   {
//     id: "Visters",
//     color: "hsl(69, 70%, 50%)",
//     data: [
//       {
//         x: "car",
//         y: 86,
//       },
//       {
//         x: "moto",
//         y: 175,
//       },
//       {
//         x: "bicycle",
//         y: 172,
//       },
//       {
//         x: "horse",
//         y: 163,
//       },
//     ],
//   },
// ];
// const data2 = [
//   {
//     id: "condidatures",
//     label: "condidatures",
//     value: 102,
//     color: "hsl(38, 70%, 50%)",
//   },
//   {
//     id: "accepted",
//     label: "accepted",
//     value: 541,
//     color: "hsl(240, 70%, 50%)",
//   },
//   {
//     id: "refused",
//     label: "refused",
//     value: 586,
//     color: "hsl(209, 70%, 50%)",
//   },
//   {
//     id: "a traiter",
//     label: "a traiter",
//     value: 4,
//     color: "hsl(74, 70%, 50%)",
//   },
//   {
//     id: "congé",
//     label: "congé",
//     value: 352,
//     color: "hsl(208, 70%, 50%)",
//   },
// ];
// const data3 = [
//   {
//     country: "AD",
//     "hot dog": 158,
//     "hot dogColor": "hsl(273, 70%, 50%)",
//   },
//   {
//     country: "AE",
//     "hot dog": 80,
//     "hot dogColor": "hsl(269, 70%, 50%)",
//   },
//   {
//     country: "AF",
//     "hot dog": 48,
//     "hot dogColor": "hsl(236, 70%, 50%)",
//   },
//   {
//     country: "AG",
//     "hot dog": 190,
//     "hot dogColor": "hsl(10, 70%, 50%)",
//   },
//   {
//     country: "AI",
//     "hot dog": 50,
//     "hot dogColor": "hsl(147, 70%, 50%)",
//   },
//   {
//     country: "AL",
//     "hot dog": 62,
//     "hot dogColor": "hsl(201, 70%, 50%)",
//   },
//   {
//     country: "AM",
//     "hot dog": 95,
//     "hot dogColor": "hsl(273, 70%, 50%)",
//   },
// ];
// const data4 = [
//   {
//     Raoul: 123,
//     Josiane: 180,
//     Marcel: 184,
//     René: 16,
//     Paul: 166,
//     Jacques: 110,
//   },
//   {
//     Raoul: 125,
//     Josiane: 141,
//     Marcel: 79,
//     René: 79,
//     Paul: 39,
//     Jacques: 113,
//   },
//   {
//     Raoul: 59,
//     Josiane: 19,
//     Marcel: 18,
//     René: 85,
//     Paul: 98,
//     Jacques: 106,
//   },
//   {
//     Raoul: 91,
//     Josiane: 93,
//     Marcel: 140,
//     René: 17,
//     Paul: 75,
//     Jacques: 180,
//   },
//   {
//     Raoul: 145,
//     Josiane: 24,
//     Marcel: 152,
//     René: 88,
//     Paul: 61,
//     Jacques: 94,
//   },
//   {
//     Raoul: 50,
//     Josiane: 161,
//     Marcel: 122,
//     René: 122,
//     Paul: 80,
//     Jacques: 14,
//   },
//   {
//     Raoul: 48,
//     Josiane: 25,
//     Marcel: 149,
//     René: 185,
//     Paul: 177,
//     Jacques: 99,
//   },
//   {
//     Raoul: 155,
//     Josiane: 129,
//     Marcel: 41,
//     René: 73,
//     Paul: 74,
//     Jacques: 114,
//   },
//   {
//     Raoul: 68,
//     Josiane: 181,
//     Marcel: 141,
//     René: 93,
//     Paul: 119,
//     Jacques: 95,
//   },
// ];

// export const MyResponsiveLine = () => (
//   <ResponsiveLine
//     data={data1}
//     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//     xScale={{ type: "point" }}
//     yScale={{
//       type: "linear",
//       min: "auto",
//       max: "auto",
//       stacked: true,
//       reverse: false,
//     }}
//     yFormat=" >-.2f"
//     curve="cardinal"
//     axisTop={null}
//     axisRight={null}
//     axisBottom={{
//       orient: "bottom",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "transportation",
//       legendOffset: 36,
//       legendPosition: "middle",
//     }}
//     axisLeft={{
//       orient: "left",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "count",
//       legendOffset: -40,
//       legendPosition: "middle",
//     }}
//     colors={{ scheme: "category10" }}
//     lineWidth={6}
//     pointSize={10}
//     pointColor={{ theme: "background" }}
//     pointBorderWidth={2}
//     pointBorderColor={{ from: "serieColor" }}
//     pointLabelYOffset={-12}
//     useMesh={true}
//     legends={[
//       {
//         anchor: "bottom-right",
//         direction: "column",
//         justify: false,
//         translateX: 100,
//         translateY: 0,
//         itemsSpacing: 0,
//         itemDirection: "left-to-right",
//         itemWidth: 80,
//         itemHeight: 20,
//         itemOpacity: 0.75,
//         symbolSize: 12,
//         symbolShape: "circle",
//         symbolBorderColor: "rgba(0, 0, 0, .5)",
//         effects: [
//           {
//             on: "hover",
//             style: {
//               itemBackground: "rgba(0, 0, 0, .03)",
//               itemOpacity: 1,
//             },
//           },
//         ],
//       },
//     ]}
//   />
// );
// export const MyResponsivePie = () => (
//   <ResponsivePie
//     data={data2}
//     margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//     innerRadius={0.5}
//     padAngle={0.7}
//     cornerRadius={3}
//     activeOuterRadiusOffset={8}
//     borderWidth={1}
//     borderColor={{
//       from: "color",
//       modifiers: [["darker", 0.2]],
//     }}
//     arcLinkLabelsSkipAngle={10}
//     arcLinkLabelsTextColor="#333333"
//     arcLinkLabelsThickness={2}
//     arcLinkLabelsColor={{ from: "color" }}
//     arcLabelsSkipAngle={10}
//     arcLabelsTextColor={{
//       from: "color",
//       modifiers: [["darker", 2]],
//     }}
//     defs={[
//       {
//         id: "dots",
//         type: "patternDots",
//         background: "inherit",
//         color: "rgba(255, 255, 255, 0.3)",
//         size: 4,
//         padding: 1,
//         stagger: true,
//       },
//       {
//         id: "lines",
//         type: "patternLines",
//         background: "inherit",
//         color: "rgba(255, 255, 255, 0.3)",
//         rotation: -45,
//         lineWidth: 6,
//         spacing: 10,
//       },
//     ]}
//     fill={[
//       {
//         match: {
//           id: "ruby",
//         },
//         id: "dots",
//       },
//       {
//         match: {
//           id: "c",
//         },
//         id: "dots",
//       },
//       {
//         match: {
//           id: "go",
//         },
//         id: "dots",
//       },
//       {
//         match: {
//           id: "python",
//         },
//         id: "dots",
//       },
//       {
//         match: {
//           id: "scala",
//         },
//         id: "lines",
//       },
//       {
//         match: {
//           id: "lisp",
//         },
//         id: "lines",
//       },
//       {
//         match: {
//           id: "elixir",
//         },
//         id: "lines",
//       },
//       {
//         match: {
//           id: "javascript",
//         },
//         id: "lines",
//       },
//     ]}
//     legends={[
//       {
//         anchor: "bottom",
//         direction: "row",
//         justify: false,
//         translateX: 0,
//         translateY: 56,
//         itemsSpacing: 0,
//         itemWidth: 100,
//         itemHeight: 18,
//         itemTextColor: "#999",
//         itemDirection: "left-to-right",
//         itemOpacity: 1,
//         symbolSize: 18,
//         symbolShape: "circle",
//         effects: [
//           {
//             on: "hover",
//             style: {
//               itemTextColor: "#000",
//             },
//           },
//         ],
//       },
//     ]}
//   />
// );
// export const MyResponsiveBar = () => (
//   <ResponsiveBar
//     data={data3}
//     keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
//     indexBy="country"
//     margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//     padding={0}
//     groupMode="grouped"
//     valueScale={{ type: "linear" }}
//     indexScale={{ type: "band", round: true }}
//     colors={{ scheme: "category10" }}
//     defs={[
//       {
//         id: "dots",
//         type: "patternDots",
//         background: "inherit",
//         color: "#38bcb2",
//         size: 4,
//         padding: 1,
//         stagger: true,
//       },
//       {
//         id: "lines",
//         type: "patternLines",
//         background: "inherit",
//         color: "#eed312",
//         rotation: -45,
//         lineWidth: 6,
//         spacing: 10,
//       },
//     ]}
//     fill={[
//       {
//         match: {
//           id: "fries",
//         },
//         id: "dots",
//       },
//       {
//         match: {
//           id: "sandwich",
//         },
//         id: "lines",
//       },
//     ]}
//     borderWidth={1}
//     borderColor="black"
//     axisTop={null}
//     axisRight={null}
//     axisBottom={{
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "country",
//       legendPosition: "middle",
//       legendOffset: 32,
//     }}
//     axisLeft={{
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "food",
//       legendPosition: "middle",
//       legendOffset: -40,
//     }}
//     labelSkipWidth={12}
//     labelSkipHeight={12}
//     labelTextColor={{ theme: "labels.text.fill" }}
//     legends={[
//       {
//         dataFrom: "keys",
//         anchor: "bottom-right",
//         direction: "column",
//         justify: false,
//         translateX: 120,
//         translateY: 0,
//         itemsSpacing: 2,
//         itemWidth: 100,
//         itemHeight: 20,
//         itemDirection: "left-to-right",
//         itemOpacity: 0.85,
//         symbolSize: 20,
//         effects: [
//           {
//             on: "hover",
//             style: {
//               itemOpacity: 1,
//             },
//           },
//         ],
//       },
//     ]}
//     role="application"
//     ariaLabel="Nivo bar chart demo"
//     barAriaLabel={function (e) {
//       return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
//     }}
//   />
// );
// export const MyResponsiveStream = () => (
//   <ResponsiveStream
//     data={data4}
//     keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
//     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//     axisTop={null}
//     axisRight={null}
//     axisBottom={{
//       orient: "bottom",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "",
//       legendOffset: 36,
//     }}
//     axisLeft={{
//       orient: "left",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "",
//       legendOffset: -40,
//     }}
//     enableGridX={true}
//     enableGridY={false}
//     offsetType="silhouette"
//     colors={{ scheme: "set2" }}
//     fillOpacity={0.85}
//     borderColor={{ theme: "background" }}
//     defs={[
//       {
//         id: "dots",
//         type: "patternDots",
//         background: "inherit",
//         color: "#2c998f",
//         size: 4,
//         padding: 2,
//         stagger: true,
//       },
//       {
//         id: "squares",
//         type: "patternSquares",
//         background: "inherit",
//         color: "#e4c912",
//         size: 6,
//         padding: 2,
//         stagger: true,
//       },
//     ]}
//     fill={[
//       {
//         match: {
//           id: "Paul",
//         },
//         id: "dots",
//       },
//       {
//         match: {
//           id: "Marcel",
//         },
//         id: "squares",
//       },
//     ]}
//     dotSize={8}
//     dotColor={{ from: "color" }}
//     dotBorderWidth={2}
//     dotBorderColor={{
//       from: "color",
//       modifiers: [["darker", 0.7]],
//     }}
//     legends={[
//       {
//         anchor: "bottom-right",
//         direction: "column",
//         translateX: 100,
//         itemWidth: 80,
//         itemHeight: 20,
//         itemTextColor: "#999999",
//         symbolSize: 12,
//         symbolShape: "circle",
//         effects: [
//           {
//             on: "hover",
//             style: {
//               itemTextColor: "#000000",
//             },
//           },
//         ],
//       },
//     ]}
//   />
// );
import { Bar, Line } from "react-chartjs-2";

const dataBar = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];
export const BarChart = () => {
  return (
    <div>
      <Bar
      data={{
        labels: dataBar.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: dataBar.map(row => row.count)
          }
        ]
      }}
      height={200}
      width={300}
      />
    </div>
  );
};
export const LineChart = () => {
  return (
    <div>
      <Line
      data={{
        labels: dataBar.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: dataBar.map(row => row.count)
          }
        ]
      }}
      height={200}
      width={300}
      />
    </div>
  );
};
