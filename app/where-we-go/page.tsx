import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { RegionDiagram } from "@/components/RegionDiagram";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Where we go",
  description:
    "Airport Express provides transportation throughout an approximately 60-mile operating vicinity around San Francisco. Call to confirm your destination.",
  alternates: { canonical: "/where-we-go" },
};

export default function WhereWeGoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow="Where we go" title="The airport is not the edge of the map.">
            <p>
              Airport Express offers airport transportation and rides throughout an approximately
              60-mile operating vicinity. A specific destination is always worth confirming with the
              team.
            </p>
          </PageIntro>
        </div>
      </section>
      <section aria-label="Illustrative Airport Express service area" className="page-section">
        <div className="container region-section">
          <div className="region-section__copy motion-sequence" data-motion="sequence">
            <p className="eyebrow" data-motion-part="eyebrow">
              One region, many kinds of trips
            </p>
            <div className="motion-heading-mask" data-motion-part="heading">
              <h2>Airport, local, and regional rides.</h2>
            </div>
            <p data-motion-part="copy">
              The approximate service vicinity is a guide, not a promised boundary. The right trip
              depends on your pickup, destination, date, and current availability.
            </p>
            <p data-motion-part="detail">
              The current Airport Express site lists SFO and OAK transportation and describes hourly
              trips around the greater San Francisco Bay Area.
            </p>
            <a className="text-link" data-motion-part="action" href={`tel:${site.phoneHref}`}>
              Call about a destination <span aria-hidden="true">→</span>
            </a>
          </div>
          <RegionDiagram className="motion-image" data-motion="image" />
        </div>
      </section>
      <section className="page-section section--canvas">
        <div className="container content-split" data-motion="stagger">
          <div>
            <p className="eyebrow">Not sure if your destination is covered?</p>
            <h2>Tell the team where you need to go.</h2>
          </div>
          <div className="content-split__body">
            <p>
              Call Airport Express with your pickup location and destination. The team can confirm
              whether it fits the current operating area and explain the available next step.
            </p>
            <a className="button button--red" href={`tel:${site.phoneHref}`}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
