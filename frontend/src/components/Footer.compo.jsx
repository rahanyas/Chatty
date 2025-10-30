

import '../styles/components/footer.compo.scss'

const Footer = () => {
    return (
<footer className="footer">
  <div className="footer-container">
    
    {/* <!-- Column 1: Brand Info --> */}
    <div className="footer-col brand">
      <h2 style={{textTransform : "uppercase"}}>hey</h2>
      <p>Building a smarter web, one line at a time.</p>
    </div>

    {/* <!-- Column 2: Quick Links --> */}
    <div className="footer-col">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Column 3: Resources --> */}
    <div className="footer-col">
      <h3>Resources</h3>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2025 Rahanyas.</p>
  </div>
</footer>

    )
};

export default Footer