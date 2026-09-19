export default function PlanetMark() {
  return (
    <span className="planet-mark" aria-hidden="true">
      <span className="planet-ring" />
      <span className="planet-body" />
      <span className="planet-highlight" />
    </span>
  );
}

export function ArrowIcon() {
	return (
		<svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
			<path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" />
		</svg>
	);
}
