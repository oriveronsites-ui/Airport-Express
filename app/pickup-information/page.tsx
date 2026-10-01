import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Airport pickup help",
  description:
    "Find the current Airport Express pickup instructions in your reservation confirmation. Call the team if you need help at SFO or OAK.",
  alternates: { canonical: "/pickup-information" },
};

export default function PickupInformationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow="Pickup help" title="Your pickup details, right when you need them.">
            <p>
              Airport pickup procedures can change by terminal and reservation. Use the latest
              instructions provided for your trip.
            </p>
          </PageIntro>
        </div>
      </section>
      <section className="page-section">
        <div className="container content-split">
          <div>
            <p className="eyebrow">Before you head to the pickup point</p>
            <h2 data-motion="mask">Check your current trip confirmation.</h2>
          </div>
          <div className="content-split__body" data-motion="rise">
            <ul className="service-detail-list service-detail-list--single">
              <li>Confirm the airport and pickup instructions for your specific reservation.</li>
              <li>Keep your booking details available when you contact the dispatcher.</li>
              <li>If you arrive and need help, call Airport Express at {site.phoneDisplay}.</li>
            </ul>
            <div className="callout-line">
              <p>Need pickup help now?</p>
              <a className="button button--red" href={`tel:${site.phoneHref}`}>
                Call Airport Express
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section section--canvas">
        <div className="container">
            <div className="notice" data-motion="image">
            <p>
              Older pickup instructions online may not reflect current airport procedures. Follow
              your current confirmation or call Airport Express before relying on a location listed
              elsewhere.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
