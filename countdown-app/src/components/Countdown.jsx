import React, { useState, useEffect, useContext } from "react";
import Form from "./Form";
import { FormContext } from "../Context/FormContext";
import { BiArrowBack } from 'react-icons/bi'

const Countdown = () => {
  const {hour, minute, second, setShowCountDown} = useContext(FormContext)
  const [timeLeft, setTimeLeft] = useState({
    hours: hour,
    minutes: minute,
    seconds: second,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      if (
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(timerId);
      } else if (timeLeft.seconds > 0) {
        setTimeLeft({
          ...timeLeft,
          seconds: timeLeft.seconds - 1,
        });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({
          ...timeLeft,
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeLeft]);
  return (
    <div className="flex flex-col">
      <span onClick={() => setShowCountDown(false)} className="absolute top-20 left-20 bg-blue-300 p-2 rounded-md cursor-pointer">
        <BiArrowBack />
      </span>
      <div className="text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bold text-blue-700">
        {timeLeft.hours.toString().padStart(2, "0")}:
        {timeLeft.minutes.toString().padStart(2, "0")}:
        {timeLeft.seconds.toString().padStart(2, "0")}
      </div>
      
    </div>
  );
};

export default Countdown;
