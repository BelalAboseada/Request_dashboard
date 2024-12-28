import ReactApexChart from "react-apexcharts";

export const TagsChart = ({ tags }) => {
  console.log(tags);

  const state = {
    series: [
      {
        name: "tag",
        // data: Array.isArray(tags) ? tags.map((tag) => tag.count) : [],
        // static data count
        data: [10, 20, 30, 40],
   
      }, 
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        background: "#ffffff",
        toolbar: {
          show: true,
          tools: {
            download: false,
          },
        },
      },
        // colors: ["#81D4C2", "#1D4ED8", "#444D61"],
      colors: Array.isArray(tags) ? tags.map((tag) => tag.color) : [],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          //   borderRadius: "10px 0px 0px 10px",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      tooltip: {
        y: {
          formatter: (value, { dataPointIndex }) => {
            const percentage =
              tags[dataPointIndex]?.percentage?.toFixed(2) || "0.00";
            return `percentage: (${percentage}%)`;
          },
        },
      },
      //   grid: {
      //     borderColor: "#fff",
      //   },
      legend: {
        show: false,
      },

      xaxis: {
        categories: Array.isArray(tags) ? tags.map((tag) => tag.label) : [],
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: "bold",
          },
        },
      },
    },
  };
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={280}
      />
    </div>
  );
};
