import { stats } from '../data/mallContent';

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="container stats-strip-inner">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-unit">{stat.unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
