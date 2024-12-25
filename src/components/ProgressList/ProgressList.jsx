import PropTypes from "prop-types";
import { Progress } from "@material-tailwind/react";

const ProgressList = ({ items, labelFormatter, valueFormatter }) => {
  return (
    <ul>
      {items.map((item, index) => {
        const progressValue =
          item.value ??
          (valueFormatter
            ? valueFormatter(item)
            : Math.floor(Math.random() * 100));

        return (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b last:border-b-0"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-600">
                {labelFormatter ? labelFormatter(item) : item.name}
              </span>
              <Progress
                value={Math.floor(Math.random() * 100)}
                color={item?.color || "transparent"} 
                barProps={{
                  className: item?.color
                    ? "" 
                    : "bg-[linear-gradient(96.45deg,#ccabda_0%,#99d4d2_167.29%)]", 
                }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600">
              {valueFormatter ? valueFormatter(item) : `${progressValue}%`}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

ProgressList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
  labelFormatter: PropTypes.func,
  valueFormatter: PropTypes.func,
};

export default ProgressList;
