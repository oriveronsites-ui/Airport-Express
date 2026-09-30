import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">Page not found</p>
        <h1>Let’s get you back on route.</h1>
        <p>The page you’re looking for may have moved.</p>
        <Link className="button" href="/">
          Return to Airport Express
        </Link>
      </div>
    </section>
  );
}
