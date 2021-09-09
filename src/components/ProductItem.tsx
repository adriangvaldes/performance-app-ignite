import '../index.css';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

export function ProductItem ({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <span style={{fontWeight: 900}}>{product.price}</span>
    </div>
  );
}