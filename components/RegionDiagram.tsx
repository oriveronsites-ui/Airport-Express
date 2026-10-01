export function RegionDiagram() {
  return (
    <div
      aria-label="Illustrative route diagram showing SFO, San Francisco, OAK, and a destination to confirm. It does not show exact routes or boundaries."
      className="region-diagram"
      role="img"
    >
      <span className="region-diagram__node">SFO</span>
      <span className="region-diagram__node">San Francisco</span>
      <span className="region-diagram__node">OAK</span>
      <span className="region-diagram__node">Your destination</span>
      <p className="region-diagram__label">Illustrative route diagram · not to scale</p>
    </div>
  );
}
