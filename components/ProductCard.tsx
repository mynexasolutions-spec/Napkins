import Image from 'next/image';
import { Product, whatsappUrl } from '@/lib/site';

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const message = `Hello JF World Trading, I want to buy ${product.name}. Please share price and availability.`;

  return (
    <article className={`product-card${compact ? ' product-card-compact' : ''}`}>
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 240px"
        />
        {!compact && (
          <span className="product-image-badge">{product.category}</span>
        )}
      </div>
      <div className="product-copy">
        {!compact && (
          <span className="cat-label">{product.category}</span>
        )}
        <h3>{product.name}</h3>
        {!compact && <p>{product.description}</p>}
        <a href={whatsappUrl(message)} target="_blank" rel="noreferrer">
          {compact ? 'Enquire' : 'Buy on WhatsApp'}
        </a>
      </div>
    </article>
  );
}
