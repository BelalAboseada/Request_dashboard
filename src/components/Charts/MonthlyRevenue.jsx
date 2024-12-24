import { t } from "i18next";
import Chart from "react-apexcharts";

const MonthlyRevenue = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1000,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
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
    //   max: 7000, 
      tickAmount: 4,
      labels: {
        formatter: (value) => `$${value}`, 
      },
    },
    markers: {
      size: 2,
      strokeWidth: 2,
    },
    colors: ["#ccabd8"],
    tooltip: {
      y: {
        formatter: (value) => `$${value}`,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  };

  const revenueChartSeries = [
    {
      name: "Revenue",
      data: [
        1000, 2000, 1500, 3000, 2500, 4000, 5000, 2500, 3500, 4000, 4200, 6600,
      ],
    },
  ];

  return (
    <div className="card p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-2" style={{ color: "#05004E" }}>
        {t("Monthly Revenue")}
      </h3>
      <hr />
      <Chart
        options={options}
        series={revenueChartSeries}
        type={options.chart.type}
        height={300}
      />
    </div>
  );
};

export default MonthlyRevenue;
