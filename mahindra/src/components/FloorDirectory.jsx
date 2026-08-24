import { useMemo, useState } from 'react';
import { floors } from '../data/floors';
import { stores } from '../data/stores';
import { categoryMap } from '../data/categories';
import MaterialIcon from './MaterialIcon';

export default function FloorDirectory() {
  const [activeFloor, setActiveFloor] = useState('lgf');
  const [floorSearch, setFloorSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const floor = floors.find((f) => f.id === activeFloor);

  const floorStores = useMemo(() => {
    const q = floorSearch.trim().toLowerCase();
    let list = stores.filter((s) => s.floor === floor?.label);

    if (q) {
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          categoryMap[s.category]?.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => {
      if (sortBy === 'category') {
        return categoryMap[a.category]?.localeCompare(categoryMap[b.category] || '');
      }
      return a.name.localeCompare(b.name);
    });

    return list;
  }, [activeFloor, floor, floorSearch, sortBy]);

  return (
    <section className="section floor-section" id="floors">
      <div className="container">
        <p className="section-label">Interactive Floor Directory</p>
        <h2 className="section-title">Explore M5 Ecity Floor by Floor</h2>
        <p className="section-desc">
          6 levels of world-class retail, gourmet dining, multiplex cinema, and
          family entertainment zones.
        </p>

        <div className="floor-dashboard">
          <nav className="floor-selector" aria-label="Floor selector">
            {floors.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`floor-tab ${activeFloor === f.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveFloor(f.id);
                  setFloorSearch('');
                }}
              >
                <span className="floor-tab-label">{f.shortLabel}</span>
                <span className="floor-tab-name">{f.name.split(' ')[0]}</span>
              </button>
            ))}
          </nav>

          <div className="floor-panel">
            <div className="floor-panel-content" key={activeFloor}>
              <div className="floor-panel-header">
                <div>
                  <p className="floor-panel-eyebrow">{floor?.label} Level Overview</p>
                  <h3>{floor?.title}</h3>
                  <p className="floor-panel-desc">{floor?.description}</p>
                </div>
                <a href="#directory" className="floor-directory-link">
                  View All Stores in Directory
                  <MaterialIcon name="arrow_forward" size={16} />
                </a>
              </div>

              <div className="floor-highlights">
                <h4>Highlights</h4>
                <ul>
                  {floor?.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="floor-anchors">
                <h4>Featured Floor Anchors</h4>
                <div className="anchor-chips">
                  {floor?.anchors.map((a) => (
                    <span key={a} className="anchor-chip">{a}</span>
                  ))}
                </div>
              </div>

              <div className="floor-stores-panel">
                <div className="floor-stores-header">
                  <h4>
                    Stores on {floor?.label}
                    <span className="floor-store-count">
                      {floorStores.length} Brands Operating
                    </span>
                  </h4>
                  <div className="floor-stores-controls">
                    <div className="floor-search-wrap">
                      <MaterialIcon name="search" size={16} />
                      <input
                        type="search"
                        placeholder="Search on this floor…"
                        value={floorSearch}
                        onChange={(e) => setFloorSearch(e.target.value)}
                        aria-label="Search stores on this floor"
                      />
                    </div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      aria-label="Sort stores"
                      className="floor-sort"
                    >
                      <option value="name">Sort by name</option>
                      <option value="category">Sort by category</option>
                    </select>
                  </div>
                </div>

                <div className="floor-table-wrap">
                  <table className="floor-table">
                    <thead>
                      <tr>
                        <th>Store</th>
                        <th>Category</th>
                        <th>Floor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {floorStores.map((store) => (
                        <tr key={store.id}>
                          <td>
                            <span className="floor-store-name">
                              {store.name}
                              {store.anchor && (
                                <MaterialIcon name="star" size={12} />
                              )}
                            </span>
                          </td>
                          <td>{categoryMap[store.category]}</td>
                          <td>{store.floor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
