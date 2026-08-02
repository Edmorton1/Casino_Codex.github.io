import { useState } from 'react'
import { Header } from '../components/Header'
import { SlotMachineGame } from '../components/SlotMachineGame'
import { initialBalance } from '../features/casino/casinoData'
import '../App.css'

export function SlotsPage() {
  const [balance] = useState(initialBalance)

  return (
    <main className="casino-shell">
      <section className="dashboard slots-page" aria-label="Slots page">
        <Header balance={balance} />
        <SlotMachineGame />
      </section>
    </main>
  )
}
