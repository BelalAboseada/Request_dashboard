import { t } from "i18next";
import Chart from "react-apexcharts";
const PackageChart = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    colors: ["#0095FF", "#8744A4", "#FFB926"],
    stroke: {
      width: 4,
      curve: "smooth",
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        formatter: (value) => `${value}`,
      },
    },
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: ["#0095FF", "#8744A4", "#FFB926"],
      strokeWidth: 12,
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}`,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
  };

   const series = [
     {
       name: "Request",
       data: [100, 120, 150, 180, 200, 250, 300, 280, 260, 240, 220, 200],
     },
     {
       name: "Request plus",
       data: [200, 180, 160, 140, 180, 220, 250, 270, 260, 240, 230, 210],
     },
     {
       name: "Request full plus",
       data: [150, 170, 190, 200, 210, 230, 240, 260, 270, 260, 240, 220],
     },
   ];

  return (
    <div className="col-span-3 card p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-2" style={{ color: "#05004E" }}>
        {t("Packages")}
      </h3>
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
};

export default PackageChart;
