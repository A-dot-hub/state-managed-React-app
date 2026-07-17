import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice.js';
import CartItem from '../components/CartItem.jsx';

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="p-20 text-center dark:text-white">Your cart is empty</div>;
  }

  return (
    <div className="p-4 pt-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Your Cart</h2>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg dark:text-white">
        <p>Total Quantity: {totalQuantity}</p>
        <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        <button onClick={() => dispatch(clearCart())} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">Clear Cart</button>
      </div>
    </div>
  );
}
