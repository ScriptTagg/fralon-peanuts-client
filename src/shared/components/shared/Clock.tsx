"use client";
import { dateFormatter } from "@/shared/utils/date-formatter";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
      setTimeout(updateTime, 2000);
    };
    updateTime();
  }, []);

  return <time className="">{dateFormatter(time)}</time>;
}
