import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/slices/cartSlice.js';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm transition-colors">
      <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
      <div className="grow">
        <h4 className="font-semibold dark:text-white">{item.title}</h4>
        <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(decreaseQuantity(item.id))} className="bg-gray-200 dark:bg-gray-700 px-2 rounded">-</button>
        <span className="dark:text-white">{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))} className="bg-gray-200 dark:bg-gray-700 px-2 rounded">+</button>
      </div>
      <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 ml-4">Remove</button>
    </div>
  );
}
