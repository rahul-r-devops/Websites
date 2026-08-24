import { useMemo, useState, useRef, useEffect } from 'react';
import { storeBrands } from '../data/storeBrands';
import { categories, categoryMap } from '../data/categories';
import MaterialIcon from './MaterialIcon';
import BrandLogo from './BrandLogo';

const floorFilters = [
  { id: 'LGF', label: 'LGF' },
  { id: 'UGF', label: 'UGF' },
  { id: '1F', label: '1F' },
  { id: '2F', label: '2F' },
  { id: '3F', label: '3F' },
  { id: '4F', label: '4F' },
];

export default function StoreDirectory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [floor, setFloor] = useState('LGF');
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
    return storeBrands.filter((store) => {
      if (!store.logo) return false;
      if (category !== 'all' && store.category !== category) return false;
      if (floor && store.floor !== floor) return false;
      if (!q) return true;
      return (
        store.name.toLowerCase().includes(q) ||
        categoryMap[store.category]?.toLowerCase().includes(q) ||
        store.floor.toLowerCase().includes(q)
      );
    });
  }, [query, category, floor]);

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

        <div className="directory-toolbar">
          <div className="search-bar" ref={filterRef}>
            <div className="search-input-wrap">
              <MaterialIcon name="search" className="search-icon" size={20} />
              <input
                type="search"
                placeholder="Search brands…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search brands"
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
              <span>{category === 'all' ? 'Category' : activeCategory?.label}</span>
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
              </div>
            )}
          </div>

          <div className="floor-filter-pills" role="tablist" aria-label="Filter by floor">
            {floorFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={floor === f.id}
                className={`floor-filter-pill ${floor === f.id ? 'active' : ''}`}
                onClick={() => setFloor(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="directory-meta">
          <span className="store-count-badge">
            Showing {filtered.length} of {storeBrands.length} brands
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <MaterialIcon name="storefront" size={32} />
            <p>No brands match your search. Try a different filter or keyword.</p>
          </div>
        ) : (
          <div className="brand-logo-grid">
            {filtered.map((brand) => (
              <div key={brand.id} className="brand-logo-cell">
                <div className="brand-logo-item">
                  <div className="brand-logo-frame">
                    <BrandLogo name={brand.name} logo={brand.logo} />
                  </div>
                  <p className="brand-logo-tooltip">{brand.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
