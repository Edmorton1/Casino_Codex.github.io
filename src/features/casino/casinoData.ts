import type { GameCard, PromoTile } from './types'

export const initialBalance = 12840

export const games: GameCard[] = [
  {
    title: 'Neon Reels',
    category: 'Slots',
    volatility: 'Medium',
    jackpot: '$48,200',
    accent: 'violet',
    symbol: '777',
  },
  {
    title: 'Roulette Royale',
    category: 'Table',
    volatility: 'Low',
    jackpot: '$12,800',
    accent: 'ruby',
    symbol: '36',
  },
  {
    title: 'Blackjack Pulse',
    category: 'Cards',
    volatility: 'Medium',
    jackpot: '$21,000',
    accent: 'cyan',
    symbol: 'A+K',
  },
  {
    title: 'Diamond Rush',
    category: 'Jackpot',
    volatility: 'High',
    jackpot: '$92,450',
    accent: 'lime',
    symbol: 'GEM',
  },
  {
    title: 'Lucky Circuit',
    category: 'Slots',
    volatility: 'High',
    jackpot: '$63,900',
    accent: 'amber',
    symbol: 'BAR',
  },
  {
    title: 'Baccarat Noir',
    category: 'Table',
    volatility: 'Low',
    jackpot: '$18,600',
    accent: 'blue',
    symbol: '8:9',
  },
]

export const promoTiles: PromoTile[] = [
  {
    title: 'Welcome Bonus',
    value: '$1,000 + 60 FS',
    action: 'Claim',
  },
  {
    title: 'Hot Jackpot',
    value: '$92,450',
    action: 'View',
  },
  {
    title: 'VIP Streak',
    value: 'x3 Rewards',
    action: 'Join',
  },
]
