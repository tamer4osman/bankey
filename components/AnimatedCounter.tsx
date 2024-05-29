'use client'

import CountUp from "react-countup";
const AnimatedCounter = ({amount}: { amount: number}) => {
  return (
    <CountUp
      end={amount}
      duration={2.75}
      decimals={2}
      decimal=","
      prefix="$"
      className="total-balance-amount w-full flex-center"
    />
  )
}

export default AnimatedCounter