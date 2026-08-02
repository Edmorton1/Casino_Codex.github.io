import type { GameCard } from '../features/casino/types'

type GamesSectionProps = {
  games: GameCard[]
}

export function GamesSection({ games }: GamesSectionProps) {
  return (
    <section className="games-section" id="games">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Live Lobby</p>
          <h2>Featured Games</h2>
        </div>
        <span>{games.length} games online</span>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <article className={`game-card ${game.accent}`} key={game.title}>
            <div className="game-symbol">{game.symbol}</div>
            <div>
              <span className="game-category">{game.category}</span>
              <h3>{game.title}</h3>
            </div>
            <dl className="game-meta">
              <div>
                <dt>Jackpot</dt>
                <dd>{game.jackpot}</dd>
              </div>
              <div>
                <dt>Risk</dt>
                <dd>{game.volatility}</dd>
              </div>
            </dl>
            <button type="button">Play Demo</button>
          </article>
        ))}
      </div>
    </section>
  )
}
