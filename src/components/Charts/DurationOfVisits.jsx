import { t } from "i18next";
import Chart from "react-apexcharts";

const DurationOfVisits = () => {
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
      colors: ["#CCABDA"],
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 1.5, 
      tickAmount: 6,
      labels: {
        formatter: (value) => formatDuration(value),
      },
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeWidth: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#99D4D2"],
        stops: [0, 100],
      },
    },
    tooltip: {
      y: {
        formatter: (value) => formatDuration(value),
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
  };

  const series = [
    {
      name: t("Visits"),
      data: [0.1, 0.25, 0.2, 0.4, 0.3, 0.5, 0.6],
    },
  ];

  // Helper function to format fractional hours into hours and minutes
  const formatDuration = (value) => {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${hours > 0 ? `${hours}h ` : ""}${
      minutes > 0 ? `${minutes}m` : ""
    }`;
  };

  return (
    <div className="card p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-bold " style={{ color: "#05004E" }}>
        {t("Duration Of Visit:")}
      </h3>
      <span className="text-gray text-sm font-medium">
        {t("The average time visitors spend on the site.")}
      </span>
      <hr />
      <Chart
        options={options}
        series={series}
        type={options.chart.type}
        height={250}
      />
    </div>
  );
};

export default DurationOfVisits;
