import { useMemo, useState, useRef, useEffect } from 'react';
import { stores } from '../data/stores';
import { categories, categoryMap } from '../data/categories';
import MaterialIcon from './MaterialIcon';

function getInitials(name) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function StoreDirectory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [anchorsOnly, setAnchorsOnly] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stores.filter((store) => {
      if (anchorsOnly && !store.anchor) return false;
      if (category !== 'all' && store.category !== category) return false;
      if (!q) return true;
      return (
        store.name.toLowerCase().includes(q) ||
        categoryMap[store.category]?.toLowerCase().includes(q) ||
        store.floor.toLowerCase().includes(q)
      );
    });
  }, [query, category, anchorsOnly]);

  const activeCategory = categories.find((c) => c.id === category);

  return (
    <section className="section directory-section" id="directory">
      <div className="container">
        <p className="section-label">Store & Brand Directory</p>
        <h2 className="section-title">Discover 161+ Brands</h2>
        <p className="section-desc directory-desc">
          Explore Electronics City&apos;s premier collection of fashion anchors,
          gourmet dining, cinema multiplex, and lifestyle stores.
        </p>

        <div className="search-bar" ref={filterRef}>
          <div className="search-input-wrap">
            <MaterialIcon name="search" className="search-icon" size={20} />
            <input
              type="search"
              placeholder="Search stores…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search stores"
            />
          </div>

          <button
            type="button"
            className="filter-trigger"
            onClick={() => setFilterOpen((o) => !o)}
            aria-expanded={filterOpen}
            aria-haspopup="listbox"
          >
            <MaterialIcon
              name={activeCategory?.icon || 'filter_list'}
              size={18}
            />
            <span>{category === 'all' ? 'Filter' : activeCategory?.label}</span>
            <MaterialIcon name="expand_more" size={18} />
          </button>

          {filterOpen && (
            <div className="filter-dropdown" role="listbox">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="option"
                  aria-selected={category === cat.id}
                  className={`filter-option ${category === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    setCategory(cat.id);
                    setFilterOpen(false);
                  }}
                >
                  <MaterialIcon name={cat.icon} size={18} />
                  <span>{cat.label}</span>
                </button>
              ))}
              <div className="filter-divider" />
              <button
                type="button"
                className={`filter-option anchor-toggle ${anchorsOnly ? 'active' : ''}`}
                onClick={() => setAnchorsOnly((a) => !a)}
              >
                <MaterialIcon name="star" size={18} />
                <span>Show Anchors Only</span>
                <MaterialIcon
                  name={anchorsOnly ? 'toggle_on' : 'toggle_off'}
                  size={20}
                />
              </button>
            </div>
          )}
        </div>

        <div className="directory-meta">
          <span className="store-count-badge">{filtered.length} stores</span>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <MaterialIcon name="storefront" size={32} />
            <p>No stores match your search. Try a different filter or keyword.</p>
          </div>
        ) : (
          <div className="store-grid">
            {filtered.map((store) => (
              <article key={store.id} className="store-card">
                <div className="store-avatar">{getInitials(store.name)}</div>
                <div className="store-card-body">
                  <h3>
                    {store.name}
                    {store.anchor && (
                      <MaterialIcon name="star" size={14} className="anchor-star" />
                    )}
                  </h3>
                  <div className="store-meta">
                    <span className="floor-badge">{store.floor}</span>
                    <span className="category-tag">
                      {categoryMap[store.category]}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
