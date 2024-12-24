import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useLanguage } from "../../context/LanguageContext";

const StatusHeader = ({
  buttons,
  onFilterChange,
  className,
  active_indicator,
  bar,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activePosition, setActivePosition] = useState(0);
  const { isRTL } = useLanguage();
  const handleButtonClick = (index) => {
    setActivePosition(index * 80);
    setSelectedIndex(index);

    // Call the onFilterChange function with the selected value
    onFilterChange(buttons[index].value);
  };

  return (
    <div className={`StatusHeader my-2  ${className}`}>
      <div className="flex">
        <div className="BtnGroup">
          {buttons.map((button, index) => (
            <button
              key={button.value}
              className={`btn px-4  py-5 font-inter font-bold text-xs text-gray  md:w-20  ${
                selectedIndex === index
                  ? `active_${button.value} text-linear`
                  : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="filterBtn"></div>
      </div>
      <div className={`bar ${bar}`}>
        <span
          className={`active-indicator ${active_indicator}`}
          style={{
            ...(isRTL
              ? { right: `${activePosition}px` }
              : { left: `${activePosition}px` }),
          }}
        ></span>
      </div>
    </div>
  );
};

// PropTypes for validation
StatusHeader.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default StatusHeader;