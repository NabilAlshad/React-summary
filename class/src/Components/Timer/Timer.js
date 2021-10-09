import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const tick = () => {
    setTime(new Date());
  };
  useEffect(() => {
    setInterval(tick, 1000);
  }, []);

  return (
    <div>
      <p>{time.toLocaleTimeString("bn-BD")}</p>
    </div>
  );
};

export default Timer;
