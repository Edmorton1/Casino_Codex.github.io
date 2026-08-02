import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Frontend-only casino demo</p>
        <h1>Play the midnight floor where every spin glows.</h1>
        <p className="hero-description">
          Explore a premium dark casino lobby with client-side balance, curated game cards,
          and neon table energy. No backend, API, database, or real-money wagering.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/slots">Start Playing</Link>
          <a className="secondary-button" href="#rewards">View Bonuses</a>
        </div>
      </div>

      <div className="slot-machine" aria-label="Decorative slot machine">
        <div className="slot-top">Big Win</div>
        <div className="slot-window">
          <span>7</span>
          <span>◆</span>
          <span>7</span>
        </div>
        <div className="slot-base">
          <span>Spin</span>
          <span>Max Bet</span>
        </div>
      </div>
    </section>
  )
}
