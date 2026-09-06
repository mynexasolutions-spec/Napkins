import Image from 'next/image';
import { Category, whatsappUrl } from '@/lib/site';

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const enquiryMessage = category.enquiryMessage ??
    `Hello JF World Trading, I want to enquire about ${category.name}. Please share price and availability.`;

  return (
    <article className="category-card">
      <div className="category-image">
        <Image src={category.image} alt={category.name} fill sizes="(max-width: 640px) 45vw, 220px" />
      </div>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <a
        className="category-card-cta"
        href={whatsappUrl(enquiryMessage)}
        target="_blank"
        rel="noreferrer"
      >
        {category.ctaLabel ?? 'Enquire Now'}
      </a>
    </article>
  );
}