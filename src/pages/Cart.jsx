import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  const deliveryCharge = cartTotal > 500 ? 0 : 40;
  const platformFee = 5;
  const totalAmount = cartTotal + deliveryCharge + platformFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 ">
        <div className="bg-gray-50 p-8 rounded-full mb-6">
          <ShoppingBag size={64} className="text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#0E2931] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#1a4a58] transition-all flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 md:gap-6 group"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900 truncate pr-4">{item.name}</h3>
                    <p className="text-lg font-bold text-[#0E2931]">₹{item.price * item.quantity}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{item.category}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-xl transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                      <Trash2 size={18} />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#0E2931] font-bold mt-4 hover:underline"
            >
              <Plus size={20} />
              Add more items
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CreditCard size={20} />
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charges</span>
                  <span className={deliveryCharge === 0 ? "text-green-600 font-bold" : ""}>
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>
                {deliveryCharge > 0 && (
                  <p className="text-[10px] text-gray-400 bg-gray-50 p-2 rounded-lg">
                    Add ₹{500 - cartTotal} more to get FREE delivery!
                  </p>
                )}
                <div className="border-t border-dashed border-gray-200 pt-4 mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-black text-[#0E2931]">₹{totalAmount}</span>
                </div>
              </div>

              <button className="w-full bg-[#0E2931] text-white py-4 rounded-2xl font-bold hover:bg-[#1a4a58] transition-all shadow-lg shadow-[#0E2931]/20 flex items-center justify-center gap-2">
                Proceed to Checkout
              </button>

              <div className="mt-6 space-y-3">
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">Secure Payment</p>
                <div className="flex justify-center gap-4 opacity-50 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Visa_2014_logo_detail.svg" alt="Visa" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
