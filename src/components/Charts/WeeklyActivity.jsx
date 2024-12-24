import { t } from "i18next";
import Chart from "react-apexcharts";

const WeeklyActivity = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#0095FF", "#8744A4", "#FFB926"],
    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
      colors: ["transparent"],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
      //   formatter: (val) => `${val}`,
      //   style: {
      //     colors: ["#6B7280"],
      //     fontSize: "12px",
      //     fontWeight: "bold",
      //   },
    },
    grid: {
      show: true,
      borderColor: "#E5E7EB",

      strokeDashArray: 5,
    },
    fill: {
      opacity: 0.85,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#6B7280",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        formatter: (value) => `${value}`,
        style: {
          colors: "#6B7280",
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => `${value} ${t("Activities")}`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",

      labels: {
        colors: "#6B7280",
      },
      markers: {
        width: 12,
        height: 12,
        radius: "50%",
      },
    },
  };

  const series = [
    {
      name: t("owner"),
      data: [100, 120, 150, 180, 200, 250, 300],
    },
    {
      name: t("consultant"),
      data: [200, 180, 160, 140, 180, 220, 250],
    },
    {
      name: t("contractor"),
      data: [150, 170, 190, 200, 210, 230, 240],
    },
  ];

  return (
    <div className="col-span-3 card p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-2" style={{ color: "#05004E" }}>
        {t("Weekly Activity")}
      </h3>
      <hr />
      <Chart
        options={options}
        series={series}
        type={options.chart.type}
        height={300} 
      />
    </div>
  );
};

export default WeeklyActivity;
