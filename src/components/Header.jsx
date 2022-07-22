export function Header() {
  return (
    <header className="header">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#/" className="brand-logo right">
              Logo
            </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a href="#/">React shop</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
