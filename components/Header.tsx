'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { business } from '@/lib/site';

const links = [
  { href: '/',              label: 'Home' },
  { href: '/about',         label: 'About Us' },
  { href: '/shop',          label: 'Products', hasCaret: true },
  { href: '/#why-choose-us', label: 'Why Choose Us' },
  { href: '/gallery',       label: 'Gallery' },
  { href: '/contact',       label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  /* Close menu on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* Close menu on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href.includes('#')) return pathname === '/' && activeHash === href.slice(href.indexOf('#'));
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const scrollToPageTop = (href: string) => {
    if (!href.includes('#')) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-shell">
        <div className="gst-strip">GSTIN: {business.gstin}</div>

        {/* Brand */}
        <Link className="brand" href="/" aria-label="JF World Trading Home">
          <span>JF</span>
          <div>
            <strong>World Trading</strong>
            <small>Textiles for a Better Tomorrow</small>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={isActive(link.href) ? 'active' : ''}
              aria-current={isActive(link.href) ? 'page' : undefined}
              onClick={() => scrollToPageTop(link.href)}
            >
              {link.label}
              {'hasCaret' in link && link.hasCaret
                ? <span className="nav-caret">▾</span>
                : null}
            </Link>
          ))}
        </nav>

        {/* Header actions */}
        <div className="header-actions">
          {/* Phone pill — desktop */}
          <a className="phone-pill" href={`tel:+91${business.phone}`}>
            <span aria-hidden="true"><Image src="/call-icon.png" alt="" width={18} height={18} /></span>
            <span>
              <span>{business.owner}</span>
              <strong>{business.phone}</strong>
            </span>
          </a>

          {/* Hamburger — mobile */}
          <div className="mobile-nav" ref={menuRef}>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>

            <nav
              className={`mobile-menu${menuOpen ? ' open' : ''}`}
              aria-label="Mobile navigation"
            >
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={isActive(link.href) ? 'active' : ''}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  onClick={() => {
                    scrollToPageTop(link.href);
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                style={{ marginTop: 8, paddingTop: 12, borderTop: '1px solid var(--line)', color: 'var(--teal)', fontWeight: 700 }}
                href={`tel:+91${business.phone}`}
              >
                {business.phone}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
