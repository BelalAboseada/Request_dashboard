import { t } from "i18next";
import Chart from "react-apexcharts";

const MostVisitedGender = () => {
  const categories = [t("Male"), t("Female")];

  const series = [200, 100];

  const total = series.reduce((acc, value) => acc + value, 0);

  const options = {
    chart: {
      type: "pie",
      toolbar: {
        show: false,
      },
    },
    labels: categories,
    colors: ["#FFC808", "#CCABDA"],
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
          const percentage = ((value / total) * 100).toFixed(1); 
          return `${percentage}% ${categories[seriesIndex]}`; 
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
        {t("Most Visited Gender")}
      </h3>
      <Chart
        options={options}
        series={series}
        type={options.chart.type}
        height={280}
      />
    </div>
  );
};

export default MostVisitedGender;