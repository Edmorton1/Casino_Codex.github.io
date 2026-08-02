import { useState } from 'react'
import { GamesSection } from '../components/GamesSection'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { PromoGrid } from '../components/PromoGrid'
import { games, initialBalance, promoTiles } from '../features/casino/casinoData'
import '../App.css'

export function HomePage() {
  const [balance] = useState(initialBalance)

  return (
    <main className="casino-shell">
      <section className="dashboard" aria-label="Codex Casino home">
        <Header balance={balance} />
        <HeroSection />
        <PromoGrid promos={promoTiles} />
        <GamesSection games={games} />
      </section>
    </main>
  )
}
