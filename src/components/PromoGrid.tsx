import type { PromoTile } from '../features/casino/types'

type PromoGridProps = {
  promos: PromoTile[]
}

export function PromoGrid({ promos }: PromoGridProps) {
  return (
    <section className="promo-grid" id="rewards" aria-label="Casino promotions">
      {promos.map((promo) => (
        <article className="promo-tile" key={promo.title}>
          <span>{promo.title}</span>
          <strong>{promo.value}</strong>
          <button type="button">{promo.action}</button>
        </article>
      ))}
    </section>
  )
}
