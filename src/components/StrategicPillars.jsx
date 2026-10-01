import './HomeSections.css'

export default function StrategicPillars() {
  return (
    <section className="strategic-pillars-section" id="strategic-pillars" aria-label="Strategic Pillars">
      <div className="strategic-pillars-container">
        {/* Eyebrow */}
        <div className="home-eyebrow">
          <span className="home-eyebrow__dash" aria-hidden="true" />
          <span>STRATEGIC PILLARS</span>
        </div>

        {/* Section Heading */}
        <h2 className="strategic-pillars__heading">
          How a holding company earns the right to hold.
        </h2>

        {/* 4 Pillars Grid */}
        <div className="strategic-pillars__grid">
          {/* Pillar 01 */}
          <div className="strategic-pillar-item">
            <span className="strategic-pillar-item__num">01</span>
            <h3 className="strategic-pillar-item__title">Disciplined Capital</h3>
            <p className="strategic-pillar-item__text">
              Privately held, patiently funded, and free to take positions measured in decades.
            </p>
          </div>

          {/* Pillar 02 */}
          <div className="strategic-pillar-item">
            <span className="strategic-pillar-item__num">02</span>
            <h3 className="strategic-pillar-item__title">Operating Depth</h3>
            <p className="strategic-pillar-item__text">
              We hold operating businesses, not passive stakes — leadership sits inside the work.
            </p>
          </div>

          {/* Pillar 03 */}
          <div className="strategic-pillar-item">
            <span className="strategic-pillar-item__num">03</span>
            <h3 className="strategic-pillar-item__title">Compounding Structure</h3>
            <p className="strategic-pillar-item__text">
              Each subsidiary strengthens the others' offer, delivery capacity and credibility.
            </p>
          </div>

          {/* Pillar 04 */}
          <div className="strategic-pillar-item">
            <span className="strategic-pillar-item__num">04</span>
            <h3 className="strategic-pillar-item__title">Governed Growth</h3>
            <p className="strategic-pillar-item__text">
              Expansion passes through board oversight, legal review and defined risk appetite.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
