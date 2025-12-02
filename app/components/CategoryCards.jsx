import {Link} from 'react-router';

/**
 * Shop by Category section with glass cards
 * @param {{collections: Array}} props
 */
export function CategoryCards({collections}) {
  if (!collections || collections.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6 bg-dark-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 gradient-text-red">
          Shop by Category
        </h2>
        <p className="text-center text-white/60 mb-12 text-lg">
          Explore our curated collections
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.handle}`}
            >
              <div className="category-card">
                {collection.image && (
                  <div className="category-card-image">
                    <img
                      src={collection.image.url}
                      alt={collection.image.altText || collection.title}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="category-card-content">
                  <h3 className="category-card-title">
                    {collection.title}
                  </h3>
                  {collection.description && (
                    <p className="category-card-description">
                      {collection.description.length > 100 
                        ? `${collection.description.substring(0, 100)}...` 
                        : collection.description}
                    </p>
                  )}
                  <div className="category-card-footer">
                    <span className="category-card-count">
                      {collection.products?.nodes?.length || 0} products
                    </span>
                    <span className="category-card-explore">
                      Explore <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
