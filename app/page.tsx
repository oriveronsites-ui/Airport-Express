import type { Metadata } from "next";
import Link from "next/link";
import { AirportExpressHero } from "@/components/AirportExpressHero";
import { FirstSectionReveal } from "@/components/FirstSectionReveal";
import { BookingLink } from "@/components/BookingLink";
import { RegionDiagram } from "@/components/RegionDiagram";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Airport rides and Bay Area transportation",
  description:
    "Airport transportation to and from SFO and OAK, plus point-to-point rides throughout an approximately 60-mile operating area.",
  alternates: { canonical: "/" },
};

const services = [
  {
    href: "/services/airport-transportation",
    title: "Airport transportation",
    copy: "Plan a ride to or from San Francisco International Airport or Oakland International Airport.",
  },
  {
    href: "/services/private-transportation",
    title: "Private and point-to-point",
    copy: "A direct ride, an hourly trip, or a route with more than one stop.",
  },
  {
    href: "/where-we-go",
    title: "Local and regional rides",
    copy: "Airport Express also travels beyond the airport throughout its approximate operating vicinity.",
  },
  {
    href: "/services/groups-and-charters",
    title: "Groups and charters",
    copy: "Talk with the team about coordinating transportation for a group or custom itinerary.",
  },
];

const questions = [
  {
    question: "Do you only provide airport transportation?",
    answer:
      "No. Airport transportation is a specialty, and Airport Express also offers private, point-to-point, local, regional, group, and charter transportation. Ask about your destination to confirm the trip details.",
  },
  {
    question: "Which airports can I book?",
    answer:
      "Airport Express offers airport trips to and from San Francisco International Airport (SFO) and Oakland International Airport (OAK). Check the booking options or call to confirm your trip details.",
  },
  {
    question: "How do I get pickup instructions?",
    answer:
      "Pickup details can vary by airport and reservation. Follow the instructions in your current confirmation. If you need help, call Airport Express at (415) 775-5121.",
  },
  {
    question: "How can I check rates or arrange a custom trip?",
    answer:
      "Use the current reservation page to check rates and submit a booking. For a custom destination or group itinerary, call Airport Express to discuss the trip.",
  },
];

export default function HomePage() {
  return (
    <>
      <FirstSectionReveal hero={<AirportExpressHero />}>
        <section aria-labelledby="services-title" className="section section--arrival">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">One ride, different reasons</p>
                <h2 id="services-title">
                  <span className="section-heading__title-mask">
                    <span>Wherever you’re headed, start here.</span>
                  </span>
                </h2>
              </div>
              <p className="section-heading__copy">
                Airport Express specializes in airport transportation and also takes trips beyond
                the airport. Choose the ride that fits, then confirm your details with the team.
              </p>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <Link className="service-row" href={service.href} key={service.title}>
                  <h3 className="service-row__title">{service.title}</h3>
                  <span aria-hidden="true" className="service-row__arrow">
                    ↗
                  </span>
                  <p className="service-row__copy">{service.copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FirstSectionReveal>

      <section aria-labelledby="area-title" className="section section--canvas">
        <div className="container region-section">
          <div className="region-section__copy motion-sequence" data-motion="sequence">
            <p className="eyebrow" data-motion-part="eyebrow">
              Where we go
            </p>
            <div className="motion-heading-mask" data-motion-part="heading">
              <h2 id="area-title">The airport is one stop in a much bigger region.</h2>
            </div>
            <p data-motion-part="copy">
              Airport Express provides transportation throughout an approximately 60-mile operating
              vicinity. The actual trip area depends on the destination and ride details.
            </p>
            <Link className="text-link" data-motion-part="action" href="/where-we-go">
              Explore the service area <span aria-hidden="true">→</span>
            </Link>
          </div>
          <RegionDiagram className="motion-image" data-motion="image" />
        </div>
      </section>

      <section aria-labelledby="airport-title" className="section">
        <div className="container">
          <div className="pickup-band">
            <div className="motion-sequence" data-motion="sequence">
              <p className="eyebrow" data-motion-part="eyebrow">
                Airport transportation
              </p>
              <div className="motion-heading-mask" data-motion-part="heading">
                <h2 id="airport-title">A clear next step when you land.</h2>
              </div>
            </div>
            <div className="pickup-band__copy motion-sequence" data-motion="sequence">
              <p data-motion-part="copy">
                Pickup details can change by airport and reservation. Check the instructions in your
                current confirmation. If you need help at SFO or OAK, call Airport Express.
              </p>
              <a
                className="button button--red"
                data-motion-part="action"
                href={`tel:${site.phoneHref}`}
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="steps-title" className="section section--blue-wash">
        <div className="container">
          <div className="section-heading">
            <div className="motion-sequence" data-motion="sequence">
              <p className="eyebrow" data-motion-part="eyebrow">
                How it works
              </p>
              <div className="motion-heading-mask" data-motion-part="heading">
                <h2 id="steps-title">A simple way to plan the ride.</h2>
              </div>
            </div>
            <p className="section-heading__copy" data-motion="rise">
              Check online booking options for available trips. For a destination or itinerary
              that needs a conversation, the Airport Express team is a phone call away.
            </p>
          </div>
          <div className="process-grid" data-motion="stagger">
            <article className="process-step">
              <h3>Choose your trip</h3>
              <p>Airport, point-to-point, local, regional, group, or charter transportation.</p>
            </article>
            <article className="process-step">
              <h3>Book or ask</h3>
              <p>Check current options online, or call to discuss a custom destination or plan.</p>
            </article>
            <article className="process-step">
              <h3>Check pickup details</h3>
              <p>Use the latest trip confirmation for directions, and call if anything is unclear.</p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="groups-title" className="section">
        <div className="container heritage-split">
          <div className="motion-sequence" data-motion="sequence">
            <p className="eyebrow" data-motion-part="eyebrow">
              Groups and charters
            </p>
            <div className="motion-heading-mask" data-motion-part="heading">
              <h2 id="groups-title">A trip with more moving parts?</h2>
            </div>
          </div>
          <div className="heritage-split__copy motion-sequence" data-motion="sequence">
            <p data-motion-part="copy">
              Tell Airport Express where you’re going and what you need to coordinate. The team can
              confirm whether the trip fits its current service and help with the right next step.
            </p>
            <div data-motion-part="action">
              <BookingLink custom>Ask about a custom trip</BookingLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-title" className="section section--canvas">
        <div className="container">
          <div className="heritage-split">
            <div className="motion-sequence" data-motion="sequence">
              <p className="eyebrow" data-motion-part="eyebrow">
                Airport Express
              </p>
              <div className="motion-heading-mask" data-motion-part="heading">
                <h2 id="about-title">San Francisco transportation, beyond the airport.</h2>
              </div>
            </div>
            <div className="heritage-split__copy motion-sequence" data-motion="sequence">
              <p data-motion-part="copy">
                Airport Express is a San Francisco transportation company with airport transportation
                as a specialty. It also offers private, point-to-point, local, regional, group, and
                charter rides within its operating area.
              </p>
              <Link className="text-link" data-motion-part="action" href="/about">
                About Airport Express <span aria-hidden="true">→</span>
              </Link>
              <div className="trust-row" data-motion="stagger">
                <div>
                  <h3>Airport rides</h3>
                  <p>Transportation to and from SFO and OAK.</p>
                </div>
                <div>
                  <h3>More than airport trips</h3>
                  <p>Ask about local, regional, and point-to-point rides.</p>
                </div>
                <div>
                  <h3>Talk to a person</h3>
                  <p>Call when you need help confirming a trip or pickup.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="section">
        <div className="container content-split">
          <div className="motion-sequence" data-motion="sequence">
            <p className="eyebrow" data-motion-part="eyebrow">
              Good to know
            </p>
            <div className="motion-heading-mask" data-motion-part="heading">
              <h2 id="faq-title">A few quick answers.</h2>
            </div>
            <p className="section-heading__copy" data-motion-part="copy">
              For current rates, pickup steps, and trip terms, use the reservation page or call.
            </p>
            <Link className="text-link" data-motion-part="action" href="/faq">
              All frequently asked questions <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="faq-list" data-motion="stagger">
            {questions.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="final-title" className="section section--canvas">
        <div className="container final-cta">
          <div className="motion-sequence" data-motion="sequence">
            <p className="eyebrow" data-motion-part="eyebrow">
              Ready when you are
            </p>
            <div className="motion-heading-mask" data-motion-part="heading">
              <h2 id="final-title">Let’s get your next trip moving.</h2>
            </div>
          </div>
          <div className="final-cta__actions motion-sequence" data-motion="sequence">
            <div data-motion-part="action">
              <BookingLink />
            </div>
            <p data-motion-part="after-action">
              Or call <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
