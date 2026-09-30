import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers about Airport Express transportation, service area, reservations, and pickup help.",
  alternates: { canonical: "/faq" },
};

const questions = [
  {
    question: "Do you only provide airport transportation?",
    answer:
      "No. Airport Express also offers private, point-to-point, local, regional, group, and charter transportation within its operating area.",
  },
  {
    question: "Which airports do you serve?",
    answer:
      "The current Airport Express website lists San Francisco International Airport (SFO) and Oakland International Airport (OAK). Check the current reservation options or call to confirm your trip.",
  },
  {
    question: "Is my destination within the service area?",
    answer:
      "Airport Express describes an approximately 60-mile operating vicinity. The actual trip area depends on the locations and current availability, so call to confirm a specific destination.",
  },
  {
    question: "How do I book a ride?",
    answer:
      "Continue to the current Airport Express reservation page to check rates and submit a booking, or call (415) 775-5121 for help with a custom trip.",
  },
  {
    question: "Where can I find airport pickup instructions?",
    answer:
      "Use the pickup information in your current reservation confirmation. Procedures can vary, so call Airport Express at (415) 775-5121 if you need help at SFO or OAK.",
  },
  {
    question: "Can I confirm current policies or special trip needs?",
    answer:
      "Yes. Ask Airport Express directly about current cancellation terms, luggage, child seats, accessibility, pets, or other special requirements before booking.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <PageIntro eyebrow="Frequently asked questions" title="The trip details, made clearer.">
            <p>
              A quick guide to services, the approximate operating area, booking, and pickup help.
              Call Airport Express when you need an answer specific to your reservation.
            </p>
          </PageIntro>
        </div>
      </section>
      <section className="page-section">
        <div className="container content-split">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Before you ride.</h2>
            <p className="section-heading__copy">
              For current rates and availability, use the reservation system or call {site.phoneDisplay}.
            </p>
          </div>
          <div className="faq-list">
            {questions.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
