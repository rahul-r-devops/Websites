import { navLinks, contact } from '../data/mallContent';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="logo-block">
          <div className="logo-mark">
            M5 <span>Ecity</span>
          </div>
          <span className="logo-sub">Mahendra Group</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="header-cta" href={contact.phoneHref}>
          Call Us
        </a>
      </div>
    </header>
  );
}
