import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Private and point-to-point transportation",
  description:
    "Ask Airport Express about direct, hourly, and point-to-point transportation around San Francisco and the Bay Area.",
  alternates: { canonical: "/services/private-transportation" },
};

export default function PrivateTransportationPage() {
  return (
    <ServicePage
      description="Not headed to an airport? Airport Express also provides private and point-to-point transportation within its operating area. Share the route you have in mind and confirm availability with the team."
      details={[
        "Direct rides between confirmed locations",
        "Hourly transportation options",
        "Routes with multiple stops",
        "Local and regional trips around the Bay Area",
      ]}
      eyebrow="Private transportation"
      note="The service area is approximate. Call to confirm a destination before making plans."
      title="A direct ride for the trip you need to make."
    />
  );
}
