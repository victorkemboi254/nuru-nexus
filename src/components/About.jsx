const values = [
  {
    title: 'Clarity',
    text: 'We say what we mean and do what we say. Every business under Nuru Nexus is run in the open, with clean books and honest reporting.',
  },
  {
    title: 'Integrity',
    text: 'Trust is the only currency that compounds. We hold ourselves to the same standard whether anyone is watching or not.',
  },
  {
    title: 'Momentum',
    text: 'We back founders and teams who move. Slow decisions cost more than wrong ones we can fix quickly.',
  },
]

function About() {
  return (
    <section className="about" id="about">
      <div className="about__intro">
        <h2>What holds us together</h2>
        <p>
          Nuru means light. We started Nuru Nexus on the belief that a
          handful of well-run businesses, sharing capital and discipline,
          can outlast any single one of them alone.
        </p>
      </div>
      <ul className="about__values">
        {values.map((value) => (
          <li key={value.title} className="about__value">
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About