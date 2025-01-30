import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  return (
    <div className="text-center m-3 p-3 border-4 border-gray-400 rounded">
      <h1 className="text-2xl font bold">Cart</h1>
      <div className="w-1/2 m-auto">
        <button
          className="rounded-sm border cursor-pointer p-1 m-2 text-sm bg-gray-400"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
        <ItemList items={cart} />
      </div>
    </div>
  );
};

export default Cart;
