import { t } from "i18next";
import Chart from "react-apexcharts";

const UserRatios = () => {
  const categories = [t("contractor"), t("consultant"), t("owner")];

  const series = [300, 100, 20]; 

  const total = series.reduce((acc, value) => acc + value, 0);

  const options = {
    chart: {
      type: "pie",
      toolbar: {
        show: false,
      },
    },
    labels: categories,
    colors: ["#FFC808", "#99D4D2", "#CCABDA"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: ["#4B5563"],
      },
    },
    tooltip: {
      y: {
        formatter: (value, { seriesIndex }) => {
          const percentage = ((value / total) * 100).toFixed(1); // Calculate percentage
          return `${percentage}% ${categories[seriesIndex]}`; // Display percentage + category name
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };


  return (
    <div className="col-span-3 card p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-2" style={{ color: "#05004E" }}>
        {t("User Ratios")}
      </h3>
      <Chart
        options={options}
        series={series}
        type={options.chart.type}
        height={265}
      />
    </div>
  );
};

export default UserRatios;
