import { BookingLink } from "@/components/BookingLink";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export function ServicePage({
  eyebrow,
  title,
  description,
  details,
  note,
  custom = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  details: string[];
  note: string;
  custom?: boolean;
}) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow={eyebrow} title={title}>
            <p>{description}</p>
          </PageIntro>
          <div className="hero__actions">
            <BookingLink custom={custom}>
              {custom ? "Ask about a trip" : "Check current options"}
            </BookingLink>
            <a className="text-link" href={`tel:${site.phoneHref}`}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container content-split">
          <div>
            <p className="eyebrow">Plan the ride</p>
            <h2>Start with the trip you have in mind.</h2>
          </div>
          <div className="content-split__body">
            <ul className="service-detail-list">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="callout-line">
              <p>{note}</p>
              <a className="text-link" href={`tel:${site.phoneHref}`}>
                Call to confirm <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section section--canvas">
        <div className="container">
          <div className="final-cta">
            <div>
              <p className="eyebrow">Airport Express · San Francisco</p>
              <h2>Ready to plan your trip?</h2>
            </div>
            <div className="final-cta__actions">
              <BookingLink custom={custom} />
              <p>
                Or call <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
