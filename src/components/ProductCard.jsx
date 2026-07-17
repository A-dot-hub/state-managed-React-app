import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice.js';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col transition-colors">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
      <h3 className="text-lg font-semibold dark:text-white truncate mb-2">{product.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.category}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold dark:text-white">${product.price}</span>
        <span className="text-sm text-yellow-500">★ {product.rating.rate}</span>
      </div>
      <button 
        onClick={() => dispatch(addToCart({ id: product.id, title: product.title, price: product.price, image: product.image }))}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
