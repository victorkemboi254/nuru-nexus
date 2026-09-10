function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow">A Kenyan holding company</p>
        <h1 className="hero__headline">
          We build the ventures<br />that build tomorrow.
        </h1>
        <p className="hero__sub">
          Nuru Nexus is the parent company behind Dltoo, Silda and Jemnet —
          three businesses working together, guided by one set of standards.
        </p>
        <a className="hero__cta" href="#subsidiaries">See our companies</a>
      </div>
    </section>
  )
}

export default Hero