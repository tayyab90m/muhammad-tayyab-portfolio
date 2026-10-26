import React, { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Karachi',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

// Live clock for Lahore, so visitors can see what time it is for me.
const LocalTime = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(timer);
  }, []);

  return <time dateTime={now.toISOString()}>{formatter.format(now)} PKT</time>;
};

export default LocalTime;
