import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Groups and charters",
  description:
    "Talk with Airport Express about group transportation and charter plans in the San Francisco Bay Area.",
  alternates: { canonical: "/services/groups-and-charters" },
};

export default function GroupsAndChartersPage() {
  return (
    <ServicePage
      custom
      description="Airport Express offers group and charter transportation. Share your itinerary with the team so they can confirm what is available for your trip."
      details={[
        "Share your pickup and destination",
        "Include your preferred date and timing",
        "Describe any planned stops or coordination needs",
        "Confirm availability and arrangements directly with Airport Express",
      ]}
      eyebrow="Groups and charters"
      note="Vehicle sizes, passenger capacities, and availability are confirmed for each inquiry."
      title="Bring the group. We’ll help plan the route."
    />
  );
}
