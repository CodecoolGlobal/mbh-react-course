import { useParams } from 'react-router-dom';
import products from './products';

function ProductDetail() {
  const { id } = useParams();
  
  const product = products.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    alert('Item added');
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;