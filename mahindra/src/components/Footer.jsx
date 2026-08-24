import { footerColumns, footerLegal } from '../data/footerLinks';
import { contact, footerTagline } from '../data/mallContent';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-mark">
              M5 <span>Ecity</span>
            </div>
            <p className="footer-tagline">{footerTagline}</p>
            <a
              className="footer-group-link"
              href="https://www.m5mahendragroup.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Part of M5 Mahendra Group
            </a>
          </div>

          {Object.values(footerColumns).map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <a href={contact.phoneHref} className="footer-phone">
              {contact.phone}
            </a>
            <p className="footer-hours">10:00 AM – 10:00 PM daily</p>
            <p className="footer-address">{contact.addressShort}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 M5 Mahendra Group. All Rights Reserved.</p>
          <div className="footer-legal">
            {footerLegal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
