export type GameAccent = 'violet' | 'ruby' | 'cyan' | 'lime' | 'amber' | 'blue'

export type GameVolatility = 'Low' | 'Medium' | 'High'

export type GameCard = {
  title: string
  category: string
  volatility: GameVolatility
  jackpot: string
  accent: GameAccent
  symbol: string
}

export type PromoTile = {
  title: string
  value: string
  action: string
}

export type SlotSymbol = '🍒' | '🍋' | '🍉' | '🍇' | '⭐' | '💎' | '🔔' | '7️⃣'

export type SlotReel = [SlotSymbol, SlotSymbol, SlotSymbol]

export type SlotResult = [SlotReel, SlotReel, SlotReel]

export type SlotSoundCue = 'win' | 'bigWin' | 'jackpot' | 'info'
