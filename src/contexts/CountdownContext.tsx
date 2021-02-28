import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const {startNewChallenge} = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, isSetActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    isSetActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    isSetActive(false)
    setTime(0.1 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      isSetActive(false)
      startNewChallenge()
    }
  }, [isActive, time])


  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountDown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}