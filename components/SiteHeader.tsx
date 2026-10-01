"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = usePathname() === "/";

  return (
    <header className={`site-header${isHome ? " is-home" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-header__inner">
        <Link
          aria-label="Airport Express home"
          className="brand-link"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            alt="Airport Express"
            className="brand-link__image"
            height={766}
            priority
            src={site.logo}
            width={2053}
          />
        </Link>

        <a
          aria-label="Book a ride"
          className="mobile-book-link"
          href={site.reservationUrl}
          rel="noreferrer"
          target="_blank"
        >
          Book <span aria-hidden="true">↗</span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span className="sr-only">Menu</span>
        </button>

        <nav
          aria-label="Primary navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a
            className="button button--small button--red primary-navigation__book"
            href={site.reservationUrl}
            rel="noreferrer"
            target="_blank"
          >
            Book a ride <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
