import { useState } from 'react';

function getInitials(name) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

function BrandLogo({ name, logo }) {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <span className="brand-logo-fallback" aria-hidden="true">
        {getInitials(name)}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      loading="lazy"
      width={400}
      height={400}
      onError={() => setFailed(true)}
    />
  );
}

export default BrandLogo;
