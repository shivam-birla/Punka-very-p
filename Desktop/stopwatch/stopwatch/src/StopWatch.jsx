import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [milisecond, setMiliSecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleStart = () => {
    if (intervalId === null) {
      const interval = setInterval(() => {
        setMiliSecond((prev) => prev + 1);
      }, 10);
      setIntervalId(interval);
    }
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    if (milisecond === 100) {
      setSecond((prev) => prev + 1);
      setMiliSecond(0);
    }
    if (second === 60) {
      setMinute((prev) => prev + 1);
      setSecond(0);
    }
  }, [milisecond, second]);

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setMiliSecond(0);
    setSecond(0);
    setMinute(0);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gray-600 h-screen">
        <div className="flex flex-col border rounded p-8 bg-red-700 items-center gap-2">
          <div className="flex flex-row gap-7 p-6">
            <div className="flex flex-col text-center w-18 border rounded justify-center p-2 items-center">
              <p className="w-8 border rounded text-center bg-yellow-200 font-bold">
                {minute < 10 ? "0" + minute : minute}
              </p>
              <span className="text-white font-bold">minute</span>
            </div>

            <div className="flex flex-col text-center w-18 border rounded justify-center p-2 items-center">
              <p className="w-8 border rounded text-center bg-yellow-200 font-bold">
                {second < 10 ? "0" + second : second}
              </p>
              <span className="text-white font-bold">second</span>
            </div>

            <div className="flex flex-col text-center w-18 border rounded justify-center p-2 items-center">
              <p className="w-8 border rounded text-center bg-yellow-200 font-bold">
                {milisecond < 10 ? "0" + milisecond : milisecond}
              </p>
              <span className="text-white font-bold">millisecond</span>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-5">
            <button className="border rounded bg-slate-800 text-white p-2 hover:bg-slate-900 active:bg-slate-700" onClick={handleStart}>
              Start
            </button>
            <button className="border rounded bg-slate-800 text-white p-2 hover:bg-slate-900 active:bg-slate-700" onClick={handleStop}>
              Stop
            </button>
            <button className="border rounded bg-slate-800 text-white p-2 hover:bg-slate-900 active:bg-slate-700" onClick={handleReset}>
              Reset
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
