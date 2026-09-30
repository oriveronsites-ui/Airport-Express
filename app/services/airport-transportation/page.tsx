import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "SFO and OAK airport transportation",
  description:
    "Plan Airport Express transportation to or from San Francisco International Airport (SFO) or Oakland International Airport (OAK).",
  alternates: { canonical: "/services/airport-transportation" },
};

export default function AirportTransportationPage() {
  return (
    <ServicePage
      description="Airport transportation is a core Airport Express service. The current site lists trips to and from San Francisco International Airport (SFO) and Oakland International Airport (OAK)."
      details={[
        "San Francisco International Airport (SFO)",
        "Oakland International Airport (OAK)",
        "Trips to or from a confirmed pickup and destination",
        "Current rates and options through the reservation page",
      ]}
      eyebrow="Airport transportation"
      note="Pickup points and procedures vary. Use the instructions in your current reservation confirmation."
      title="Airport transportation with a clear next step."
    />
  );
}
