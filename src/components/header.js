import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(false);
  };

  return (
    <header id="header">
      <h1 className="site-title"><Link href="/"><img src="/img/common/logo-r.svg" alt="BBB英会話スクール"/></Link></h1>
      <nav id="navi" className={menuOpen ? 'open' : ''} onClick={openMenu}>
        <img className="logo" src="/img/common/logo-w.svg" alt="BBB英会話スクール"/>
        <ul className="menu">
          <li><Link href="/#reason" onClick={closeMenu}>BBBが選ばれる理由</Link></li>
          <li><Link href="/#voice" onClick={closeMenu}>受講生の声</Link></li>
          <li><Link href="/#summary" onClick={closeMenu}>スクールの概要</Link></li>
          <li><Link href="/news" onClick={closeMenu}>News List</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/campaign" onClick={closeMenu}>Campaign</Link></li>
        </ul>
        <a className="btn" href="#hoge" onClick={closeMenu}>無料体験に申し込む</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;