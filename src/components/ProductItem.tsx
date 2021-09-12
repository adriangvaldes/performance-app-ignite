import { memo } from 'react';
import '../index.css';


interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

function ProductItemComponent ({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <span style={{fontWeight: 900}}>{product.price}</span>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})