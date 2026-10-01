import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/where-we-go", label: "Where we go" },
  { href: "/pickup-information", label: "Pickup help" },
  { href: "/faq", label: "Frequently asked questions" },
  { href: "/policies", label: "Policies" },
  { href: "/about", label: "About Airport Express" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand" data-motion="rise">
            <Link aria-label="Airport Express home" href="/">
              <Image
                alt="Airport Express"
                height={766}
                src={site.logo}
                width={2053}
              />
            </Link>
            <p>San Francisco transportation, from airport rides to trips around the Bay.</p>
          </div>

          <div className="site-footer__contact" data-motion="rise">
            <span className="eyebrow eyebrow--light">Talk with our team</span>
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>

          <nav aria-label="Footer navigation" className="site-footer__links" data-motion="rise">
            {footerLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>Airport Express · San Francisco, California</span>
          <span>Current trip terms and pickup details are confirmed through Airport Express.</span>
          <span>
            SFO international terminal photo by Håkan Dahlström, licensed under{" "}
            <a href="https://creativecommons.org/licenses/by/2.0/" rel="noreferrer" target="_blank">
              CC BY 2.0
            </a>
            ; cropped, resized, and converted to WebP. <a href="https://commons.wikimedia.org/wiki/File:SFO_international_terminal.jpg" rel="noreferrer" target="_blank">Source</a>.
          </span>
        </div>
      </div>
    </footer>
  );
}
