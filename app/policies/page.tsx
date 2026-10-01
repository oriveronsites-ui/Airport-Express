import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Policies and trip terms",
  description:
    "Contact Airport Express to confirm current cancellation, payment, and trip policies before booking.",
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow="Policies" title="Confirm the current terms for your trip.">
            <p>
              Trip terms can change. Please review the current details provided with your reservation
              and contact Airport Express if you have questions before booking.
            </p>
          </PageIntro>
        </div>
      </section>
      <section className="page-section">
        <div className="container content-split">
          <div>
            <p className="eyebrow">Ask before you book</p>
            <h2>Get the terms that apply to your ride.</h2>
          </div>
          <div className="content-split__body">
            <p>
              Older Airport Express pages contain policy details that need current confirmation.
              Contact the team about cancellation or refund terms, airport changes, luggage, child
              seats, pets, payment, or special arrangements.
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
