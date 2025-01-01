import { t } from "i18next";
import Chart from "react-apexcharts";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoTrendingDownOutline, IoTrendingUpOutline } from "react-icons/io5";
const PerformanceChart = ({ data }) => {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: -180,
        endAngle: 90,
        hollow: {
          margin: 5,
          size: "50%",
          background: "transparent",
        },
        dataLabels: {
          name: {
            fontSize: "16px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: false,
          },
        },
        rounded: true,
      },
    },
    labels: data.map((item) => t(item._id)),
    colors: ["#81D4C2", "#FFB926", "#FF5630"],
  };

  //  mapping data in series
  const series = data.map((item) => item.percentage);
  console.log(series, options.labels);

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg col-span-2">
      <h3 className="font-semibold mb-2">{t("ProjectsPerformance")}</h3>
      <div className="flex flex-col">
        <Chart
          options={options}
          series={series}
          type={options.chart.type}
          height={250}
        />
        <div className="flex items-center justify-center gap-5 mt-2">
          {data?.map((item, idx) => (
            <div key={idx} className="Completed flex flex-col items-center">
              <span>
                {item._id === "behind" ? (
                  <IoMdCheckmarkCircleOutline
                    className="w-5 h-5"
                    style={{
                      color: "#81D4C2",
                    }}
                  />
                ) : item._id === "working" ? (
                  <IoTrendingUpOutline
                    className="w-5 h-5"
                    style={{
                      color: "#FFB926",
                    }}
                  />
                ) : (
                  <IoTrendingDownOutline
                    className="w-5 h-5"
                    style={{
                      color: "#FF5630",
                    }}
                  />
                )}
              </span>
              <span className="font-semibold text-lg">
                {item.percentage.toFixed(1)}%
              </span>
              <span className="font-medium text-base">{t(item._id)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
