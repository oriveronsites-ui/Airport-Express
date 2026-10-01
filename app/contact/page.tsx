import type { Metadata } from "next";
import { BookingLink } from "@/components/BookingLink";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Airport Express",
  description:
    "Contact Airport Express in San Francisco by phone or email, or check online booking options.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow="Contact" title="Need help with your trip?">
            <p>
              Call Airport Express about a destination, reservation, or airport pickup. For written
              questions, email the team.
            </p>
            <div className="hero__actions contact-page__actions">
              <a className="button button--red" href={`tel:${site.phoneHref}`}>
                Call {site.phoneDisplay}
              </a>
              <a className="text-link" href={`mailto:${site.email}`}>
                Email Airport Express <span aria-hidden="true">→</span>
              </a>
            </div>
          </PageIntro>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="callout-line" data-motion="rise">
            <p>Ready to check rates and available options?</p>
            <BookingLink />
          </div>
        </div>
      </section>
    </>
  );
}
