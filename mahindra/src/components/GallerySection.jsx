import { gallery, instagram, vibeSquare } from '../data/mallContent';
import { galleryItems } from '../data/gallery';
import { instagramPosts, instagramProfile } from '../data/instagram';
import MaterialIcon from './MaterialIcon';

export default function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <p className="section-label">Gallery</p>
        <h2 className="section-title">{gallery.title}</h2>
        <p className="section-desc">{gallery.description}</p>

        <div className="gallery-masonry">
          {galleryItems.map((item) => (
            <article
              key={item.label}
              className={`gallery-masonry-card gallery-span-${item.span}`}
            >
              <img src={item.image} alt={item.label} loading="lazy" />
              <div className="gallery-masonry-overlay">
                <span className="gallery-tone">{item.tone}</span>
                <h3>{item.label}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VibeSquareSection() {
  return (
    <section className="section vibe-section" id="vibe-square">
      <div className="container vibe-inner">
        <div>
          <p className="section-label">Vibe Square</p>
          <h2 className="section-title">{vibeSquare.title}</h2>
          <p className="section-desc">{vibeSquare.description}</p>
        </div>
        <div className="vibe-visual">
          <img
            src={galleryItems.find((i) => i.label === 'Vibe Square')?.image}
            alt="Vibe Square at M5 Ecity Mall"
            loading="lazy"
          />
          <span>Open-air events · UGF</span>
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="section instagram-section" id="instagram">
      <div className="container">
        <div className="instagram-header">
          <div>
            <p className="section-label">Instagram Feed</p>
            <h2 className="section-title">{instagram.title}</h2>
            <p className="section-desc">{instagram.description}</p>
          </div>
          <a
            href={instagramProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-profile-link"
          >
            <MaterialIcon name="photo_camera" size={20} />
            <span>{instagramProfile.handle}</span>
            <span className="instagram-followers">{instagramProfile.followers} followers</span>
          </a>
        </div>

        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={instagramProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
            >
              <img src={post.image} alt={post.caption} loading="lazy" />
              <div className="instagram-post-overlay">
                <p>{post.caption}</p>
                <span className="instagram-likes">
                  <MaterialIcon name="favorite" size={14} />
                  {post.likes}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
