import { site } from "@/lib/site";

export function MobileActionBar() {
  return (
    <nav aria-label="Quick travel actions" className="mobile-action-bar">
      <a href={`tel:${site.phoneHref}`}>Call</a>
      <a className="mobile-action-bar__book" href={site.reservationUrl} rel="noreferrer" target="_blank">
        Book
      </a>
      <a href="/pickup-information">Pickup</a>
    </nav>
  );
}
