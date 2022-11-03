import { useState } from 'react';
import { useCountdown } from "../../hooks/useCountdown"
function Timer({sec, clsName}) {
    const [days, hours, minutes, seconds] = useCountdown(sec);
  return (
    <div className={clsName}>{days? `${days}d:`:""}{hours?`${hours}h:`:""}{minutes}m:{seconds}s</div>
  )
}

export default Timer