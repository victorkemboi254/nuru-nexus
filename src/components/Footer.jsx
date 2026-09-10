import queenMark from '../assets/nuru-queen-mark.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={queenMark} alt="" className="footer__mark-icon" />
          <div>
            <span className="footer__mark">Nuru Nexus</span>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
        <div className="footer__contact">
          <a href="mailto:hello@nurunexus.co.ke">hello@nurunexus.co.ke</a>
          <p>&copy; {new Date().getFullYear()} Nuru Nexus Holding Ltd.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer