import { useEffect, useRef, useState } from "react";
import { currentSecDetials } from "../../constant/currentSecDetails";
import CurrentSec from "./CurrentSec";
import { TiTick } from "react-icons/ti";

const ProgressBar = ({ currentStep, stepCompleted }) => {
  const secRef = useRef([]);
  const [secMargin, setSecMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  useEffect(() => {
    setSecMargin({
      marginLeft: secRef.current[0].offsetWidth,
      marginRight: secRef.current[secRef.current.length - 1].offsetWidth,
    });
  }, [secRef.current]);

  const calculateBarWidth = () => {
    return currentStep === 1 ? "w-0" : currentStep === 2 ? "w-1/2" : "w-full";
  };

  return (
    <div className="flex justify-between items-center relative z-10 ">
      {currentSecDetials.map((el, i) => (
        <CurrentSec
          key={i}
          icon={stepCompleted[`step${i + 1}`] ? TiTick : el.icon}
          name={el.title}
          ref={(el) => (secRef.current[i] = el)}
        />
      ))}
      <div
        className="h-2 bg-gray-300 absolute inset-y-6 -translate-y-1/2"
        style={{
          width: `calc(100% - ${
            secMargin.marginLeft + secMargin.marginRight
          }px)`,
          marginLeft: `${secRef.current[0]?.offsetWidth}px`,
        }}
      >
        <div
          className={`h-full ${calculateBarWidth()} bg-black ease-in-out duration-600`}
          style={{}}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
