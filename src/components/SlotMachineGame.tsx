import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { createRandomSlotResult, getSlotSoundCue, spinningReelSymbols } from '../features/casino/slotMachine'
import type { SlotResult } from '../features/casino/types'
import { useSlotMachineSounds } from '../hooks/useSlotMachineSounds'

const initialResult: SlotResult = [
  ['🍒', '🍋', '🍉'],
  ['🍇', '⭐', '💎'],
  ['🔔', '7️⃣', '🍒'],
]

const reelStopDelays = [1200, 1750, 2350]

export function SlotMachineGame() {
  const [result, setResult] = useState<SlotResult>(initialResult)
  const [isSpinning, setIsSpinning] = useState(false)
  const [spinningReels, setSpinningReels] = useState([false, false, false])
  const timersRef = useRef<number[]>([])
  const { playReelStop, playSpinFinish, playSpinStart } = useSlotMachineSounds()

  useEffect(() => {
    return () => {
      timersRef.current.forEach(window.clearTimeout)
    }
  }, [])

  function handleSpin() {
    if (isSpinning) {
      return
    }

    const nextResult = createRandomSlotResult()

    timersRef.current.forEach(window.clearTimeout)
    timersRef.current = []
    setIsSpinning(true)
    setSpinningReels([true, true, true])
    playSpinStart()

    reelStopDelays.forEach((delay, reelIndex) => {
      const timerId = window.setTimeout(() => {
        setResult((currentResult) => {
          const updatedResult = [...currentResult] as SlotResult
          updatedResult[reelIndex] = nextResult[reelIndex]

          return updatedResult
        })

        setSpinningReels((currentReels) => {
          const updatedReels = [...currentReels]
          updatedReels[reelIndex] = false

          return updatedReels
        })

        playReelStop()

        if (reelIndex === reelStopDelays.length - 1) {
          setIsSpinning(false)
          playSpinFinish(getSlotSoundCue(nextResult))
        }
      }, delay)

      timersRef.current.push(timerId)
    })
  }

  return (
    <section className="slots-game" aria-label="Slot machine game">
      <header className="slots-header">
        <Link className="back-link" to="/">Back to lobby</Link>
        <div>
          <p className="eyebrow">Slots</p>
          <h1>Neon Reels</h1>
        </div>
        <span className="spin-status">{isSpinning ? 'Spinning' : 'Ready'}</span>
      </header>

      <div className="machine-frame">
        <div className="machine-lights" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="reels-window" aria-live="polite">
          {result.map((reel, reelIndex) => (
            <div className="reel-shell" key={`reel-${reelIndex}`}>
              <div className={spinningReels[reelIndex] ? 'reel-strip spinning' : 'reel-strip stopped'}>
                {(spinningReels[reelIndex] ? spinningReelSymbols : reel).map((symbol, symbolIndex) => (
                  <span className="reel-symbol" key={`${reelIndex}-${symbol}-${symbolIndex}`}>
                    {symbol}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="spin-button" type="button" onClick={handleSpin} disabled={isSpinning}>
          {isSpinning ? 'Spinning...' : 'Spin'}
        </button>
      </div>
    </section>
  )
}
