import React, { useEffect, useState, useRef } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;
    setTime((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime({ hour: 0, minute: 0, second: 0 });
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          let { hour, minute, second } = prevTime;

          if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(intervalRef.current);
            return { hour: 0, minute: 0, second: 0 };
          }

          if (second === 0) {
            if (minute === 0) {
              if (hour !== 0) {
                hour -= 1;
                minute = 59;
                second = 59;
              }
            } else {
              minute -= 1;
              second = 59;
            }
          } else {
            second -= 1;
          }

          return { hour, minute, second };
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Countdown Timer</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="number"
          value={time.hour}
          placeholder="HH"
          className="p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 text-center"
          onChange={(e) => handleChange(e, "hour")}
          disabled={isRunning}
        />
        <input
          type="number"
          value={time.minute}
          placeholder="MM"
          className="p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 text-center"
          onChange={(e) => handleChange(e, "minute")}
          disabled={isRunning}
        />
        <input
          type="number"
          value={time.second}
          placeholder="SS"
          className="p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 text-center"
          onChange={(e) => handleChange(e, "second")}
          disabled={isRunning}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="p-2 px-4 rounded-lg bg-blue-500 text-white"
          onClick={handleStartPause}
        >
          {!isRunning ? "Start" : "Pause"}
        </button>
        <button
          className="p-2 px-4 rounded-lg bg-red-500 text-white"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="mt-6 text-4xl font-mono">
        {formatTime(time.hour)}:{formatTime(time.minute)}:{formatTime(time.second)}
      </div>
    </div>
  );
};

export default CountdownTimer;
