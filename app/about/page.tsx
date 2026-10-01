import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About Airport Express",
  description:
    "Airport Express is a San Francisco transportation company specializing in airport transportation and rides around the Bay Area.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow="About Airport Express" title="San Francisco transportation, from here to there.">
            <p>
              Airport Express is a San Francisco transportation company specializing in airport
              transportation while also serving local, regional, point-to-point, group, and charter
              trips.
            </p>
          </PageIntro>
        </div>
      </section>
      <section className="page-section">
        <div className="container content-split">
          <div>
            <p className="eyebrow">A practical way to get around</p>
            <h2 data-motion="mask">Airport trips are one part of the work.</h2>
          </div>
          <div className="content-split__body" data-motion="rise">
            <p>
              Some trips start or end at SFO or OAK. Others stay local, cross the Bay, or need more
              planning for a group. Airport Express provides a clear place to begin for each kind of
              ride.
            </p>
            <p>
              Share the locations and timing you have in mind. Use the current reservation system
              for listed options, or call if the trip is more involved.
            </p>
          </div>
        </div>
      </section>
      <section className="page-section section--canvas">
        <div className="container content-split">
          <div>
            <p className="eyebrow">The right next step</p>
            <h2 data-motion="mask">Keep the trip details simple.</h2>
          </div>
          <div className="content-split__body" data-motion="rise">
            <p>
              Current availability, pickup instructions, and service details should be confirmed for
              each reservation. Airport Express can help by phone if the website does not answer a
              question about your trip.
            </p>
            <a className="text-link" href="/contact">
              Contact Airport Express <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
