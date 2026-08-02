import { Link } from 'react-router-dom'
import { BalanceCard } from './BalanceCard'

type HeaderProps = {
  balance: number
}

export function Header({ balance }: HeaderProps) {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Codex Casino home">
        <span className="brand-mark">C</span>
        <span>
          <strong>Codex Casino</strong>
          <small>Premium demo lobby</small>
        </span>
      </Link>

      <nav className="nav-pills" aria-label="Primary navigation">
        <a href="#games">Games</a>
        <a href="#rewards">Rewards</a>
        <a href="#vip">VIP</a>
      </nav>

      <BalanceCard balance={balance} />
    </header>
  )
}
