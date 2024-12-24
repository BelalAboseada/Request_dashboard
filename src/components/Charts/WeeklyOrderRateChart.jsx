import { t } from "i18next";
import Chart from "react-apexcharts";
const WeeklyOrderRateChart = () => {
  const options = {
    chart: {
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#ccabd8",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.5,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 4,
      curve: "smooth",
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
      strokeWidth: 12,
    },
    colors: ["#ccabd8"],
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
     name: t("Orders"), // Series name
     data: [300, 50, 30, 160, 40, 70, 100], // Data points
   },
 ];

  return (
    <div className="card p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-2" style={{ color: "#05004E" }}>
        {t("Weekly Order Rate")}
      </h3>
      <Chart
        options={options}
        series={series}
        type={options.chart.type}
        height={250}
      />
    </div>
  );
};

export default WeeklyOrderRateChart;
