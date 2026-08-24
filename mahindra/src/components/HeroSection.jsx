import { useState, useCallback, Suspense } from 'react';
import Scene3D from './Scene3D';
import { hero, scene3d } from '../data/mallContent';
import { sceneFloors } from '../data/floors';
import StatsStrip from './StatsStrip';
import MaterialIcon from './MaterialIcon';

function SceneLoader() {
  return (
    <div className="scene-loader">
      <div className="scene-loader-bar" />
      <p>{scene3d.loadingLabel}</p>
    </div>
  );
}

export default function HeroSection({ activeFloor, onFloorChange }) {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = useCallback(() => {
    onFloorChange(null);
    setResetKey((k) => k + 1);
  }, [onFloorChange]);

  const selectedFloor = sceneFloors.find((f) => f.id === activeFloor);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            Make space
            <br />
            for <em>more.</em>
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-desc">{hero.description}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#directory">
              {hero.ctaPrimary}
            </a>
            <a className="btn-ghost" href="#visit">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero-3d-wrap">
          <div className="hero-3d-header">
            <div>
              <p className="hero-3d-label">3D Mall Simulator · Interactive 4-Level Model</p>
              <h2 className="hero-3d-title">{scene3d.title}</h2>
              <p className="hero-3d-sub">{scene3d.subtitle}</p>
            </div>
            <button
              type="button"
              className="reset-camera-btn"
              onClick={handleReset}
            >
              <MaterialIcon name="refresh" size={16} />
              {scene3d.resetLabel}
            </button>
          </div>

          <div className="scene-container">
            <Suspense fallback={<SceneLoader />}>
              <Scene3D
                key={resetKey}
                activeFloor={activeFloor}
                onLoaded={() => {}}
              />
            </Suspense>
          </div>

          <div className="floor-selector-3d">
            {sceneFloors.map((floor) => (
              <button
                key={floor.id}
                type="button"
                className={`floor-3d-btn ${activeFloor === floor.id ? 'active' : ''}`}
                onClick={() =>
                  onFloorChange(activeFloor === floor.id ? null : floor.id)
                }
              >
                {floor.label}
              </button>
            ))}
          </div>

          {selectedFloor && (
            <div className="selected-floor-info">
              <span className="selected-floor-label">
                Selected Level: {selectedFloor.short}
              </span>
              <h4>{selectedFloor.title}</h4>
              <p>{selectedFloor.description}</p>
            </div>
          )}

          <p className="explore-hint">
            Drag to rotate · Scroll to zoom
          </p>
        </div>
      </div>

      <StatsStrip />
    </section>
  );
}
