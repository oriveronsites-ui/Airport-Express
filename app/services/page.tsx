import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Transportation services",
  description:
    "Explore Airport Express airport transportation, private point-to-point rides, regional trips, and group and charter transportation.",
  alternates: { canonical: "/services" },
};

const services = [
  ["Airport transportation", "/services/airport-transportation", "Rides to and from SFO and OAK."],
  [
    "Private and point-to-point",
    "/services/private-transportation",
    "Direct rides, hourly trips, and more than one stop.",
  ],
  [
    "Local and regional transportation",
    "/where-we-go",
    "Transportation within an approximately 60-mile operating vicinity.",
  ],
  [
    "Groups and charters",
    "/services/groups-and-charters",
    "Talk with the team about your group’s plans and timing.",
  ],
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow="Services" title="Transportation for more than airport days.">
            <p>
              Airport Express specializes in airport rides and also provides private, local, regional,
              group, and charter transportation around San Francisco.
            </p>
          </PageIntro>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="service-list">
            {services.map(([title, href, copy]) => (
              <Link className="service-row" href={href} key={title}>
                <h2 className="service-row__title">{title}</h2>
                <span aria-hidden="true" className="service-row__arrow">
                  ↗
                </span>
                <p className="service-row__copy">{copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
