export const site = {
  name: "Airport Express",
  shortDescription:
    "San Francisco airport transportation and rides throughout an approximately 60-mile operating area.",
  url: "https://airportexpresssf.com",
  phoneDisplay: "(415) 775-5121",
  phoneHref: "+14157755121",
  email: "info@airportexpresssf.com",
  reservationUrl: "https://airportexpresssf.com/reservation",
  customTripUrl: "https://airportexpresssf.com/reservation?types=inquire",
  logo: "/images/airport-express-logo.png",
  shareImage: "/images/airport-express-social.webp",
} as const;

export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/where-we-go", label: "Where we go" },
  { href: "/pickup-information", label: "Pickup help" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const internalPages = [
  "/",
  "/services",
  "/services/airport-transportation",
  "/services/private-transportation",
  "/services/groups-and-charters",
  "/where-we-go",
  "/pickup-information",
  "/about",
  "/contact",
  "/faq",
  "/policies",
] as const;
