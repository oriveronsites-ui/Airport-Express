import { site } from "@/lib/site";
import type { ReactNode } from "react";

export function BookingLink({
  children = "Book a ride",
  className = "button button--red",
  custom = false,
  hourly = false,
}: {
  children?: ReactNode;
  className?: string;
  custom?: boolean;
  hourly?: boolean;
}) {
  return (
    <a
      className={className}
      href={custom ? site.customTripUrl : hourly ? site.hourlyTripUrl : site.reservationUrl}
      rel="noreferrer"
      target="_blank"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
