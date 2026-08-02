import { useEffect, useRef } from 'react'
import bigWinSound from '../assets/sounds/BIG WIN.mp3'
import buttonSound from '../assets/sounds/BUTTON.mp3'
import infoSound from '../assets/sounds/INFO.mp3'
import jackpotSound from '../assets/sounds/JACKPOT.mp3'
import pullSound from '../assets/sounds/PULL.mp3'
import spinningSound from '../assets/sounds/SPINING.mp3'
import winSound from '../assets/sounds/WIN.mp3'
import type { SlotSoundCue } from '../features/casino/types'

type SlotAudioMap = {
  bigWin: HTMLAudioElement
  button: HTMLAudioElement
  info: HTMLAudioElement
  jackpot: HTMLAudioElement
  pull: HTMLAudioElement
  spinning: HTMLAudioElement
  win: HTMLAudioElement
}

function playAudio(audio: HTMLAudioElement) {
  audio.currentTime = 0
  void audio.play().catch(() => undefined)
}

export function useSlotMachineSounds() {
  const audioRef = useRef<SlotAudioMap | null>(null)

  if (audioRef.current === null) {
    audioRef.current = {
      bigWin: new Audio(bigWinSound),
      button: new Audio(buttonSound),
      info: new Audio(infoSound),
      jackpot: new Audio(jackpotSound),
      pull: new Audio(pullSound),
      spinning: new Audio(spinningSound),
      win: new Audio(winSound),
    }

    audioRef.current.spinning.loop = true
    audioRef.current.spinning.volume = 0.58
    audioRef.current.button.volume = 0.5
  }

  useEffect(() => {
    return () => {
      if (audioRef.current === null) {
        return
      }

      Object.values(audioRef.current).forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
      })
    }
  }, [])

  function playSpinStart() {
    if (audioRef.current === null) {
      return
    }

    playAudio(audioRef.current.pull)
    playAudio(audioRef.current.spinning)
  }

  function playReelStop() {
    if (audioRef.current === null) {
      return
    }

    playAudio(audioRef.current.button)
  }

  function playSpinFinish(cue: SlotSoundCue) {
    if (audioRef.current === null) {
      return
    }

    audioRef.current.spinning.pause()
    audioRef.current.spinning.currentTime = 0
    playAudio(audioRef.current[cue])
  }

  return {
    playReelStop,
    playSpinFinish,
    playSpinStart,
  }
}
