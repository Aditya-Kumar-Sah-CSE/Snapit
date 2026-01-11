import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { Plus, Minus, ShoppingBag, ArrowLeft, Star, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-[#0E2931] text-white px-6 py-2 rounded-xl"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Optional: show a toast or feedback
  };

  const handleOrderNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#0E2931] mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Thumbnail placeholders could go here */}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#0E2931]/5 text-[#0E2931] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={18} fill="currentColor" />
                    <span className="text-gray-900 font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-3xl font-bold text-[#0E2931]">₹{product.price}</p>
                <p className="text-gray-500 mt-1">Inclusive of all taxes</p>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quality Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <ShieldCheck className="text-green-600" size={24} />
                  <div>
                    <p className="text-xs font-bold text-gray-900">100% Organic</p>
                    <p className="text-[10px] text-gray-500">Quality Assured</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <Truck className="text-blue-600" size={24} />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Free Delivery</p>
                    <p className="text-[10px] text-gray-500">On orders above ₹500</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Total: ₹{product.price * quantity}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-white border-2 border-[#0E2931] text-[#0E2931] py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                  >
                    <Plus size={20} />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleOrderNow}
                    className="flex-1 bg-[#0E2931] text-white py-4 rounded-2xl font-bold hover:bg-[#1a4a58] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0E2931]/20"
                  >
                    <ShoppingBag size={20} />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
