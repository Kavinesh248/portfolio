"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every 1 second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <header className="flex-between common-padding">
      <div>
        <Image src="/hamburger.svg" alt="menu" width={18} height={18} />
      </div>
      <p className="font-md md:font-xl">
        {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:
        {formatTime(time.getSeconds())}
      </p>
    </header>
  );
};

export default Header;
