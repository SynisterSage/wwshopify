import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';

/**
 * Featured products grid with glass cards
 * @param {{products: Array}} props
 */
export function FeaturedProducts({products}) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 text-glow-red">
          Featured Products
        </h2>
        <p className="text-center text-white/60 mb-12 text-lg">
          Handpicked items just for you
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.handle}`}
            >
              <div className="category-card">
                {/* Product Image */}
                {product.featuredImage && (
                  <div className="category-card-image">
                    <Image
                      data={product.featuredImage}
                      aspectRatio="1/1"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="category-card-content">
                  <h3 className="category-card-title product-card-title">
                    {product.title}
                  </h3>

                  {/* Price */}
                  <div className="category-card-description" style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-red-400)', marginBottom: '1rem'}}>
                    <Money data={product.priceRange.minVariantPrice} />
                  </div>

                  {/* CTA */}
                  <div className="category-card-footer">
                    <span className="category-card-count">
                      {product.availableForSale ? 'In Stock' : 'Sold Out'}
                    </span>
                    <span className="category-card-explore">
                      View Details <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link to="/collections/all">
            <button className="hero-cta">
              View All Products →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
