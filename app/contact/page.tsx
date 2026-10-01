import type { Metadata } from "next";
import { BookingLink } from "@/components/BookingLink";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Airport Express",
  description:
    "Contact Airport Express in San Francisco by phone or email, or continue to the current reservation system.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow="Contact" title="Questions about the trip? Let’s sort out the details.">
            <p>
              Call for help confirming a destination, custom itinerary, reservation, or airport pickup.
              For written questions, email the Airport Express team.
            </p>
          </PageIntro>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="contact-options" data-motion="stagger">
            <section className="contact-option">
              <h2>Call</h2>
              <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
              <p>For reservations, pickup help, or to ask about a destination.</p>
            </section>
            <section className="contact-option">
              <h2>Email</h2>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>Share your route and what you need help arranging.</p>
            </section>
          </div>
          <div className="callout-line" data-motion="rise">
            <p>Want to check current rates and options?</p>
            <BookingLink />
          </div>
        </div>
      </section>
      <section className="page-section section--canvas">
        <div className="container content-split" data-motion="stagger">
          <div>
            <p className="eyebrow">Need quick help?</p>
            <h2>Pick up the phone.</h2>
          </div>
          <div className="content-split__body">
            <p>
              The current Airport Express website lists {site.phoneDisplay} as its primary contact
              number. If you are already at the airport, keep your reservation details nearby when you
              call.
            </p>
            <a className="button button--red" href={`tel:${site.phoneHref}`}>
              Call Airport Express
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
