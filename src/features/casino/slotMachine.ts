import type { SlotReel, SlotResult, SlotSoundCue, SlotSymbol } from './types'

export const slotSymbols: SlotSymbol[] = ['🍒', '🍋', '🍉', '🍇', '⭐', '💎', '🔔', '7️⃣']

export const spinningReelSymbols: SlotSymbol[] = [
  ...slotSymbols,
  ...slotSymbols,
  ...slotSymbols,
  ...slotSymbols,
]

export function createRandomSlotResult(): SlotResult {
  return [createRandomReel(), createRandomReel(), createRandomReel()]
}

export function getSlotSoundCue(result: SlotResult): SlotSoundCue {
  const middleLine = result.map((reel) => reel[1])
  const hasJackpot = middleLine.every((symbol) => symbol === '7️⃣')
  const hasBigWin = middleLine.every((symbol) => symbol === middleLine[0])
  const hasWin = new Set(middleLine).size < middleLine.length

  if (hasJackpot) {
    return 'jackpot'
  }

  if (hasBigWin) {
    return 'bigWin'
  }

  if (hasWin) {
    return 'win'
  }

  return 'info'
}

function createRandomReel(): SlotReel {
  return [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]
}

function getRandomSymbol(): SlotSymbol {
  const index = Math.floor(Math.random() * slotSymbols.length)

  return slotSymbols[index]
}
